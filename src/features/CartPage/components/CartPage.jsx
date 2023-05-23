import {Link} from 'react-router-dom';
import React from 'react';
import Footer from '../../Footer/components/Footer';
import CartItemListing from './CartItemListing';
import OrderSummary from './OrderSummary';
import OrderPolicies from './OrderPolicies';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.myCart.cart);

  const proceedToCheckoutClicked = ()=>{
    navigate('/checkout');
  };

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
            <button className="e-button-filled w-full" onClick={proceedToCheckoutClicked}
            >Proceed to checkout</button>
          </div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
