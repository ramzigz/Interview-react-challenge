import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import albumsReducer from './reducers/AlbumsReducer';

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
