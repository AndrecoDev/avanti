import { combineReducers, configureStore } from '@reduxjs/toolkit';
// Reducers
import productReducer from '../slices/product.slice';
import { api } from '../../services/api.service';

const rootReducer = combineReducers({
  products: productReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
