"""
This is a django-split-settings main file.

For more information read this:
https://github.com/sobolevn/django-split-settings
https://sobolevn.me/2017/04/managing-djangos-settings

To change settings file:
`DJANGO_ENV=production python manage.py runserver`
"""

from os import environ

from split_settings.tools import include, optional  # type: ignore

# Managing environment via `DJANGO_ENV` variable:
environ.setdefault("DJANGO_ENV", "development")
_ENV = environ["DJANGO_ENV"]

_base_settings = (
    "components/common.py",  # standard django settings
    "components/database.py",
    "components/caches.py",
    # "components/drf.py",
    # "components/cors.py",
    "components/wagtail.py",
    "components/logging.py",
    # Select the right env:
    f"environments/{_ENV}.py",
    # Optionally override some settings:
    optional("environments/local.py"),
)

# Include settings:
include(*_base_settings)
