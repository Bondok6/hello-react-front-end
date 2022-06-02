import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetings/greeting-slice';

const store = configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});

export default store;
