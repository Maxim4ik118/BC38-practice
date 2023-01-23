import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserAPI } from 'services/userApi';

export const registerThunk = createAsyncThunk(
  'user/register',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.register(formData);
      localStorage.setItem('token', response.token);

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'user/login',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.login(formData);
      localStorage.setItem('token', response.token);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'authUser',
  initialState,
  extraReducers: builder =>
    builder
///////////////Register////////////////////////////////
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        registerThunk.fulfilled,
        (state, { payload: { user, token } }) => {
          state.isLoading = false;
          state.userData = user;
          state.token = token;
        }
      )
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
///////////////Login////////////////////////////////
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        loginThunk.fulfilled,
        (state, { payload: { user, token } }) => {
          state.isLoading = false;
          state.userData = user;
          state.token = token;
        }
      )
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const authReducer = userSlice.reducer;
