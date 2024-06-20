import React, { useState } from 'react'
import TodoForm  from './Components/TodoForm'
import TodoList from './Components/TodoList'
import Filter from './Components/Filter'


function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), status: 'not-completed' }]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    return todo.status === filter;
  });

  return (
    <div className="app-container">
      <h1 style={{fontFamily :'fantasy', color:'green'}}>My Todo </h1>
      <TodoForm addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

