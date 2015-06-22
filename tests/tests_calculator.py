# coding=utf-8
from votai_theme.models import AnswerValue
from votai_theme.calculator import YQSCalculator
from candidator.models import Topic, Position

import unittest



class YQSAnswerValueTestCase(unittest.TestCase):
    fixtures = ['argentina.yaml', ]
    def setUp(self):
        self.topic = Topic.objects.create(label=u"Estás de acuerdo con la tenencia de drogas para consumo personal?")
        self.si = Position.objects.create(label=u"si", topic=self.topic)
        AnswerValue.objects.create(value=-2, position=self.si)
        self.no = Position.objects.create(label=u"no", topic=self.topic)
        AnswerValue.objects.create(value=-1, position=self.no)

    def test_determine_match(self):
        my_position = self.si # Si a la tenencia de drogas, value -2
        other_position = self.no # Si pero solo en casos medicinales, value -1
        calculator = YQSCalculator()
        result = calculator.determine_match(my_position, other_position)
        expected_result = {"difference": 1}
        self.assertEquals(result, expected_result)

    def test_determine_points_per_person_per_category(self):
        explanation = {'benito2': {'topic': "Topic A",
                                   'difference': 2},
                       'fiera2': {'topic': "Topic B",
                                  'difference': 3}}
        calculator = YQSCalculator()
        self.assertEquals(calculator.determine_points_per_person_per_category(explanation), 5)

    def test_determine_total_result_per_person(self):
        calculator = YQSCalculator()
        self.assertEquals(calculator.determine_total_result_per_person(5, 25), {"puntos": 5})
        self.assertEquals(calculator.determine_total_result_per_person(5, 35), {"puntos": 5})
        self.assertEquals(calculator.determine_total_result_per_person(5, 45), {"puntos": 5})

    def test_determine_not_match(self):
        calculator = YQSCalculator()
        self.assertEquals(calculator.determine_not_match(), {'difference': None})

    def test_order_by_reversed(self):
        calculator = YQSCalculator()
        self.assertFalse(calculator.order_reversed)
