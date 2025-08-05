namespace finance;

entity Goal {
    key ID: UUID;
    title: String;
    targetAmount: Decimal(10,2);
    currentAmount: Decimal(10,2);
    createdAt: DateTime;
    deposits: Composition of many Deposit on deposits.goal = $self;
}

entity Deposit {
    key ID: UUID;
    amount: Decimal(10,2);
    createdAt: DateTime;
    goal: Association to Goal;
}
