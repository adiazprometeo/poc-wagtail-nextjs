from django.apps import AppConfig


class BlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blog'

    # def ready(self):
    #     from blog.receivers import register_signal_handlers
    #     register_signal_handlers()
