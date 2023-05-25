import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  product: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, {payload}) => {
      state.product = payload;
    },
  },
});

export const getProduct = (state)=>{
  return state.product.product;
};

export const {
  setProduct,
} = productSlice.actions;

export default productSlice.reducer;
