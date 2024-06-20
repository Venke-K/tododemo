import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

document.addEventListener('DOMContentLoaded', function() {
  const taskNameInput = document.getElementById('taskName');
  const taskDescriptionInput = document.getElementById('taskDescription');
  const addTaskButton = document.getElementById('addTaskButton');
  const todoList = document.getElementById('todoList');
  const filterStatus = document.getElementById('filterStatus');

  let todos = [];

  addTaskButton.addEventListener('click', addTask);
  filterStatus.addEventListener('change', filterTasks);

  function addTask() {
      const taskName = taskNameInput.value.trim();
      const taskDescription = taskDescriptionInput.value.trim();

      if (taskName === '' || taskDescription === '') {
          alert('Please fill in both fields');
          return;
      }

      const todo = {
          id: Date.now(),
          name: taskName,
          description: taskDescription,
          status: 'not-completed'
      };

      todos.push(todo);
      taskNameInput.value = '';
      taskDescriptionInput.value = '';
      renderTodos();
  }

  function renderTodos() {
      todoList.innerHTML = '';

      const filteredTodos = todos.filter(todo => {
          if (filterStatus.value === 'all') {
              return true;
          }
          return todo.status === filterStatus.value;
      });

      filteredTodos.forEach(todo => {
          const todoCard = document.createElement('div');
          todoCard.className = 'todo-card';

          const todoHeader = document.createElement('div');
          todoHeader.className = 'todo-header';

          const todoTitle = document.createElement('div');
          todoTitle.innerText = todo.name;
          todoHeader.appendChild(todoTitle);

          const statusDropdown = document.createElement('select');
          statusDropdown.className = 'status-dropdown';
          statusDropdown.innerHTML = `
              <option value="not-completed" ${todo.status === 'not-completed' ? 'selected' : ''}>Not Completed</option>
              <option value="completed" ${todo.status === 'completed' ? 'selected' : ''}>Completed</option>
          `;
          statusDropdown.addEventListener('change', () => changeStatus(todo.id, statusDropdown.value));
          todoHeader.appendChild(statusDropdown);

          const todoDescription = document.createElement('div');
          todoDescription.innerText = todo.description;

          const todoActions = document.createElement('div');
          todoActions.className = 'todo-actions';

          const editButton = document.createElement('button');
          editButton.className = 'edit-button';
          editButton.innerText = 'Edit';
          editButton.addEventListener('click', () => editTask(todo.id));
          todoActions.appendChild(editButton);

          const deleteButton = document.createElement('button');
          deleteButton.className = 'delete-button';
          deleteButton.innerText = 'Delete';
          deleteButton.addEventListener('click', () => deleteTask(todo.id));
          todoActions.appendChild(deleteButton);

          todoCard.appendChild(todoHeader);
          todoCard.appendChild(todoDescription);
          todoCard.appendChild(todoActions);

          todoList.appendChild(todoCard);
      });
  }

  function changeStatus(id, status) {
      const todo = todos.find(todo => todo.id === id);
      if (todo) {
          todo.status = status;
          renderTodos();
      }
  }

  function editTask(id) {
      const todo = todos.find(todo => todo.id === id);
      if (todo) {
          const newTaskName = prompt('Edit Task Name', todo.name);
          const newTaskDescription = prompt('Edit Description', todo.description);

          if (newTaskName !== null) todo.name = newTaskName;
          if (newTaskDescription !== null) todo.description = newTaskDescription;

          renderTodos();
      }
  }

  function deleteTask(id) {
      todos = todos.filter(todo => todo.id !== id);
      renderTodos();
  }

  function filterTasks() {
      renderTodos();
  }
});
