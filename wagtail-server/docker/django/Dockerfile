# ======================================= ARGUMENTOS GLOBALES ======================================
ARG AENVIRONMENT=production
# ======================================= ARGUMENTOS GLOBALES ======================================

# ======================================= INSTALAR DEPENDENCIAS DEL PROYECTO =======================
# == USAR PARA DESARROLLO Y PRUEBA =================================================================
FROM python:3.9.4 AS development-builder

# -- Copiar los requerimientos --
COPY ./requirements ./opt/requirements

# -- Configurar el PATH del sistema
ENV PATH=/opt/venv/bin:$PATH

# -- Actualizar pip e instalar dependencias con poetry --
RUN python -m venv /opt/venv \
    && . /opt/venv/bin/activate \
    && pip install --upgrade pip \
    && cd /opt \
    && pip install --no-cache-dir -r ./requirements/development.txt

WORKDIR /opt
# == USAR PARA DESARROLLO Y PRUEBA =================================================================
# == USAR PARA PRODUCCION Y PUESTA EN ESCENA =======================================================
FROM python:3.9.4 AS production-builder

# -- Copiar los requerimientos --
COPY ./requirements ./opt/requirements

# -- Configurar el PATH del sistema
ENV PATH=/opt/venv/bin:$PATH

# -- Actualizar pip e instalar dependencias --
RUN python -m venv /opt/venv \
    && . /opt/venv/bin/activate \
    && pip install --upgrade pip \
    && cd /opt \
    && pip install --no-cache-dir -r ./requirements/production.txt

WORKDIR /opt
# == USAR PARA PRODUCCION Y PUESTA EN ESCENA =======================================================
# ======================================= INSTALAR DEPENDENCIAS DEL PROYECTO =======================

# ======================================= ADICIONAR EL CODIGO DEL PROYECTO =========================
# == USAR PARA DESARROLLO Y PRUEBA =================================================================
FROM python:3.9.4-slim-buster AS development-code

# -- Descripciones de la imagen --
LABEL maintainer="Alexei Diaz Soto - dsoto.alexei@gmail.com" \
    description="Image to deploy applications with the Django Framework" \
    vendor="ADS" \
    license=MIT \
    version=1.0.0

# -- Establecer argumentos
# -- Nombre del grupo y usuario para ejecutar nuestra aplicacion --
ARG AAPP_GROUP=django
ARG AAPP_USER=wagtail
ARG ADJANGO_SETTINGS_MODULE=server.settings
ARG ATZ=America/Argentina/Buenos_Aires

# -- Establecer variables de entorno
# -- PYTHONDONTWRITEBYTECODE: si se establece en una cadena no vacía, Python no intentará escribir archivos .pyc en la importación de módulos fuente --
# -- PYTHONUNBUFFERED: permite que los mensajes de registro se vuelquen inmediatamente a la transmisión en lugar de almacenarse en búfer --
# -- LANG: establece la codificación utf-8 para Python. En general C. es para computadora --
# -- Adicionar al PATH del sistema --
# -- Agregue su archivo de configuración aquí --
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    PYTHONPATH=/opt/venv/bin \
    DJANGO_SETTINGS_MODULE=$ADJANGO_SETTINGS_MODULE \
    PATH=/opt/venv/bin:$PATH \
    TZ=$ATZ

# -- Copie solo la instalación de las dependencias de la imagen builder de la primera etapa --
COPY --from=development-builder /opt/venv /opt/venv

# -- Establecer directorio de trabajo --
WORKDIR /usr/src/app

# -- Instalar dependencias del sistema operativo --
RUN apt-get clean && DEBIAN_FRONTEND=noninteractive && apt-get update && apt-get install -y \
    musl-dev \
    curl \
    libffi-dev \
    libpq-dev \
    libxslt-dev \
    swig \
    tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone \
    && dpkg-reconfigure -f noninteractive tzdata \
    && apt-get clean \
    && apt-get autoremove \
    && rm -rf /var/lib/apt/lists/*

# -- Crear grupo y usuario para ejectuar la aplicación --
RUN groupadd -r ${AAPP_GROUP} && useradd --no-log-init -r -g ${AAPP_GROUP} ${AAPP_USER} \
    && chown -R ${AAPP_USER}:${AAPP_GROUP} /usr/src/app

# -- Cambiar a un usuario no root --
USER ${AAPP_USER}:${AAPP_GROUP}
# == USAR PARA DESARROLLO Y PRUEBA =================================================================
# == USAR PARA PRODUCCION Y PUESTA EN ESCENA =======================================================
FROM python:3.9.4-slim-buster AS production-code

# -- Descripciones de la imagen --
LABEL maintainer="Alexei Diaz - dsoto.alexei@gmail.com" \
    description="Image to deploy applications with the Django Framework" \
    vendor="ADS" \
    license=MIT \
    version=1.0.0

# -- Establecer argumentos
# -- Nombre del grupo y usuario para ejecutar nuestra aplicacion --
ARG AAPP_GROUP=django
ARG AAPP_USER=wagtail
ARG ADJANGO_SETTINGS_MODULE=server.settings
ARG ATZ=America/Argentina/Buenos_Aires

# -- Establecer variables de entorno
# -- PYTHONDONTWRITEBYTECODE: si se establece en una cadena no vacía, Python no intentará escribir archivos .pyc en la importación de módulos fuente --
# -- PYTHONUNBUFFERED: permite que los mensajes de registro se vuelquen inmediatamente a la transmisión en lugar de almacenarse en búfer --
# -- LANG: establece la codificación utf-8 para Python. En general C. es para computadora --
# -- Adicionar al PATH del sistema --
# -- Agregue su archivo de configuración aquí --
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    PYTHONPATH=/opt/venv/bin \
    DJANGO_SETTINGS_MODULE=$ADJANGO_SETTINGS_MODULE \
    DJANGO_ENV=production \
    PATH=/opt/venv/bin:$PATH \
    TZ=$ATZ

# -- Copia las dependencias del proyecto para production --
COPY --from=production-builder /opt/venv /opt/venv

# -- Establecer directorio de trabajo --
WORKDIR /usr/src/app

# -- Instalar dependencias del sistema operativo --
RUN apt-get clean && DEBIAN_FRONTEND=noninteractive && apt-get update && apt-get install -y \
    musl-dev \
    libffi-dev \
    libpq-dev \
    libxslt-dev \
    swig \
    tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone \
    && dpkg-reconfigure -f noninteractive tzdata \
    && apt-get clean \
    && apt-get autoremove \
    && rm -rf /var/lib/apt/lists/*

COPY ./src .

# -- Crear grupo y usuario para ejectuar la aplicación --
RUN groupadd -r ${AAPP_GROUP} && useradd --no-log-init -r -g ${AAPP_GROUP} ${AAPP_USER} \
    && chown -R ${AAPP_USER}:${AAPP_GROUP} /usr/src/app

# -- Cambiar a un usuario no root --
USER ${AAPP_USER}:${AAPP_GROUP}
# == USAR PARA PRODUCCION Y PUESTA EN ESCENA =======================================================
# ======================================= ADICIONAR EL CODIGO DEL PROYECTO =========================

# ======================================= IMAGE TERMINADA ==========================================
FROM ${AENVIRONMENT}-code
# ======================================= IMAGE TERMINADA ==========================================
