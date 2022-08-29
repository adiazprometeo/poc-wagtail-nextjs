from server.settings.components import config

WAGTAIL_SITE_NAME = 'My Project'
WAGTAILADMIN_BASE_URL = 'http://api.local.test'

NEXT_PUBLIC_NEXT_BASE = config("NEXT_PUBLIC_NEXT_BASE")
HEADLESS_PREVIEW_CLIENT_URLS = {
    "default": f'{NEXT_PUBLIC_NEXT_BASE}/api/preview/', 
}
