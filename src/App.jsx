import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Todos</h1>
      <h1>Create Task</h1>
      <TaskInput />
      <h1>My Tasks</h1>
      <TaskList />

    </div>
  );
};

export default App;
