import { createSlice } from '@reduxjs/toolkit';

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: {
    greetingsData: [],
  },
  reducers: {
    getGreetings(state, action) {
      const data = action.payload;
      state.greetingsData.push(data);
    },
  },
});

export const { getGreetings } = greetingSlice.actions;

export default greetingSlice.reducer;
