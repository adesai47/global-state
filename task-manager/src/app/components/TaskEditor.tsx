// src/app/components/TaskEditor.tsx
"use client";

import React, { useState } from 'react';
import { useTaskStore, Task } from '../store';

interface TaskEditorProps {
  taskId: string;
  closeEditor: () => void;
}

const TaskEditor: React.FC<TaskEditorProps> = ({ taskId, closeEditor }) => {
  const { tasks, updateTask, themes } = useTaskStore();
  const task = tasks.find((task) => task.id === taskId);
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [status, setStatus] = useState<TaskStatus>(task?.status || 'Pending');
  const [theme, setTheme] = useState<Theme>(task?.theme || themes[0]);

  const saveChanges = () => {
    if (task) {
      updateTask(task.id, { title, description, status, theme });
      closeEditor();
    }
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Archived">Archived</option>
      </select>
      <select onChange={(e) => setTheme(themes[parseInt(e.target.value)])}>
        {themes.map((theme, index) => (
          <option key={index} value={index}>
            Theme {index + 1}
          </option>
        ))}
      </select>
      <button onClick={saveChanges}>Save</button>
      <button onClick={closeEditor}>Cancel</button>
    </div>
  );
};

export default TaskEditor;
