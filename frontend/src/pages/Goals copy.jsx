import React, { useState } from 'react';

function Goals({ goals, addGoal }) {
  const [title, setTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Create goal handler (no axios for now, just local state)
  const createGoal = () => {
    if (!title || !targetAmount) return;

    const newGoal = {
      id: Date.now(),
      title,
      currentAmount: 0,
      targetAmount: parseFloat(targetAmount),
    };

    addGoal(newGoal);
    setTitle('');
    setTargetAmount('');
  };

  const deposit = () => {
    if (!selectedGoal || !depositAmount) return;

    const updatedGoal = {
      ...selectedGoal,
      currentAmount: selectedGoal.currentAmount + parseFloat(depositAmount),
    };

    // Update goal in goals list — simplified: find index and replace
    const updatedGoals = goals.map(goal =>
      goal.id === updatedGoal.id ? updatedGoal : goal
    );

    // Normally you'd want a prop function like updateGoal, or lift that state to Dashboard.
    // For demo, let's assume addGoal replaces all goals.
    addGoal(updatedGoals); // This will replace the entire list, adjust accordingly

    setSelectedGoal(updatedGoal);
    setDepositAmount('');
  };

  return (
    <div>
      <h2>Create Financial Goal</h2>
      <input
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded mb-2"
      />
      <input
        placeholder="Target Amount"
        type="number"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        className="border p-2 rounded mb-2"
      />
      <button onClick={createGoal} className="bg-blue-500 text-white px-4 py-2 rounded">
        Create
      </button>

      {selectedGoal && (
        <div className="mt-4 p-4 border rounded shadow">
          <h4>{selectedGoal.title}</h4>
          <progress
            value={selectedGoal.currentAmount}
            max={selectedGoal.targetAmount}
            className="w-full h-4"
          />
          <div className="flex mt-2">
            <input
              placeholder="Deposit Amount"
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              className="border p-2 rounded mr-2 flex-grow"
            />
            <button onClick={deposit} className="bg-green-500 text-white px-4 py-2 rounded">
              Deposit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Goals;
