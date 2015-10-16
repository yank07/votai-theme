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

class YQSPositionAdmin(admin.ModelAdmin):
    inlines = [TakenPositionInline, AnswerValueInline, ]
    search_fields = ['label', 'topic__label', 'topic__category__name']

admin.site.unregister(Position)
admin.site.register(Position, YQSPositionAdmin)


class YQSPosition(Position):
    def save(self, *args, **kwargs):
        super(YQSPosition, self).save(*args, **kwargs)
        for candidate in self.topic.election.candidates.all():
            TakenPosition.objects.get_or_create(topic=self.topic, position=self, person=candidate)


    class Meta:
        proxy = True


class YQSPositionForm(forms.ModelForm):
    model = YQSPosition


class YQSPositionInline(admin.TabularInline):
    model = YQSPosition
    form = YQSPositionForm


class TopicAdmin(admin.ModelAdmin):
    inlines = [YQSPositionInline, ]
    form = TopicModelForm
    list_display = ('__str__', 'election')
    search_fields = ['label', 'category__name']

admin.site.unregister(Topic)
admin.site.register(Topic, TopicAdmin)