import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import http from "../../config/axios.config";
import TUserDataResponse from "../../interfaces/userDataReponse.interface";
import TUser from "../../interfaces/user.interface";

export const createSession = createAsyncThunk(
  "session/post",
  async (userInput: Pick<TUser, "username" | "password">) => {
    try {
      const response = await http.post<TUserDataResponse>(
        "/auth/sessions",
        userInput
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return Promise.reject(error.response?.data.error);
      } else {
        return Promise.reject("Something went wrong!");
      }
    }
  }
);

export const removeSession = createAsyncThunk(
  "session/delete",
  async (sessionId: string) => {
    try {
      await http.delete(`/auth/sessions/${sessionId}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        return Promise.reject(error.response?.data.error);
      } else if (error instanceof Error) {
        return Promise.reject(error.message);
      } else {
        return Promise.reject("Something went wrong!");
      }
    }
  }
);
