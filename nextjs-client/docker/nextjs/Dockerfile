# Install dependencies only when needed
FROM node:14.20.0-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY ./package.json ./yarn.lock .
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:14.20.0-alpine AS builder

WORKDIR /usr/src/app

COPY --from=deps /usr/src/app/node_modules ./node_modules

COPY . .

RUN yarn build

# Production image, copy all the files and run next
FROM node:14.20.0-alpine AS runner
WORKDIR /usr/src/app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nextjsuser && adduser --system --uid 1001 nextjsgroup

COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjsuser:nextjsgroup /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjsuser:nextjsgroup /usr/src/app/.next/static ./.next/static

USER nextjsuser

EXPOSE 3002

ENV PORT 3002

CMD ["yarn", "server.js"]
