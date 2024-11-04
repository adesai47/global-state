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
    <div className="p-4 border rounded-lg shadow-lg bg-white">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded text-black"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 mb-2 border rounded text-black"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as TaskStatus)}
        className="w-full p-2 mb-2 border rounded text-black"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Archived">Archived</option>
      </select>
      <select
        onChange={(e) => setTheme(themes[parseInt(e.target.value)])}
        className="w-full p-2 mb-2 border rounded text-black"
      >
        {themes.map((theme, index) => (
          <option key={index} value={index}>
            Theme {index + 1}
          </option>
        ))}
      </select>
      <button
        onClick={saveChanges}
        className="w-full p-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Save
      </button>
      <button
        onClick={closeEditor}
        className="w-full p-2 mt-2 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Cancel
      </button>
    </div>
  );
};

export default TaskEditor;
