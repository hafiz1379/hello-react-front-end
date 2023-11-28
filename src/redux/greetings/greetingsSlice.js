import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'http://127.0.0.1:3000/api/v2/greetings/random';

export const getRandomGreeting = createAsyncThunk(
  'greetings/getRandomGreeting',
  async (thunkAPI) => {
    try {
      const response = await axios.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  greetings: [],
  isLoading: false,
  error: null,
};

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greetings = action.payload;
      })
      .addCase(getRandomGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default greetingsSlice.reducer;
