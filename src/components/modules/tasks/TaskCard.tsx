import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/types/types";
import { Edit2, Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 my-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <span
            className={cn("size-3 rounded-full ", {
              "bg-red-500": task.priority === "high",
              "bg-yellow-500": task.priority === "medium",
              "bg-green-500": task.priority === "low",
            })}
          ></span>
          <h2
            className={cn("text-lg font-semibold text-gray-00", {
              "line-through": task.isCompleted,
            })}
          >
            {task.title} <br />
          </h2>
        </div>

        <div className="flex items-center">
          <Button variant="link" className="text-gray-500" size="sm">
            <Edit2 size={16} />
          </Button>
          <Button variant="link" className="text-red-500" size="sm">
            <Trash2 size={16} />
          </Button>
          <Checkbox />
        </div>
      </div>
      <p className="text-md text-gray-400 mt-2">
        {/* {assignedUser ? `Assigned to ${assignedUser.name}` : "Not assigned"} */}
      </p>
      <p className="text-sm text-gray-500 mt-2">{task.description}</p>
    </div>
  );
};

export default TaskCard;
