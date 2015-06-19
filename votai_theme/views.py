from elections.views import SoulMateDetailView
from votai_theme.calculator import YQSCalculator

class MediaNaranjaView(SoulMateDetailView):
    calculator_class = YQSCalculator
