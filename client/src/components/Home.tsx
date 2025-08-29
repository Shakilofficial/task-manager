import { taskApi } from "@/api/task";
import type { Task } from "@/interface";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TaskFilter from "./task/TaskFilter";
import TaskForm from "./task/TaskForm";
import TaskList from "./task/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setIsLoading(true);
    try {
      const data = await taskApi.fetchTasks();
      setTasks(data);
    } catch (err) {
      toast.error("Failed to fetch tasks", { id: "fetch-tasks" });
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async (title: string) => {
    try {
      const newTask = await taskApi.addTask(title);
      setTasks((prev) => [...prev, newTask]);
      toast.success("Task added successfully", { id: "add-task" });
    } catch (err) {
      toast.error("Failed to add task", { id: "add-task" });
      console.error(err);
    }
  };

  const toggleTaskStatus = async (id: string) => {
    try {
      const updatedTask = await taskApi.toggleTaskStatus(id);
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updatedTask : task))
      );
      toast.success(`${updatedTask.title} marked as ${updatedTask.status}`, {
        id: `toggle-task-${id}`,
      });
    } catch (err) {
      toast.error("Failed to update task status", { id: `toggle-task-${id}` });
      console.error(err);
    }
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : task.status === filter
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 md:p-8">
        <h1 className="text-3xl text-primary font-bold mb-8 text-center">
          Task Manager
        </h1>
        <TaskForm onAddTask={addTask} />
        <TaskFilter filter={filter} onChange={setFilter} />
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            <p className="mt-2 text-gray-600 text-sm font-medium">
              Loading your tasks...
            </p>
          </div>
        ) : (
          <TaskList tasks={filteredTasks} onToggleStatus={toggleTaskStatus} />
        )}
      </div>
    </div>
  );
};

export default Home;
