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

  // ... imports and initial code stay the same ...

return (
  <div className="p-8 bg-white">
    <h1 className="mb-6 text-3xl font-bold text-center text-black">Task Board</h1>

    <div className="flex space-x-4">
      {statuses.map((status) => (
        <div key={status} className="flex-1 p-4 bg-gray-50 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-center text-black mb-4">{status}</h2>

          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <div
                key={task.id}
                className="mb-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-black mb-2">{task.title}</h3>
                <p className="text-sm text-black mb-2">{task.description}</p>

                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task.id, e.target.value)}
                  className="w-full p-2 mt-2 border rounded text-black bg-white"
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
