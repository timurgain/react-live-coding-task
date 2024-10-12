import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { productPageReducer } from './slices/product-page';

export const rootReducer = combineReducers({
  productPage: productPageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
