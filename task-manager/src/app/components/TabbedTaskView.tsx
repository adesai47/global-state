// src/app/components/TabbedTaskView.tsx
"use client";

import React from 'react';
import { useTaskStore } from '../store';

const statuses = ['Pending', 'In Progress', 'Completed', 'Archived'];

const TabbedTaskView: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const updateTask = useTaskStore((state) => state.updateTask);

  const handleStatusChange = (taskId: string, newStatus: string) => {
    updateTask(taskId, { status: newStatus });
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-black rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold text-center text-white">Task Board</h1>

      {/* Kanban Columns */}
      <div className="flex space-x-4">
        {statuses.map((status) => (
          <div key={status} className="flex-1 p-4 bg-gray-900 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center text-white mb-4">{status}</h2>

            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div
                  key={task.id}
                  className="mb-4 p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{task.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{task.description}</p>

                  {/* Status Change Dropdown */}
                  <select
                    value={task.status}
                    onChange={(e) => handleStatusChange(task.id, e.target.value)}
                    className="w-full p-1 mt-2 border rounded text-sm text-white bg-gray-700"
                  >
                    {statuses.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedTaskView;
