#!/usr/bin/env python
# -*- coding: utf-8 -*-

from votai_theme.models import AnswerValue
from candidator.models import TakenPosition, Topic, Position
from popolo.models import Person
import unittest


class YQSAnswerValueTestCase(unittest.TestCase):

    def setUp(self):
        self.topic = Topic.objects.create(
            label=u"Should marijuana be legalized?",
            description=u"This is a description of the topic of marijuana")
        self.position = Position.objects.create(
            topic=self.topic,
            label=u"Yes",
            description=u"Yes, means that it is considered a good thing for marijuana to be legalized"
        )

    def test_has_value(self):
        answer_value = AnswerValue.objects.create(position=self.position, value=-2)
        self.assertEquals(answer_value.value, -2)
        self.assertEquals(answer_value.position, self.position)
        self.assertEquals(self.position.answervalue, answer_value)

    def tearDown(self):
        pass
