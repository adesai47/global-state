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
    <div className="p-8 bg-white">
      <h1 className="mb-6 text-3xl font-bold text-center text-black">Task Management</h1>
  
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border border-gray-200 text-black font-semibold">Day</th>
              <th className="p-3 border border-gray-200 text-black font-semibold">Task</th>
            </tr>
          </thead>
          <tbody>
            {daysOfWeek.map((day, index) => (
              <tr key={day}>
                <td className="p-3 border border-gray-200 font-semibold text-black bg-gray-50">
                  {day}
                </td>
                <td className="p-3 border border-gray-200">
                  <input
                    type="text"
                    placeholder="Enter task name"
                    className="w-full p-2 mb-2 border rounded text-black bg-white"
                    value={tasks[index].title}
                    onChange={(e) => handleTaskChange(index, 'title', e.target.value)}
                  />
                  <textarea
                    placeholder="Enter task description"
                    className="w-full p-2 border rounded text-black bg-white"
                    value={tasks[index].description}
                    onChange={(e) => handleTaskChange(index, 'description', e.target.value)}
                  ></textarea>
                  <button
                    onClick={() => createTask('Pending')}
                    className="w-full mt-2 p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
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
