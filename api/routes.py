from flask import Blueprint, request, jsonify
from models import create_goal, deposit_to_goal, goals

goal_routes = Blueprint('goals', __name__)

@goal_routes.route('/api/goals', methods=['POST'])
def create():
    data = request.get_json()
    goal = create_goal(data['title'], float(data['target_amount']))
    return jsonify(goal), 201

@goal_routes.route('/api/goals/<goal_id>/deposit', methods=['POST'])
def deposit(goal_id):
    data = request.get_json()
    goal = deposit_to_goal(goal_id, float(data['amount']))
    if not goal:
        return jsonify({"error": "Goal not found"}), 404
    return jsonify(goal)
