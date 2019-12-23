import React from 'react';

const GoalList = props => {
return (
    <div>
        {props.showgoals.map(goals => {
           return <li key = {goals.id}> {goals.text}</li> 
        })
        }
    </div>
)

}

export default GoalList;