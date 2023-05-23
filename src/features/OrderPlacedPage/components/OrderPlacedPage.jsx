import Footer from '../../Footer/components/Footer';
import React from 'react';
import {Link} from 'react-router-dom';

const OrderPlacedPage = () => {
  return <div className="page-wrapper">
    <div className="page">
      <div className="text-4xl font-bold pb-6">Order placed! Thank you.</div>
      <div>Go to <Link aria-label="orders" to="/orders"
        className="hover:underline font-bold">My Orders</Link> to view your orders.</div>
    </div>
    <Footer />
  </div>;
};
export default OrderPlacedPage;
