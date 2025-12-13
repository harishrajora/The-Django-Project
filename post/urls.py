from django.urls import re_path, path
from . import views

app_name = "post"

urlpatterns = [
    path("about/", views.about_us, name = "about"),
    path("contact/", views.contact_us, name = "contact"),

    path("index/", views.post_index, name = "index"),
    re_path(r'^(?P<id>\d+)/$', views.post_detail, name = "detail"), 
    # r'^(?P<id>\d+)/$' doesnt work with path

    # Ajax real time update functions
    path("index/upvotes/", views.post_index_upvotes_ajax, name = "index_upvotes"),
    path("index/views/", views.post_index_views_ajax, name = "index_views"),
    re_path(r'^(?P<id>\d+)/upvotes/$', views.post_detail_upvotes_ajax, name = "get_post_upvotes"), 
    re_path(r'^(?P<id>\d+)/views/$', views.post_detail_views_ajax, name = "get_post_view"), 


    path("create/", views.post_create, name = "create"),
    re_path(r'^(?P<id>\d+)/update/$', views.post_update, name = "update"),
    re_path(r'^(?P<id>\d+)/delete/$', views.post_delete, name = "delete"),

    re_path(r'^(?P<id>\d+)/delete_post_adminpanel/$', views.delete_post_adminpanel, name = "delete_post_adminpanel"),
    re_path(r'^(?P<id>\d+)/delete_contact_adminpanel/$', views.delete_contact_adminpanel, name = "delete_contact_adminpanel"),
    re_path(r'^(?P<id>\d+)/modify_contact_adminpanel/$', views.modify_contact_adminpanel, name = "modify_contact_adminpanel"),

    re_path(r'^(?P<id>\d+)/upvote/$', views.upvote_post, name = "upvote_post"),
    re_path(r'^(?P<id>\d+)/upvote/detail/$', views.upvote_post_detail, name = "upvote_post_detail"),
]
