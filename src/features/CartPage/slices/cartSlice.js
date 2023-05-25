import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'myCart',
  initialState,
  reducers: {
    setCart: (state, {payload}) => {
      state.cart = payload;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    addToCart: (state, {payload}) => {
      const cartItem = state.cart.find((obj)=>obj.id == payload.id);
      if (cartItem) {
        cartItem.quantity += payload.quantity;
      } else {
        state.cart.push(payload);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, {payload}) => {
      state.cart = state.cart.filter((obj)=>obj.id != payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateQuantityOfCartItem: (state, {payload}) => {
      const cartItem = state.cart.find((obj)=>obj.id == payload.id);
      if (cartItem) {
        cartItem.quantity = payload.quantity;
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
  },
});

export const getCart = (state)=>state.myCart.cart;

export const {
  setCart, addToCart, removeFromCart, updateQuantityOfCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
