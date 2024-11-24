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
    setUsers(state, action: PayloadAction<IUser[] | null>) {
      state.users = action.payload;
    },
    addUser(state, action: PayloadAction<IUser>) {
      state.users?.unshift(action.payload);
    },
    updateUser(state, action: PayloadAction<IUser>) {
      state.users = state.users
        ? state.users?.map((user) =>
            user.id === action.payload.id ? { ...action.payload } : user
          )
        : [];
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.users = state.users
        ? state.users?.filter((user) => user.id !== action.payload)
        : [];
    },
    updateUsersCompanyId: (state, action: PayloadAction<string>) => {
      state.users = state.users
        ? state.users?.map((user) =>
            user.companyId === action.payload ? { ...user, companyId: "" } : user
          )
        : [];
    },
  },
});

export const {
  setUsers,
  addUser,
  updateUser,
  deleteUser,
  updateUsersCompanyId,
} = usersSlice.actions;
export default usersSlice.reducer;
