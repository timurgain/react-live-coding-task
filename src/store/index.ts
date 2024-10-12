import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { combineReducers } from 'redux';
import { productPageReducer } from './slices/product-page';

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
})

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  productPage: productPageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
