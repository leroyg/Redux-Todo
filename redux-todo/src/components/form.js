import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask:''
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    addTaskHandler = event => {
        event.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState({
            newTask: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.addTaskHandler}>
                <input
                placeholder="Add New Task"
                value={this.state.newTask}
                onChange={this.handleChange}
                name="newTask"
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default TodoForm;