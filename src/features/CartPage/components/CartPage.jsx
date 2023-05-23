import {Link} from 'react-router-dom';
import React from 'react';
import Footer from '../../Footer/components/Footer';
import CartItemListing from './CartItemListing';
import OrderSummary from './OrderSummary';
import OrderPolicies from './OrderPolicies';
import {useSelector} from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector((state) => state.myCart.cart);

  return (
    <div className="page-wrapper">
      <div className="page">
        <div className="text-4xl font-bold pb-6">Your cart</div>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-8 md:max-w-lg">
            <div>Not ready to checkout?&nbsp;
              <Link aria-label="homepage" to="/"
                className="hover:underline">Continue Shopping</Link>
            </div>
            <CartItemListing />
            {cartItems.length > 0 && <OrderPolicies />}
          </div>
          {cartItems.length > 0 && <div className="flex flex-col gap-6">
            <div className="text-2xl">Order Summary</div>
            <OrderSummary />
            <Link aria-label="homepage" to="/checkout">
              <button className="e-button-filled w-full"
              >Proceed to checkout</button></Link>
          </div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
