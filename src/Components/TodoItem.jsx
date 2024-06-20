import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      name: editedName,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  const handleStatusChange = (e) => {
    updateTodo({
      ...todo,
      status: e.target.value,
    });
  };

  return (
    <div className="todo-card">
      <div className="todo-header">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="input-box"
            />
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="input-box"
            />
            <button onClick={handleUpdate} className="save-button">Save</button>
          </>
        ) : (
          <>
            <div>
              <h3>Name:{todo.name}</h3>
              <p>Description:{todo.description}</p>
            </div>
            <select value={todo.status} onChange={handleStatusChange} className="status-dropdown">
              <option value="not-completed" >Not Completed</option>
              <option value="completed">Completed</option>
            </select>
            <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
