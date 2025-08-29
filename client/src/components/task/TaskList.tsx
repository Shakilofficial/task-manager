import { Button } from "@/components/ui/button";
import type { Task } from "@/interface";
import { CheckCircle2, Circle, List } from "lucide-react";

interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (id: string) => void;
}

const TaskList = ({ tasks, onToggleStatus }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <List className="w-12 h-12 text-gray-400 mb-3" />
        <p className="text-gray-500 text-sm font-medium mb-2">No tasks found</p>
        <p className="text-gray-400 text-xs">Add a task to get started!</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            <span
              className={`${
                task.status === "completed"
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              } font-medium text-sm`}
            >
              {task.title}
            </span>
          </div>
          <Button
            size="sm"
            onClick={() => onToggleStatus(task.id)}
            variant={task.status === "completed" ? "outline" : "default"}
            className={`flex items-center gap-2 text-xs ${
              task.status === "completed"
                ? "border-green-500 text-green-500 hover:bg-green-50"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } transition-all duration-200`}
          >
            {task.status === "completed" ? (
              <>
                <CheckCircle2 className="w-4 h-4" /> Completed
              </>
            ) : (
              <>
                <Circle className="w-4 h-4" /> Mark Complete
              </>
            )}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
