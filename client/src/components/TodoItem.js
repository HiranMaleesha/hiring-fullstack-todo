import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';

const TodoItem = ({ todo, onUpdate, onToggle, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleSave = () => {
    if (!title.trim()) return;
    onUpdate(todo._id, { title, description });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(todo.title);
    setDescription(todo.description);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.done ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <Checkbox
          checked={todo.done}
          onCheckedChange={(checked) => onToggle(todo._id, checked)}
        />
        {isEditing ? (
          <div className="flex-1">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-1"
              placeholder="Title"
            />
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
        ) : (
          <div className="todo-text">
            <h3>{todo.title}</h3>
            {todo.description && <p>{todo.description}</p>}
          </div>
        )}
        <div className="todo-actions">
          {isEditing ? (
            <>
              <Button onClick={handleSave}>Save</Button>
              <Button onClick={handleCancel} variant="outline">Cancel</Button>
            </>
          ) : (
            <>
              <Button onClick={() => setIsEditing(true)} variant="outline">Edit</Button>
              <Button onClick={() => onDelete(todo._id)} variant="destructive">Delete</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;