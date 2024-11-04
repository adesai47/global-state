// src/app/components/TaskManagementPage.tsx

"use client";

import React, { useState } from 'react';
import { useTaskStore, Theme } from '../store';

const TaskManagementPage: React.FC = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const addTheme = useTaskStore((state) => state.addTheme);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [theme, setTheme] = useState<Theme>({ background: '#ffffff', text: '#000000', primary: '#3498db', secondary: '#2ecc71', accent: '#e74c3c' });

  const createTask = () => {
    addTask(title, description, theme);
    setTitle('');
    setDescription('');
  };

  const createTheme = () => addTheme(theme);

  return (
    <div>
      <h1>Create Task</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button onClick={createTask}>Add Task</button>

      <h1>Create Custom Theme</h1>
      <input type="color" value={theme.background} onChange={(e) => setTheme({ ...theme, background: e.target.value })} />
      <input type="color" value={theme.text} onChange={(e) => setTheme({ ...theme, text: e.target.value })} />
      <button onClick={createTheme}>Add Theme</button>
    </div>
  );
};

export default TaskManagementPage;
