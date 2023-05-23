import React from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBoxSeam} from 'react-icons/bs';
import {BsCart} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Banner from '../../Banner/components/Banner.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {setSnackbarConfig} from '../../../common/slices/snackbarSlice';

const Header = () => {
  const showBanner = true; // Read this value from API later
  const myCart = useSelector((state) => state.myCart.cart);
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
            <Link aria-label="homepage" to="/"><span className="font-bold">MyBag</span></Link>
          </div>
          <div className="order-2">
            <Link aria-label="orders" to="/orders">
              <span className="hidden sm:block">My Orders</span>
              <span className="sm:hidden"><BsBoxSeam size="23" /></span>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center gap-10">
          <div className="order-4">
            <Link aria-label="cart" to="/cart">
              <div className="relative">
                <BsCart size="24" />
                <span className="text-center absolute top-[-.6rem] right-[-.6rem] bg-slate-800
             text-white w-[1.4rem] h-[1.4rem] text-sm rounded-3xl">{myCartQuantity}</span>
              </div>
            </Link>
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
