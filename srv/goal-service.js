const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const { Goal, Deposit } = this.entities;

    this.on('depositToGoal', async (req) => {
        const { goalID, amount } = req.data;
        const tx = cds.transaction(req);

        const goal = await tx.read(Goal).where({ ID: goalID });
        if (!goal[0]) return req.error(404, 'Goal not found');

        await tx.run(INSERT.into(Deposit).entries({
            ID: cds.utils.uuid(),
            amount,
            createdAt: new Date(),
            goal_ID: goalID
        }));

        const newAmount = Number(goal[0].currentAmount) + Number(amount);

        await tx.update(Goal).set({ currentAmount: newAmount }).where({ ID: goalID });

        return true;
    });

    this.on('createGoal', async (req) => {
        const { title, targetAmount } = req.data;

        if (!title || targetAmount <= 0) {
            return req.error(400, 'Please provide a title and a positive targetAmount.');
        }

        const ID = cds.utils.uuid();
        const now = new Date();

        const tx = cds.transaction(req);
        await tx.run(INSERT.into(Goal).entries({
            ID,
            title,
            targetAmount,
            currentAmount: 0,
            createdAt: now
        }));

        return ID;
    });
});