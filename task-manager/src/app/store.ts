// src/app/store.ts
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

type TaskStatus = 'Pending' | 'In Progress' | 'Completed' | 'Archived';

type Theme = {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
};

type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  theme: Theme;
};

interface TaskState {
  tasks: Task[];
  themes: Theme[];
  addTask: (title: string, description: string, theme: Theme) => void;
  updateTask: (id: string, updatedTask: Partial<Task>) => void;
  deleteTask: (id: string) => void; // Delete task by ID
  loadTasks: () => void;
  addTheme: (theme: Theme) => void;
}

export const useTaskStore = create<TaskState>((set) => {
  const initialTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  return {
    tasks: initialTasks,
    themes: [
      { background: '#ffffff', text: '#000000', primary: '#3498db', secondary: '#2ecc71', accent: '#e74c3c' },
      { background: '#333333', text: '#ffffff', primary: '#3498db', secondary: '#2ecc71', accent: '#e74c3c' },
    ],
    addTask: (title, description, theme) =>
      set((state) => ({
        tasks: [
          ...state.tasks,
          {
            id: uuidv4(),
            title,
            description,
            status: 'Pending',
            theme,
          },
        ],
      })),
    updateTask: (id, updatedTask) =>
      set((state) => ({
        tasks: state.tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)),
      })),
    deleteTask: (id) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      })),
    loadTasks: () => set(() => ({ tasks: JSON.parse(localStorage.getItem('tasks') || '[]') })),
    addTheme: (theme) =>
      set((state) => ({
        themes: [...state.themes, theme],
      })),
  };
});

// Save tasks to local storage whenever they change
useTaskStore.subscribe(
  (state) => state.tasks,
  (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
);
