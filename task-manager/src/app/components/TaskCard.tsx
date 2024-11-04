// src/app/components/TaskCard.tsx
"use client";

import React from 'react';
import { Task } from '../store';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const onDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('text', task.id);
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="p-4 bg-white border rounded shadow cursor-pointer"
      style={{
        backgroundColor: task.theme.background,
        color: task.theme.text,
      }}
    >
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm">{task.description}</p>
    </div>
  );
};

export default TaskCard;
