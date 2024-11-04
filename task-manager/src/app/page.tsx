// src/app/page.tsx
"use client";

import React from 'react';
import Link from 'next/link';

const HomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h1 className="text-4xl font-bold mb-4 text-black">Welcome to the Task Manager App</h1>
    <div className="space-y-2">
      <Link href="/tasks" className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600">Go to Task View</Link>
      <Link href="/manage" className="p-2 text-white bg-green-500 rounded hover:bg-green-600">Go to Task Management</Link>
    </div>
  </div>
);

export default HomePage;
