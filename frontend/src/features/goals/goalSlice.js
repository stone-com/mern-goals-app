import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import goalService from './goalService';

const initialState = {
  goals: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

// Create a new goal
export const createGoal = createAsyncThunk(
  'goals/create',
  async (goalData, thunkAPI) => {
    try {
      // get auth token from thunkAPI getState method
      const token = thunkAPI.getState().auth.user.token;

      return goalService.createGoal(goalData, token);
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push(action.payload);
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message(action.payload);
      });
  },
});

export const { reset } = goalSlice.actions;

export default goalSlice.reducer;
