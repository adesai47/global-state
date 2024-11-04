// src/app/page.tsx
import React from 'react';
import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Welcome to the Task Manager App</h1>
    <Link href="/tasks">Go to Task View</Link>
    <br />
    <Link href="/manage">Go to Task Management</Link>
  </div>
);

export default HomePage;
