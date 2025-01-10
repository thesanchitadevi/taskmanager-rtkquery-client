import { AddTaskModal } from "@/components/modules/tasks/AddTaskModal";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  console.log(tasks);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-md py-4">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
