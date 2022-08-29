from dj_database_url import parse as db_url
from server.settings.components import config

# =======================================================================
# -- Database -- #
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases
# =======================================================================

DATABASE_URL = config("DATABASE_URL", None)
if not DATABASE_URL:
    raise ValueError('You must have "DATABASE_URL" variable')

default_db_config = config(
    'DATABASE_URL',
    cast=db_url,
)
default_db_config['CONN_MAX_AGE'] = 600

DATABASES: object = {
    'default': default_db_config,
}
# =======================================================================

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': config('POSTGRES_DB'),
#         'USER': config('POSTGRES_USER'),
#         'PASSWORD': config('POSTGRES_PASSWORD'),
#         'HOST': config('DJANGO_DATABASE_HOST'),
#         'PORT': config('DJANGO_DATABASE_PORT', cast=int),
#         'CONN_MAX_AGE': config('CONN_MAX_AGE', cast=int, default=60),
#         'OPTIONS': {
#             'connect_timeout': 10,
#         },
#     },
# }

# DATABASES: object = {
#     # "default": {"ENGINE": "django.db.backends.sqlite3", "NAME": ":memory:"}
#     "default": {"ENGINE": "django.db.backends.sqlite3", "NAME": "wagtail.sqlite3"}
# }
