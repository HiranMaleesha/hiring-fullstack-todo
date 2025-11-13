import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdate, onToggle, onDelete }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} onUpdate={onUpdate} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;