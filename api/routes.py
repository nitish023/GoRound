# api/routes.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict
import uuid

router = APIRouter()

# In-memory "database" for demo purposes
goals: Dict[str, dict] = {}

# Pydantic models
class GoalCreate(BaseModel):
    title: str
    target_amount: float

class Deposit(BaseModel):
    amount: float

@router.post("/goals")
def create_goal(goal_data: GoalCreate):
    goal_id = str(uuid.uuid4())
    new_goal = {
        "id": goal_id,
        "title": goal_data.title,
        "target_amount": goal_data.target_amount,
        "current_amount": 0
    }
    goals[goal_id] = new_goal
    return new_goal

@router.post("/goals/{goal_id}/deposit")
def deposit_to_goal(goal_id: str, deposit: Deposit):
    if goal_id not in goals:
        raise HTTPException(status_code=404, detail="Goal not found")
    goals[goal_id]["current_amount"] += deposit.amount
    return goals[goal_id]

@router.get("/ping")
def ping():
    return {"message": "Server is running!"}
