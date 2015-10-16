from django.contrib import admin
from votai_theme.models import AnswerValue
from elections.models import Topic
from elections.admin import TakenPositionInline
from elections.admin import Position, TopicModelForm
from django import forms
from django.utils.encoding import python_2_unicode_compatible
from candidator.models import TakenPosition

    
class AnswerValueInline(admin.TabularInline):
    model = AnswerValue
    extra = 1
    max_num = 1

class Topic(Topic):
    def save(self, *args, **kwargs):
        super(YQSTopic, self).save(*args, **kwargs)
        for candidate in self.election.candidates.all():
            Topic.objects.get_or_create(topic=self.topic, position=null, person=candidate)


    class Meta:
        proxy = True

# admin.site.unregister(Topic)
admin.site.register(Topic)