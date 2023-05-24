import {Link} from 'react-router-dom';
import React from 'react';
import Footer from '../../Footer/components/Footer';
import CartItemListing from './CartItemListing';
import OrderSummary from './OrderSummary';
import OrderPolicies from './OrderPolicies';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getCart} from '../slices/cartSlice';

const CartPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(getCart);

  const proceedToCheckoutClicked = ()=>{
    navigate('/checkout');
  };

  return (
    <div className="flex flex-col min-h-[100vh] justify-center items-center">
      <div className="flex-1 p-10 max-w-screen-lg w-full">
        <h1 className="text-4xl font-bold pb-6">Your cart</h1>
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
            <button className="border-0 p-2 bg-slate-900 text-white enabled:active:scale-95
            transition duration-150 ease-in-out w-full" onClick={proceedToCheckoutClicked}
            >Proceed to checkout</button>
          </div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
