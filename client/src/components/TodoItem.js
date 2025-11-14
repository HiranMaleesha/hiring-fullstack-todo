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
    <div className={`bg-gray-50 border border-gray-200 rounded-lg p-4 mb-3 transition-all duration-200 hover:shadow-md ${todo.done ? 'opacity-60' : ''}`}>
      <div className="flex items-start space-x-3">
        <Checkbox
          checked={todo.done}
          onCheckedChange={(checked) => onToggle(todo._id, checked)}
          className="mt-1"
        />
        {isEditing ? (
          <div className="flex-1 space-y-2">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="text-lg font-medium"
            />
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
        ) : (
          <div className="flex-1">
            <h3 className={`text-lg font-medium ${todo.done ? 'line-through text-gray-500' : 'text-gray-900'}`}>
              {todo.title}
            </h3>
            {todo.description && (
              <p className={`text-gray-600 mt-1 ${todo.done ? 'line-through' : ''}`}>
                {todo.description}
              </p>
            )}
          </div>
        )}
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <Button onClick={handleSave} size="sm">Save</Button>
              <Button onClick={handleCancel} variant="outline" size="sm">Cancel</Button>
            </>
          ) : (
            <>
              <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">Edit</Button>
              <Button onClick={() => onDelete(todo._id)} variant="destructive" size="sm">Delete</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;