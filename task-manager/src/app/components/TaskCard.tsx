// src/app/components/TaskCard.tsx
"use client";

import React from 'react';
import { Task } from '../store';
import { FiTrash } from 'react-icons/fi'; // Import the trash icon from react-icons

interface TaskCardProps {
  task: Task;
  onClick: () => void;
  onDelete: () => void; // Add onDelete prop for handling delete action
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onClick, onDelete }) => (
  <div
    className="relative p-4 mb-2 rounded-lg cursor-pointer bg-white shadow"
    style={{
      backgroundColor: task.theme.background,
      color: task.theme.text,
    }}
  >
    <h4 className="text-lg font-semibold">{task.title}</h4>
    <p className="text-sm">{task.description}</p>

    {/* Trash icon for deleting the task */}
    <button
      onClick={(e) => {
        e.stopPropagation(); // Prevent triggering the onClick event of the task card
        onDelete();
      }}
      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
    >
      <FiTrash size={18} />
    </button>
  </div>
);

export default TaskCard;
