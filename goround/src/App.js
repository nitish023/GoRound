import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, ProgressBar, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [title, setTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [goal, setGoal] = useState(null);
  const [depositAmount, setDepositAmount] = useState('');

  const createGoal = async () => {
    const res = await axios.post('http://localhost:5000/api/goals', {
      title,
      target_amount: parseFloat(targetAmount),
    });
    setGoal(res.data);
  };

  const deposit = async () => {
    const res = await axios.post(`http://localhost:5000/api/goals/${goal.id}/deposit`, {
      amount: parseFloat(depositAmount),
    });
    setGoal(res.data);
    setDepositAmount('');
  };

  return (
    <div className="container mt-5">
      <h2>Create Financial Goal</h2>
      <Form>
        <Form.Control placeholder="Goal Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Form.Control className="mt-2" placeholder="Target Amount" type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} />
        <Button className="mt-2" onClick={createGoal}>Create</Button>
      </Form>

      {goal && (
        <Card className="mt-4 p-3">
          <h4>{goal.title}</h4>
          <ProgressBar now={(goal.current_amount / goal.target_amount) * 100} label={`${Math.round((goal.current_amount / goal.target_amount) * 100)}%`} />
          <Form className="mt-3">
            <Form.Control
              placeholder="Deposit Amount"
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
            <Button className="mt-2" onClick={deposit}>Deposit</Button>
          </Form>
        </Card>
      )}
    </div>
  );
}

export default App;
