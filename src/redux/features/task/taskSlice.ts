import { RootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

interface InitialState {
  tasks: ITask[];
  filter: string;
}

const initialState: InitialState = {
  tasks: [],
  filter: "all",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignTo"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignTo: taskData.assignTo ? taskData.assignTo : null,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteStatus: (state, action: PayloadAction<string>) => {
      console.log(action);

      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      state.tasks[taskIndex] = action.payload;
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignTo === action.payload ? (task.assignTo = null) : task
      );
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todoTasks.filter;

  if (filter === "high") {
    return state.todoTasks.tasks.filter((task) => task.priority === "high");
  } else if (filter === "medium") {
    return state.todoTasks.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "low") {
    return state.todoTasks.tasks.filter((task) => task.priority === "low");
  } else {
    return state.todoTasks.tasks;
  }
};

export const selectFilteredTasks = (state: RootState) => {
  if (state.todoTasks.filter === "all") {
    return state.todoTasks.tasks;
  }

  return state.todoTasks.tasks.filter((task) =>
    state.todoTasks.filter === "completed"
      ? task.isCompleted
      : !task.isCompleted
  );
};

export const {
  addTask,
  toggleCompleteStatus,
  deleteTask,
  updateTask,
  updateFilter,
} = taskSlice.actions;

export default taskSlice.reducer;
