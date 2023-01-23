import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ContactsAPI } from 'services/userApi';

export const addContact = createAsyncThunk(
  'user/addContact',
  async (formData, thunkAPI) => {
    try {
      const response = await ContactsAPI.addContactRequest(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = { contacts: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: builder => builder
  .addCase(addContact.pending, (state) => {
    state.isLoading= true;
    state.error = null;
  })
  .addCase(addContact.fulfilled, (state, {payload}) => {
    state.contacts = [payload, ...state.contacts ];
    state.isLoading= false;
  })
  .addCase(addContact.rejected, (state, {payload}) => {
    state.isLoading= false;
    state.error = payload;
  })
});
export const contactsReducer = contactsSlice.reducer;
