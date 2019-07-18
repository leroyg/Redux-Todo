import React from 'react';

const TodoItem = props => {
    console.log(props.item)
    return (
        <div className={`${props.item.completed}`} 
        onClick={() => props.taskToggle(props.item.id)}>
            {props.item.task}
            </div>
    );
}

export default TodoItem;