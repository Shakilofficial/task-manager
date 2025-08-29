import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

interface FormValues {
  title: string;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { title: "" },
  });

  const onSubmit = (data: FormValues) => {
    if (!data.title.trim()) {
      toast.error("Task title cannot be empty");
      return;
    }
    onAddTask(data.title);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3 mb-6">
      <div className="flex-1">
        <Input
          {...register("title", { required: "Task title is required" })}
          placeholder="Add a new task..."
          className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 transition-all duration-200"
      >
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
