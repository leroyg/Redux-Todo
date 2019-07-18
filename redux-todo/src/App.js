import React from 'react';
import { connect } from 'react-redux'

import { addTask, taskToggle } from './actions'

import TodoForm from './components/form';
import TodoList from './components/list';

import './App.css';

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <TodoForm addTask={this.props.addTask} />
          <TodoList list={this.props.tasks} taskToggle={this.props.taskToggle} />
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    console.log(state)
    return {
      tasks: state.tasks
    };
  };

export default connect (
  mapStateToProps,
  { addTask, taskToggle }
)(App);
