import React from 'react';
import { connect } from 'react-redux'

import TodoForm from './components.form';

import { addTask, taskToggle } from './actions'


import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [] };
  }

  toggleHandler = (event, id) => {
    event.preventDefault();
    this.props.taskToggle(id);
  };

  render(){
    return (
        <div className="App">
          <TodoForm addTask={this.props.addTask} />
          <TodoList list={this.props.tasks} taskToggle={this.toggleHander} />
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      tasks: state.tasks
    };
  };

export default connect (
  mapStateToProps,
  { addTask, taskToggle }
)(App);
