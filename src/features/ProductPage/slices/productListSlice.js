import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  products: [],
};

export const productListSlice = createSlice({
  name: 'productList',
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

export const getProducts = (state)=>state.products.products;

export const {
  setProducts, addProducts,
} = productListSlice.actions;

export default productListSlice.reducer;
