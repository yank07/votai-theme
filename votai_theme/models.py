# coding=utf-8
from django.db import models
from candidator.models import Position


class AnswerValue(models.Model):
	position = models.OneToOneField(Position)
	value = models.IntegerField(default=0)
