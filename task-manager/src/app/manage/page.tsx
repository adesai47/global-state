"use client";

import React from 'react';
import TaskManagementPage from '../components/TaskManagementPage';
import Sidebar from '../components/Sidebar';

const ManagePage = () => (
  <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <main className="flex-1 overflow-auto">
      <TaskManagementPage />
    </main>
  </div>
);

export default ManagePage;