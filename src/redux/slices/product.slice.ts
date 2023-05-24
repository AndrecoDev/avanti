import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../types/product.type';

const initialState: Array<IProduct> = [];

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
  },
});

export const allProducts = (state: any) => state.products;

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
