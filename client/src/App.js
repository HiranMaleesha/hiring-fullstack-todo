import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = 'http://localhost:5000/api/todos';

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_BASE);
      setTodos(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos. Please check if the server is running.');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todo) => {
    const tempId = Date.now().toString();
    const newTodo = { _id: tempId, ...todo, done: false, createdAt: new Date(), updatedAt: new Date() };
    setTodos([newTodo, ...todos]);
    try {
      const response = await axios.post(API_BASE, todo);
      setTodos(todos => todos.map(t => t._id === tempId ? response.data : t));
      setError(null);
    } catch (err) {
      setTodos(todos => todos.filter(t => t._id !== tempId));
      setError('Failed to add todo.');
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    const originalTodos = [...todos];
    setTodos(todos => todos.map(todo => todo._id === id ? { ...todo, ...updatedTodo } : todo));
    try {
      const response = await axios.put(`${API_BASE}/${id}`, updatedTodo);
      setTodos(todos => todos.map(todo => todo._id === id ? response.data : todo));
      setError(null);
    } catch (err) {
      setTodos(originalTodos);
      setError('Failed to update todo.');
    }
  };

  const toggleDone = async (id, done) => {
    const originalTodos = [...todos];
    setTodos(todos => todos.map(todo => todo._id === id ? { ...todo, done } : todo));
    try {
      await axios.patch(`${API_BASE}/${id}/done`, { done });
      setError(null);
    } catch (err) {
      setTodos(originalTodos);
      setError('Failed to toggle todo status.');
    }
  };

  const deleteTodo = async (id) => {
    const originalTodos = [...todos];
    setTodos(todos => todos.filter(todo => todo._id !== id));
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setError(null);
    } catch (err) {
      setTodos(originalTodos);
      setError('Failed to delete todo.');
    }
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <h1 className="todo-title">TODO App</h1>
        {error && <p className="error-message">{error}</p>}
        <TodoForm onAdd={addTodo} />
        {loading ? (
          <p className="loading">Loading todos...</p>
        ) : (
          <TodoList todos={todos} onUpdate={updateTodo} onToggle={toggleDone} onDelete={deleteTodo} />
        )}
      </div>
    </div>
  );
}

export default App;
