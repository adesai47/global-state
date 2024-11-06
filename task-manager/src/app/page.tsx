"use client";

import React from 'react';
import TabbedTaskView from './components/TabbedTaskView';
import Sidebar from './components/Sidebar';

const HomePage = () => (
  <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <main className="flex-1 overflow-auto">
      <TabbedTaskView />
    </main>
  </div>
);

export default HomePage;