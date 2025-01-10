export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "low" | "medium" | "high";
  assignTo: string | null;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}
