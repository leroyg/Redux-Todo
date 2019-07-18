export const ADD_TASK = 'ADD_TASK';
export const TASK_TOGGLE = 'TASK_TOGGLE';

export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    };
}

export const taskToggle = id => {
    return {
        type: TASK_TOGGLE,
        payload: id
    };
}