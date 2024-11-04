// src/app/components/TaskManagementPage.tsx
"use client";

import React, { useState } from 'react';
import { useTaskStore, Theme } from '../store';

const TaskManagementPage: React.FC = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const addTheme = useTaskStore((state) => state.addTheme);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [theme, setTheme] = useState<Theme>({
    background: '#ffffff',
    text: '#000000',
    primary: '#3498db',
    secondary: '#2ecc71',
    accent: '#e74c3c',
  });

  const createTask = () => {
    addTask(title, description, theme);
    setTitle('');
    setDescription('');
  };

  const createTheme = () => addTheme(theme);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-semibold text-black">Create Task</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full p-2 mb-2 border rounded text-black"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="w-full p-2 mb-2 border rounded text-black"
      />
      <button
        onClick={createTask}
        className="w-full p-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Task
      </button>

      <h1 className="mb-4 text-2xl font-semibold text-black">Create Custom Theme</h1>
      <input
        type="color"
        value={theme.background}
        onChange={(e) => setTheme({ ...theme, background: e.target.value })}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="color"
        value={theme.text}
        onChange={(e) => setTheme({ ...theme, text: e.target.value })}
        className="w-full p-2 mb-2 border rounded"
      />
      <button
        onClick={createTheme}
        className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Add Theme
      </button>
    </div>
  );
};

export default TaskManagementPage;
