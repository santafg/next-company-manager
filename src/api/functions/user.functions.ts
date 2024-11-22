import { IUser } from "@/ts/interfaces/user.interface";
import axiosInstace from "../axiosInstance";
import endpoints from "../endpoints";

export const getUsers = async (): Promise<IUser[]> => {
  const { data } = await axiosInstace.get(endpoints.users);
  return data;
};
