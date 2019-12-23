import React, {useState} from 'react';

const AddGoal = props => {
    const [EnteredText, setEnteredText] = useState('');
    
    const AddGoalHandler = event => {
    event.preventDefault();
    setEnteredText('');
    const newgoal = [{
        id: Math.random().toString(),
        text: EnteredText
    }];
    props.newGoalHandler(newgoal);
    };
    const EnteredTextHandler = event => {
        setEnteredText(event.target.value);
    };
    return (
        <div>
            <form onSubmit = {AddGoalHandler}>
                <input type = 'text' value = {EnteredText} onChange = {EnteredTextHandler}/>
                <button type = 'submit'> Add a new Goal </button>
            </form>

        </div>
      );
}
 
export default AddGoal;