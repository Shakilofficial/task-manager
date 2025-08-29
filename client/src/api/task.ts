/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Task } from "@/interface";
import axios from "axios";

interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const taskApi = {
  fetchTasks: async (): Promise<Task[]> => {
    try {
      const res = await axios.get<ApiResponse<Task[]>>(BASE_URL);
      return res.data.data;
    } catch (error) {
      throw new Error("Failed to fetch tasks");
    }
  },

  addTask: async (title: string): Promise<Task> => {
    try {
      const res = await axios.post<ApiResponse<Task>>(BASE_URL, { title });
      return res.data.data;
    } catch (error) {
      throw new Error("Failed to add task");
    }
  },

  toggleTaskStatus: async (id: string): Promise<Task> => {
    try {
      const res = await axios.patch<ApiResponse<Task>>(
        `${BASE_URL}/${id}/toggle`
      );
      return res.data.data;
    } catch (error) {
      throw new Error("Failed to toggle task status");
    }
  },
};
