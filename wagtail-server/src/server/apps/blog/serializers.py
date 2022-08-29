from rest_framework import serializers
from .models import BlogCategory, PostPage, Tag, BlogPage
from .fields import TagField, CategoryField
from wagtail.api.v2.serializers import StreamField
from wagtail.images.api.fields import ImageRenditionField


class BlogPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPage
        fields = (
            "id",
            "slug",
            "title",
            "url",
            "last_published_at",
        )
        

class PostPageSerializer(serializers.ModelSerializer):
    tags = TagField()
    categories = CategoryField()
    body = StreamField()
    header_image = ImageRenditionField("max-1000x800")

    class Meta:
        model = PostPage
        fields = (
            "id",
            "slug",
            "title",
            "url",
            "last_published_at",
            "tags",
            "categories",
            "body",
            "header_image",
        )


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory
        fields = (
            "id",
            "slug",
            "name",
        )


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = (
            "id",
            "slug",
            "name",
        )
