import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPostComments, fetchPostDetails, fetchPosts } from 'services/api';

export const requestPosts = createAsyncThunk(
  'posts/requestPosts',

  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchPosts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const requestPostDetails = createAsyncThunk(
  'posts/requestDetails',

  async (postId, { rejectWithValue }) => {
    try {
      const response = await fetchPostDetails(postId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const requestPostComments = createAsyncThunk(
  'posts/requestComents',

  async (postId, { rejectWithValue }) => {
    try {
      const response = await fetchPostComments(postId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  postDetails: null,
  postComments: [],
  posts: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(requestPosts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(requestPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(requestPostDetails.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestPostDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postDetails = action.payload;
      })
      .addCase(requestPostDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(requestPostComments.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestPostComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postComments = action.payload;
      })
      .addCase(requestPostComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

});
export const postReducer = postsSlice.reducer;
