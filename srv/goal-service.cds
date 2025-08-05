using finance from '../db/data-model';

service GoalService {
    entity Goals as projection on finance.Goal;
    entity Deposits as projection on finance.Deposit;

    action depositToGoal(goalID: UUID, amount: Decimal(10,2)) returns Boolean;
      action createGoal(title: String, targetAmount: Decimal(10,2)) returns UUID;
}
