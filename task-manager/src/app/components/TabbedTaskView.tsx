// src/app/components/TabbedTaskView.tsx
"use client";

import React, { useState } from 'react';
import { useTaskStore } from '../store';
import TaskCard from './TaskCard';
import TaskEditor from './TaskEditor';

const statuses: TaskStatus[] = ['Pending', 'In Progress', 'Completed', 'Archived'];

const TabbedTaskView: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const tasksByStatus = (status: TaskStatus) => tasks.filter((task) => task.status === status);

  return (
    <div>
      <h1>Tasks by Status</h1>
      {statuses.map((status) => (
        <div key={status}>
          <h2>{status}</h2>
          {tasksByStatus(status).map((task) => (
            <TaskCard key={task.id} task={task} onClick={() => setSelectedTaskId(task.id)} />
          ))}
        </div>
      ))}
      {selectedTaskId && <TaskEditor taskId={selectedTaskId} closeEditor={() => setSelectedTaskId(null)} />}
    </div>
  );
};

export default TabbedTaskView;
