import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList';
import AddGoal from './components/AddGoal';

const App = () => {
  
  const [currentGoals, setcurrentGoals] = useState([ 
    {
    id: '',
    text: ''
  }
]);
  
  const newGoal = (addNewGoal) => {
    setcurrentGoals(currentGoals.concat(addNewGoal));
    //setcurrentGoals(prevCourseGoals => prevCourseGoals.concat(addNewGoal));
  };

  console.log(currentGoals);
  return (
    <div>
      <h1> Add a Goal</h1>
      <AddGoal newGoalHandler = {newGoal}/>
      <h2>Current Goals</h2>
      <GoalList showgoals = {currentGoals} />
    </div>
  );
}

export default App;
