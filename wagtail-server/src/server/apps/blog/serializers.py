from rest_framework import serializers
from .models import BlogCategory, PostPage, Tag, BlogPage, BasePage
from .fields import TagField, CategoryField
from wagtail.api.v2.serializers import StreamField
from wagtail.api.v2 import serializers as wagtail_serializers
from wagtail.images.api.fields import ImageRenditionField
from wagtail.core import fields


class BasePageSerializer(serializers.ModelSerializer):
    serializer_field_mapping = (
        serializers.ModelSerializer.serializer_field_mapping.copy()
    )
    
    serializer_field_mapping.update(
        {fields.StreamField: wagtail_serializers.StreamField}
    )

    class Meta:
        model = BasePage
        fields = (
            "id",
            "slug",
            "title",
            "url",
            "last_published_at",
            "seo_json_title",
            "seo_json_description",
        )


class BlogPageSerializer(BasePageSerializer):
    class Meta:
        model = BlogPage
        fields = BasePageSerializer.Meta.fields
        

class PostPageSerializer(BasePageSerializer):
    tags = TagField()
    categories = CategoryField()
    # body = StreamField()
    header_image = ImageRenditionField("max-1000x800")

    class Meta:
        model = PostPage
        fields = BasePageSerializer.Meta.fields + (
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
