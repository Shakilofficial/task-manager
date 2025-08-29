import { Task } from './task.interface';

function tinyId() {
  return Math.random().toString(36).slice(2, 10);
}

let tasks: Task[] = [];

const getAllTasks = (): Task[] => {
  return tasks;
};

const createTask = (payload: Pick<Task, 'title'>): Task => {
  const newTask: Task = {
    id: tinyId(),
    title: payload.title,
    status: 'pending',
  };
  tasks.push(newTask);
  return newTask;
};

const toggleTask = (id: string): Task | null => {
  const task = tasks.find((t) => t.id === id);
  if (!task) return null;

  task.status = task.status === 'pending' ? 'completed' : 'pending';
  return task;
};

export const taskService = {
  getAllTasks,
  createTask,
  toggleTask,
};
