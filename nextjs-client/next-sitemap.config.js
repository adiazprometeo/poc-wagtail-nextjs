/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_NEXT_BASE || 'http://www.local.test:3002',
    generateRobotsTxt: true,
}
