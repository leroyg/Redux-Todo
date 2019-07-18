import React from 'react';
import TodoItem from './item';

const TodoList = props => {
console.log(props.list)
    return (
        <div>
            {props.list.map((item, index) => (
                <TodoItem item={item} key={index} taskToggle={props.taskToggle} />
            ))}
        </div>
    );
};

export default TodoList;