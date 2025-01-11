import { AddTaskModal } from "@/components/modules/tasks/AddTaskModal";
import TaskCard from "@/components/modules/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types/types";

const Tasks = () => {
  const { data, isLoading, isError } = useGetTasksQuery(undefined, {
    pollingInterval: 10000,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  console.log({ data, isLoading, isError });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-md py-4">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      {!isLoading &&
        data.tasks.map((task: ITask) => <TaskCard key={task.id} task={task} />)}
    </>
  );
};

export default Tasks;
