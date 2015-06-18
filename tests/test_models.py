#!/usr/bin/env python
# -*- coding: utf-8 -*-

from votai_theme.models import YQSTakenPosition
from candidator.models import TakenPosition, Topic, Position
from popolo.models import Person
import unittest


class YQSTakenPositionTestCase(unittest.TestCase):

    def setUp(self):
        self.topic = Topic.objects.create(
            label=u"Should marijuana be legalized?",
            description=u"This is a description of the topic of marijuana")
        self.position = Position.objects.create(
            topic=self.topic,
            label=u"Yes",
            description=u"Yes, means that it is considered a good thing for marijuana to be legalized"
        )
        self.person = Person.objects.create(name=u"Felipe")

    def test_has_value(self):
        taken_position = YQSTakenPosition.objects.create(position=self.position, person=self.person, topic=self.topic, value=-2)
        self.assertIsInstance(taken_position, TakenPosition)
        self.assertEquals(taken_position.value, -2)

    def tearDown(self):
        pass
