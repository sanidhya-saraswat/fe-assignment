import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, {payload}) => {
      state.products = payload;
    },
    addProducts: (state, {payload}) => {
      state.products.push(...payload);
    },
  },
});

export const {
  setProducts, addProducts,
} = productSlice.actions;

export default productSlice.reducer;
