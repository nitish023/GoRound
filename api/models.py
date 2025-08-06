import uuid
from datetime import datetime

goals = {}  # key = goal_id, value = goal dict

def create_goal(title, target_amount):
    goal_id = str(uuid.uuid4())
    goals[goal_id] = {
        'id': goal_id,
        'title': title,
        'target_amount': target_amount,
        'current_amount': 0,
        'created_at': datetime.now().isoformat()
    }
    return goals[goal_id]

def deposit_to_goal(goal_id, amount):
    if goal_id not in goals:
        return None
    goals[goal_id]['current_amount'] += amount
    return goals[goal_id]
