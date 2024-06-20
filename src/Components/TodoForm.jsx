import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      addTodo({
        name: taskName,
        description: taskDescription,
      });
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="input-box"
      />
      <input
        type="text"
        placeholder="Todo Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="input-box"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
}

export default TodoForm;
