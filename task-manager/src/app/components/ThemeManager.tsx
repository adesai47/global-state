"use client";

import React, { useState } from 'react';
import { useTaskStore, Theme } from '../store';

const ThemeManager = () => {
  const { themes, addTheme } = useTaskStore();
  const [newTheme, setNewTheme] = useState<Theme>({
    background: '#ffffff',
    text: '#000000',
    primary: '#3498db',
    secondary: '#2ecc71',
    accent: '#e74c3c',
  });

  const handleColorChange = (key: keyof Theme, value: string) => {
    setNewTheme((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleAddTheme = () => {
    addTheme(newTheme);
    setNewTheme({
      background: '#ffffff',
      text: '#000000',
      primary: '#3498db',
      secondary: '#2ecc71',
      accent: '#e74c3c',
    });
  };

 // ... imports stay the same ...

return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center text-black">Theme Manager</h1>
  
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-black">Create New Theme</h2>
          <div className="space-y-4">
            {Object.entries(newTheme).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-4">
                <label className="w-24 capitalize text-black">{key}:</label>
                <input
                  type="color"
                  value={value}
                  onChange={(e) => handleColorChange(key as keyof Theme, e.target.value)}
                  className="w-16 h-8"
                />
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleColorChange(key as keyof Theme, e.target.value)}
                  className="flex-1 p-2 border rounded text-black bg-white"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleAddTheme}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Theme
          </button>
        </div>
  
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 text-black">Existing Themes</h2>
          <div className="grid grid-cols-2 gap-4">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md"
                style={{ backgroundColor: theme.background }}
              >
                <h3 className="font-semibold mb-2" style={{ color: theme.text }}>
                  Theme {index + 1}
                </h3>
                <div className="space-y-2">
                  <div className="h-8 rounded" style={{ backgroundColor: theme.primary }} />
                  <div className="h-8 rounded" style={{ backgroundColor: theme.secondary }} />
                  <div className="h-8 rounded" style={{ backgroundColor: theme.accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeManager;