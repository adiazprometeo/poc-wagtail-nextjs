from django.urls import path
from django.contrib.contenttypes.models import ContentType
from rest_framework import serializers
from wagtail.api.v2.router import WagtailAPIRouter
from wagtail.api.v2.views import BaseAPIViewSet, PagesAPIViewSet
from wagtail.core.models import Page
from server.apps.blog.serializers import CategorySerializer, TagSerializer
from server.apps.blog.models import BlogCategory, Tag


api_router = WagtailAPIRouter("nextjs")
api_router.register_endpoint('pages', PagesAPIViewSet)


class PageRelativeUrlListSerializer(serializers.Serializer):
    def to_representation(self, obj):
        return {
            "title": obj.title,
            "relative_url": obj.url,
        }


class PageRelativeUrlListAPIViewSet(PagesAPIViewSet):
    """Return all pages and their relative url"""
    model = Page

    def get_serializer(self, qs, many=True):
        return PageRelativeUrlListSerializer(qs, many=many)

    @classmethod
    def get_urlpatterns(cls):
        return [
            path("", cls.as_view({"get": "listing_view"}), name="listing"),
        ]


api_router.register_endpoint("page_relative_urls", PageRelativeUrlListAPIViewSet)


# class PagePreviewAPIViewSet(PagesAPIViewSet):
#     known_query_parameters = PagesAPIViewSet.known_query_parameters.union(
#         ["content_type", "token"]
#     )

#     def listing_view(self, request):
#         page = self.get_object()
#         return page.serve(request)

#     def detail_view(self, request, pk):
#         page = self.get_object()
#         return page.serve(request)

#     def get_object(self):
#         app_label, model = self.request.GET["content_type"].split(".")
#         content_type = ContentType.objects.get(app_label=app_label, model=model)

#         page_preview = PagePreview.objects.get(
#             content_type=content_type, token=self.request.GET["token"]
#         )
#         page = page_preview.as_page()
#         if not page.pk:
#             # fake primary key to stop API URL routing from complaining
#             page.pk = 0

#         return page


# api_router.register_endpoint("page_preview", PagePreviewAPIViewSet)


class CategoryAPIViewSet(BaseAPIViewSet):
    base_serializer_class = CategorySerializer
    filter_backends = []
    meta_fields = []
    body_fields = ['id', 'slug', 'name']
    listing_default_fields = ['id', 'slug', 'name']
    nested_default_fields = []
    name = 'category'
    model = BlogCategory


api_router.register_endpoint("category", CategoryAPIViewSet)


class TagAPIViewSet(BaseAPIViewSet):
    base_serializer_class = TagSerializer
    filter_backends = []
    meta_fields = []
    body_fields = ['id', 'slug', 'name']
    listing_default_fields = ['id', 'slug', 'name']
    nested_default_fields = []
    name = 'tag'
    model = Tag


api_router.register_endpoint("tag", TagAPIViewSet)
