// src/app/components/TabbedTaskView.tsx
"use client";

import React, { useState } from 'react';
import { useTaskStore } from '../store';
import TaskCard from './TaskCard';
import TaskEditor from './TaskEditor';

const statuses: TaskStatus[] = ['Pending', 'In Progress', 'Completed', 'Archived'];

const TabbedTaskView: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const tasksByStatus = (status: TaskStatus) => tasks.filter((task) => task.status === status);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-semibold">Tasks by Status</h1>
      {statuses.map((status) => (
        <div key={status} className="mb-4">
          <h2 className="mb-2 text-xl font-medium">{status}</h2>
          <div className="space-y-2">
            {tasksByStatus(status).map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onClick={() => setSelectedTaskId(task.id)}
                onDelete={() => deleteTask(task.id)} // Pass the delete function
              />
            ))}
          </div>
        </div>
      ))}
      {selectedTaskId && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <TaskEditor taskId={selectedTaskId} closeEditor={() => setSelectedTaskId(null)} />
        </div>
      )}
    </div>
  );
};

export default TabbedTaskView;
