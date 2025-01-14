
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
