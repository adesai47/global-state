// src/app/components/TaskEditSubview.tsx
"use client";

import React, { useState } from 'react';
import { useTaskStore } from '../store';

interface TaskEditSubviewProps {
  taskId: string;
  close: () => void;
}

const TaskEditSubview: React.FC<TaskEditSubviewProps> = ({ taskId, close }) => {
  const { tasks, updateTask, themes } = useTaskStore();
  const task = tasks.find((task) => task.id === taskId);

  if (!task) return null;

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [theme, setTheme] = useState(task.theme);

  const saveChanges = () => {
    updateTask(taskId, { title, description, status, theme });
    close();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
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
          value={themes.indexOf(theme)}
          onChange={(e) => setTheme(themes[parseInt(e.target.value)])}
          className="w-full p-2 mb-4 border rounded text-black"
        >
          {themes.map((themeOption, index) => (
            <option key={index} value={index}>
              Theme {index + 1}
            </option>
          ))}
        </select>
        <button
          onClick={saveChanges}
          className="w-full p-2 mb-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
        <button
          onClick={close}
          className="w-full p-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskEditSubview;
