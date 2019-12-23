import React from 'react';
import './App.css';
import GoalList from './components/GoalList';
import AddGoal from './components/AddGoal';

const App = () => {
  const currentGoals = [ {
    id: Math.random().toString(),
    text: ''
  }];
  return (
    <div>
      <h1> Add a Goal</h1>
      <AddGoal/>
      <h2>Current Goals</h2>
      <GoalList showgoals = {currentGoals} />
    </div>
  );
}

export default App;
