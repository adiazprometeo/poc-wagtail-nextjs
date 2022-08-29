# =========================================== STAGE BUILDER ===========================================
FROM python:3.9 AS builder

# -- Establecer directorio de trabajo --
WORKDIR /opt

# -- Definir variable de entorno VIRTUAL_ENV=/opt/venv que es donde se instalarán las dependencias del proyecto
ENV VIRTUAL_ENV=/opt/venv

# -- Creando entorno virtual de python con el comando venv
RUN python3 -m venv $VIRTUAL_ENV

# -- Configurar la variable de entorno VIRTUAL_ENV en el camino del sistema
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# -- Actualizar pip e instalar dependencias --
RUN pip install --upgrade pip \
    && pip install sphinx sphinx-autobuild recommonmark sphinx_rtd_theme sphinxcontrib-swaggersphinx sphinxcontrib-jupyter sphinx-autodoc-napoleon-typehints sphinx-autodoc-typehints

# =========================================== STAGE BUILDER ===========================================

# =========================================== STAGE FINAL =============================================
FROM python:3.9-slim-buster

# -- Descripciones de la imagen --
LABEL maintainer="Alexei Díaz Soto - dsoto.alexei@gmail.com" \
    description="Imagen para desplegar documentación de Sphinx" \
    vendor="ADS" \
    license="MIT" \
    version="1.0.0"

# -- Establecer variables de entorno
# -- PYTHONDONTWRITEBYTECODE: si se establece en una cadena no vacía, Python no intentará escribir archivos .pyc en la importación de módulos fuente --
# -- PYTHONUNBUFFERED: permite que los mensajes de registro se vuelquen inmediatamente a la transmisión en lugar de almacenarse en búfer --
# -- LANG: establece la codificación utf-8 para Python. En general C. es para computadora --
ENV PYTHONDONTWRITEBYTECODE="1" \
    PYTHONUNBUFFERED="1" \
    LANG="C.UTF-8" \
    LC_ALL="C.UTF-8" \
    PATH="/opt/venv/bin:$PATH"

# -- Copie solo la instalación de las dependencias de la imagen builder de la primera etapa --
COPY --from=builder /opt/venv /opt/venv

# -- Establecer directorio de trabajo --
WORKDIR /usr/src/docs

EXPOSE 9011

CMD ["/bin/bash", "-c", "sphinx-autobuild -a /usr/src/docs/source /usr/src/docs/build/html --host 0.0.0.0 --port 9011  --watch /usr/src/docs/source" ]
# =========================================== STAGE FINAL =============================================
