class LeadQualificationCriteria:
    def __init__(self):
        self.criteria = {
            'budget': '>=1000',
            'need': 'High',
            'timeline': 'Immediate'
        }

    def qualify(self, lead):
        # Logic to evaluate lead against criteria
        pass
