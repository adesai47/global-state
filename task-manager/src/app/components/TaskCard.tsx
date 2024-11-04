// src/app/components/TaskCard.tsx
"use client";

import React from 'react';
import { Task } from '../store';

interface TaskCardProps {
  task: Task;
  onClick: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => (
  <div onClick={onClick} style={{ background: task.theme.background, color: task.theme.text, padding: '1em', marginBottom: '0.5em', borderRadius: '5px', cursor: 'pointer' }}>
    <h4>{task.title}</h4>
    <p>{task.description}</p>
  </div>
);

export default TaskCard;
