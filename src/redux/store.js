import { configureStore } from '@reduxjs/toolkit';
import findBuddy from './findBuddy';
import destination from './destination';

const store = configureStore({
  reducer: {
    buddy: findBuddy,
    destination: destination,
  },
});

export default store;