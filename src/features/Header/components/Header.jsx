import React from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBoxSeam} from 'react-icons/bs';
import {BsCart} from 'react-icons/bs';
import Banner from '../../Banner/components/Banner.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {setSnackbarConfig} from '../../../common/slices/snackbarSlice';
import {getCart} from '../../CartPage/slices/cartSlice.js';

const Header = () => {
  const showBanner = true; // Read this value from API later
  const myCart = useSelector(getCart);
  const myCartQuantity = myCart.reduce((acc, curr) => acc + curr.quantity, 0);
  const dispatch = useDispatch();
  const loginClicked = () => {
    dispatch(setSnackbarConfig({show: true, message: 'Comming soon!'}));
  };

  return (
    <div className="w-full sticky top-0 shadow-md bg-slate-200 z-20">
      {showBanner ?
        <Banner /> :
        <div></div>}
      <div className="text-xl flex flex-row justify-between
      p-2 pl-5 pr-5 md:pl-10 md:pr-10 flex-wrap gap-10 items-center">
        <div className="flex flex-row items-center gap-10">
          <div className="order-1">
            <a href="/" className="font-bold">MyBag</a>
          </div>
          <div className="order-2">
            <a href="/orders" className="hidden sm:block">My Orders</a>
            <a href="/orders" className="sm:hidden"><BsBoxSeam size="23" /></a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="order-4">
            <a href="/cart">
              <div className="relative">
                <BsCart size="24" />
                <span className="text-center absolute top-[-.6rem] right-[-.6rem] bg-slate-800
             text-white w-[1.4rem] h-[1.4rem] text-sm rounded-3xl">{myCartQuantity}</span>
              </div>
            </a>
          </div>
          <div className="order-5 cursor-pointer" onClick={loginClicked}>
            <span className="hidden md:block">Login</span>
            <span className="md:hidden"><AiOutlineUser size="24" /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
