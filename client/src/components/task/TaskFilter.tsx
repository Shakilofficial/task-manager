import { Button } from "@/components/ui/button";
import type { TaskStatus } from "@/interface";

interface TaskFilterProps {
  filter: TaskStatus | "all";
  onChange: (filter: TaskStatus | "all") => void;
}

const TaskFilter = ({ filter, onChange }: TaskFilterProps) => {
  const filters: (TaskStatus | "all")[] = ["all", "pending", "completed"];

  return (
    <div className="flex gap-2 mb-6 justify-center">
      {filters.map((f) => (
        <Button
          key={f}
          variant={filter === f ? "default" : "outline"}
          onClick={() => onChange(f)}
          className={`${
            filter === f
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border-gray-300 text-gray-600 hover:bg-gray-100"
          } rounded-lg px-4 py-2 transition-all duration-200`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export default TaskFilter;
