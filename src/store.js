import {configureStore} from '@reduxjs/toolkit';
import productListReducer from './features/ProductPage/slices/productListSlice';
import productReducer from './features/ProductInfoPage/slices/productSlice';
import filterReducer from './features/ProductPage/slices/filterSlice';
import CartReducer from './features/CartPage/slices/cartSlice';
import snackbarSlice from './common/slices/snackbarSlice';
import availableCategoriesSlice from './features/ProductPage/slices/availableCategoriesSlice';
export const store = configureStore({
  reducer: {
    products: productListReducer,
    product: productReducer,
    filters: filterReducer,
    myCart: CartReducer,
    snackbar: snackbarSlice,
    availableCategories: availableCategoriesSlice,
  },
});
