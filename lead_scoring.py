def calculate_lead_score(lead_data):
    score = 0
    if lead_data['engagement'] > 50:
        score += 20
    return score