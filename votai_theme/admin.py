from django.contrib import admin
from votai_theme.models import AnswerValue
from elections.admin import TakenPositionInline
from elections.admin import Position
	
class AnswerValueInline(admin.TabularInline):
    model = AnswerValue
    extra = 1
    max_num = 1

class YQSPositionAdmin(admin.ModelAdmin):
    inlines = [TakenPositionInline, AnswerValueInline, ]
    search_fields = ['label', 'topic__label', 'topic__category__name']

admin.site.unregister(Position)
admin.site.register(Position, YQSPositionAdmin)