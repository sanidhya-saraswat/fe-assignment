import {configureStore} from '@reduxjs/toolkit';
import productReducer from './features/ProductPage/slices/productSlice';
import filterReducer from './features/ProductPage/slices/filterSlice';
import CartReducer from './features/CartPage/slices/cartSlice';
import snackbarSlice from './common/slices/snackbarSlice';
export const store = configureStore({
  reducer: {
    products: productReducer,
    filters: filterReducer,
    myCart: CartReducer,
    snackbar: snackbarSlice,
  },
});
