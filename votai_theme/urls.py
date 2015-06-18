from django.conf import settings
from django.conf.urls import patterns, url
from votai_them.views import MediaNaranjaView

urlpatterns = patterns('',
                      url(r'^election/(?P<slug>[-\w]+)/soul-mate/?$',
                          MediaNaranjaView.as_view(template_name='elections/soulmate_candidate.html'),
                          name='soul_mate_detail_view'),
                      )