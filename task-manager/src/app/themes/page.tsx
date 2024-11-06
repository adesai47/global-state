"use client";

import React from 'react';
import ThemeManager from '../components/ThemeManager';
import Sidebar from '../components/Sidebar';

const ThemesPage = () => (
  <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <main className="flex-1 overflow-auto">
      <ThemeManager />
    </main>
  </div>
);

export default ThemesPage;