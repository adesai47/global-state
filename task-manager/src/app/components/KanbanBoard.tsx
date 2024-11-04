// src/app/components/KanbanBoard.tsx
"use client";

import React from 'react';
import { useTaskStore, TaskStatus, Task } from '../store';
import TaskCard from './TaskCard';

const statuses: TaskStatus[] = ['Pending', 'In Progress', 'Completed', 'Archived'];

const KanbanBoard: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const updateTaskStatus = useTaskStore((state) => state.updateTaskStatus);

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const onDrop = (event: React.DragEvent, status: TaskStatus) => {
    const taskId = event.dataTransfer.getData('text');
    updateTaskStatus(taskId, status);
  };

  return (
    <div className="flex space-x-4 p-4 bg-gray-100 min-h-screen">
      {statuses.map((status) => (
        <div
          key={status}
          onDragOver={onDragOver}
          onDrop={(event) => onDrop(event, status)}
          className="flex-1 p-4 bg-white rounded shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">{status}</h2>
          <div className="space-y-4">
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
