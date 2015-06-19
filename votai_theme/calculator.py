from candidator.adapters import CandidatorCalculator
from candidator.models import Position

class YQSCalculator(CandidatorCalculator):
    final_results_key = 'puntos'
    order_reversed = False
    def determine_match(self, person_position, external_position):
        try:
            diff = external_position.answervalue.value - person_position.answervalue.value
        except Position.answervalue.RelatedObjectDoesNotExist, e:
            diff = 0
        return {"difference": abs(diff)}

    def determine_points_per_person_per_category(self, explanation):
        points = 0
        for t in explanation:
            if explanation[t]["difference"]:
                points += explanation[t]["difference"]
        return points

    def determine_total_result_per_person(self, points_per_person, total_comparisons):
        return {self.final_results_key: points_per_person}

    def determine_not_match(self):
        return {"difference": None}
