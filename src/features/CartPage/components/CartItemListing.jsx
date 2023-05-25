import CartItem from './CartItem';
import React from 'react';
import {removeFromCart, getCart} from '../slices/cartSlice';
import {useSelector, useDispatch} from 'react-redux';

const CartItemListing = () => {
  const cartItems = useSelector(getCart);
  const dispatch = useDispatch();

  const onRemoveHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return <div>
    {cartItems.length ? <div className="flex flex-col gap-6">
      {cartItems.map((item) =>
        <CartItem key={item.title} item={item} onRemoveHandler={onRemoveHandler} />)}
    </div> : <div>No items in your cart</div>}
  </div>;
};

export default CartItemListing;
