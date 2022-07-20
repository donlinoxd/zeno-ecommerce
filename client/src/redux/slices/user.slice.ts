import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSession, removeSession } from "../actions/user.action";
import TUserDataResponse from "../../interfaces/userDataReponse.interface";

interface TInitialState {
  loading: boolean;
  userData: TUserDataResponse | null;
  error: any;
}

const initialState: TInitialState = {
  loading: false,
  userData: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUserDataResponse>) => {
      state.userData = action.payload;
    },
    removeUser: (state) => {
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSession.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(createSession.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(createSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeSession.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(removeSession.fulfilled, (state) => {
        state.loading = false;
        state.userData = null;
      })
      .addCase(removeSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
const { actions, reducer } = userSlice;

export const { setUser, removeUser } = actions;

export default reducer;
