import { configureStore } from '@reduxjs/toolkit';
import findBuddy from './findBuddy';

const store = configureStore({
  reducer: {
    buddy: findBuddy,
  },
});

export default store;