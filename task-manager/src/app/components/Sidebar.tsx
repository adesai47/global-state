"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-gray-800 p-4">
      <h1 className="text-xl font-bold mb-8 text-black">Task Manager</h1>
      <nav className="space-y-2">
        <Link 
          href="/"
          className={`block p-2 rounded hover:bg-gray-700 text-black ${pathname === '/' ? 'bg-gray-700' : ''}`}
        >
          Task List
        </Link>
        <Link 
          href="/manage"
          className={`block p-2 rounded hover:bg-gray-700 text-black ${pathname === '/manage' ? 'bg-gray-700' : ''}`}
        >
          Task Management
        </Link>
        <Link 
          href="/themes"
          className={`block p-2 rounded hover:bg-gray-700 text-black ${pathname === '/themes' ? 'bg-gray-700' : ''}`}
        >
          Themes
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar; 