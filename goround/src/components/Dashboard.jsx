const mockGoals = [
  { id: 1, title: "Vacation Fund", currentAmount: 300, targetAmount: 1000 },
  { id: 2, title: "New Laptop", currentAmount: 150, targetAmount: 2000 },
];

function Dashboard() {
  const [goals, setGoals] = useState(mockGoals);

  // Function to add a new goal, passed to Goals component
  const addGoal = (newGoal) => {
    setGoals(prevGoals => [...prevGoals, newGoal]);
  };

  const totalSaved = goals.reduce((sum, g) => sum + g.currentAmount, 0);
  const totalTarget = goals.reduce((sum, g) => sum + g.targetAmount, 0);
  const progressPercent = totalTarget > 0 ? Math.round((totalSaved / totalTarget) * 100) : 0;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Saved</h2>
          <p className="text-2xl">${totalSaved}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Goal Amount</h2>
          <p className="text-2xl">${totalTarget}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Progress</h2>
          <p className="text-2xl">{progressPercent}%</p>
        </div>
      </div>

      {/* Render the Goals component and pass props */}
      <Goals goals={goals} addGoal={addGoal} />
    </div>
  );
}

export default Dashboard;
