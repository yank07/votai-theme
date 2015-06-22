from django.conf.urls import patterns, url
from votai_theme.views import MediaNaranjaView, MedianaranjaJsonView

urlpatterns = patterns('',
                       url(r'^election/(?P<slug>[-\w]+)/media-naranja/?$',
                           MediaNaranjaView.as_view(template_name='elections/soulmate_candidate.html'),
                           name='soul_mate_detail_view'),
                       url(r'^election/(?P<slug>[-\w]+)/media-naranja\.json$',
                           MedianaranjaJsonView.as_view(),
                           name='soul_mate_detail_view_json'),
                       )
