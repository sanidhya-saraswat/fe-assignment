import {setSnackbarConfig} from '../../../common/slices/snackbarSlice';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';

const OrderSummary = () => {
  const [couponCode, setCouponCode] = useState('');
  const cartItems = useSelector((state) => state.myCart.cart);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const dispatch = useDispatch();
  const applyCouponClicked = () => {
    // Verify coupon here
    // For now just showing error message
    dispatch(setSnackbarConfig({show: true, message: 'Coupon is incorrect'}));
  };

  useEffect(()=>{
    setTotal(cartItems.reduce((acc, curr)=>acc + (curr.quantity * curr.price), 0));
    setSubTotal(cartItems.reduce((acc, curr)=>acc + (curr.quantity * curr.price), 0));
  }, [cartItems]);

  return <div className="flex flex-col gap-8">
    <div className="flex flex-row gap-2">
      <input placeholder="Enter coupon code here"
        className="e-text-field-with-border w-full" name="couponCode"
        value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
      <button onClick={(e) => applyCouponClicked(e)}
        className="e-button-filled"
      >Apply</button>
    </div>
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <div>Subtotal</div>
        <div>${subTotal}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>Shipping</div>
        <div className="text-slate-600">Calculated at next step</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>Total</div>
        <div>${total}</div>
      </div>
    </div>
  </div>;
};
export default OrderSummary;