import React from 'react';

const GoalList = props => {
return (
    <div>
        <ul>
        {props.showgoals.map(goals => {
           return <li key = {goals.id}> {goals.text}</li> 
        })
        }
        </ul>
    </div>
)

}

export default GoalList;