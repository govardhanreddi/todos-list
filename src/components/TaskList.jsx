import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: null, task: '' });

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
  };

  const handleUpdateTask = () => {
    dispatch(editTask(currentTask.id, currentTask.task));
    setIsEditing(false);
    setCurrentTask({ id: null, task: '' });
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button onClick={() => handleEditTask(task)}>Edit</button>
          </li>
        ))}
      </ul>
      {isEditing && (
        <div>
          <input
            type="text"
            value={currentTask.task}
            onChange={(e) => setCurrentTask({ ...currentTask, task: e.target.value })}
          />
          <button onClick={handleUpdateTask}>Update Task</button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
