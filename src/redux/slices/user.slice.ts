import { IUser } from "@/ts/interfaces/user.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  users: IUser[] | null;
}

const initialState: UsersState = {
  users: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    addUser(state, action: PayloadAction<IUser>) {
      state.users?.unshift(action.payload);
    },
    updateUser(state, action: PayloadAction<IUser>) {
      const index = state.users?.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index && index !== -1 && state.users) {
        state.users[index] = action.payload;
      }
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.users = state.users
        ? state.users?.filter((user) => user.id !== action.payload)
        : [];
    },
  },
});

export const { setUsers, addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
