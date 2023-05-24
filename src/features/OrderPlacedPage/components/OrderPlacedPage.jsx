import Footer from '../../Footer/components/Footer';
import React from 'react';
import {Link} from 'react-router-dom';

const OrderPlacedPage = () => {
  return <div className="flex flex-col min-h-[100vh] justify-center items-center">
    <div className="flex-1 p-10 max-w-screen-lg w-full">
      <h1 className="text-4xl font-bold pb-6">Order placed! Thank you.</h1>
      <div>Go to <Link aria-label="orders" to="/orders"
        className="hover:underline font-bold">My Orders</Link> to view your orders.</div>
    </div>
    <Footer />
  </div>;
};
export default OrderPlacedPage;
