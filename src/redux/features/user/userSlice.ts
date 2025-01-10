import { RootState } from "@/redux/store";
import { IUser } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "1",
      name: "John Doe",
      email: "doe,@mail.com",
    },
    {
      id: "2",
      name: "Rahul Singh",
      email: "singh@mail.com",
    },
  ],
};

type DraftUser = Pick<IUser, "name" | "email">;

const createUser = (userData: DraftUser): IUser => {
  return {
    id: nanoid(),
    ...userData,
  };
};

export const selectUsers = (state: RootState) => {
  return state.users.users;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
