# coding=utf-8
from django.db import models
from candidator.models import TakenPosition


class YQSTakenPosition(TakenPosition):
	value = models.IntegerField(default=0)
