// src/app/components/TaskManagementPage.tsx
"use client";

import React, { useState } from 'react';
import { useTaskStore, Theme } from '../store';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

interface DayTask {
  title: string;
  description: string;
  status: string;
}

const TaskManagementPage: React.FC = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const addTheme = useTaskStore((state) => state.addTheme);
  const [tasks, setTasks] = useState<DayTask[]>(
    daysOfWeek.map(() => ({ title: '', description: '', status: 'Pending' }))
  );

  const handleTaskChange = (index: number, field: keyof DayTask, value: string) => {
    const newTasks = [...tasks];
    newTasks[index][field] = value;
    setTasks(newTasks);
  };

  const createTask = (status: string) => {
    const newTask: DayTask = {
      title: '',
      description: '',
      status,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-black rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold text-center text-white">Task Management</h1>

      {/* Task Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-white text-sm font-semibold">
              <th className="p-2 border border-gray-700">Day</th>
              <th className="p-2 border border-gray-700">Task</th>
            </tr>
          </thead>
          <tbody>
            {daysOfWeek.map((day, index) => (
              <tr key={day}>
                <td className="p-2 bg-gray-900 border border-gray-700 font-semibold text-white">
                  {day}
                </td>
                <td className="p-2 border border-gray-700">
                  <input
                    type="text"
                    placeholder="Enter task name"
                    className="w-full p-1 mb-2 border rounded text-sm bg-gray-800 text-white"
                    value={tasks[index].title}
                    onChange={(e) => handleTaskChange(index, 'title', e.target.value)}
                  />
                  <textarea
                    placeholder="Enter task description"
                    className="w-full p-1 border rounded text-sm bg-gray-800 text-white"
                    value={tasks[index].description}
                    onChange={(e) => handleTaskChange(index, 'description', e.target.value)}
                  ></textarea>
                  <button
                    onClick={() => createTask('Pending')}
                    className="w-full mt-2 p-1 text-white bg-blue-500 rounded hover:bg-blue-600 text-sm"
                  >
                    Add Task
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskManagementPage;
