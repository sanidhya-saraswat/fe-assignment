import CartItemListing from '../../CartPage/components/CartItemListing';
import OrderSummary from '../../CartPage/components/OrderSummary';
import Footer from '../../Footer/components/Footer';
import React, {useState} from 'react';
import ShippingInformation from './ShippingInformation';
import PaymentInformation from './PaymentInformation';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.myCart.cart);
  const [currentTab, setCurrentTab] = useState('shipping');
  const proceedToPaymentClicked = (e, shippingInfo)=>{
    // use shippingInfo here
    setCurrentTab('payment');
  };

  const payButtonClicked = (e, paymentInfo)=>{
    // use paymentInfo here
    navigate('/order-placed');
  };

  return <div className="page-wrapper">
    <div className="page">
      <div className="text-4xl font-bold pb-6">Checkout</div>
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        {cartItems.length > 0 && <div className="md:max-w-lg order-2 md:order-1">
          {currentTab == 'shipping' ?
          <ShippingInformation submitHandler={proceedToPaymentClicked} /> :
        <PaymentInformation submitHandler={payButtonClicked} />}
        </div>}
        <div className="flex flex-col gap-8 order-1 md:order-2">
          {cartItems.length > 0 && <div className="text-xl">Your cart</div>}
          <CartItemListing />
          {cartItems.length > 0 && <OrderSummary />}
        </div>
      </div>
    </div>
    <Footer />
  </div>;
};

export default CheckoutPage;
