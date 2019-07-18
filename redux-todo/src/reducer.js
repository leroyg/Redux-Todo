import { ADD_TASK, TASK_TOGGLE } from './actions'

const initialState = {
    tasks: [
        { task: 'Take the trash out', completed: false },
        { task: 'Go Running', completed: false }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { id: Date.now(), value: action.payload, completed: false }
                ]
            };
        case TASK_TOGGLE:
            return {
                ...state,
                tasks: state.tasks.map((item, id) => {
                    if (id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    } else {
                        return item;
                    }
                })
            };
            default:
                return state;
    }
};

