import React, {useEffect, useState} from 'react';
import {SAMPLE_ORDERS} from '../../../constants';
import Footer from '../../Footer/components/Footer';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // currently setting orders manually. In future will fetch orders from API
    setOrders(SAMPLE_ORDERS);
  }, []);

  return <div className="flex flex-col min-h-[100vh] justify-center items-center">
    <div className="flex-1 p-10 max-w-screen-lg w-full">
      <h1 className="text-4xl font-bold">My Orders</h1>
      <div className="text-xs mt-1 text-slate-600 pt-4 pb-4">
        Currently showing sample data since login is not yet implemented.</div>
      <table className="lg:table hidden table-fixed shadow w-full">
        <thead>
          <tr>
            <th className="p-2 bg-white border-b-2 text-left">ORDER NO.</th>
            <th className="p-2 bg-white border-b-2 text-left">PAYMENT STATUS</th>
            <th className="p-2 bg-white border-b-2 text-left">AMOUNT</th>
            <th className="p-2 bg-white border-b-2 text-left">ADDRESS</th>
            <th className="p-2 bg-white border-b-2 text-left">ORDER DATE</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) =>
            <tr key={item.orderNo}>
              <td className="p-4 bg-white border-b-2">{item.orderNo}</td>
              <td className="p-4 bg-white border-b-2">{item.paymentStatus}</td>
              <td className="p-4 bg-white border-b-2">{item.amount}</td>
              <td className="p-4 bg-white border-b-2">{item.address}</td>
              <td className="p-4 bg-white border-b-2">{item.orderDate}</td>
            </tr>,
          )}
        </tbody>
      </table>
      <table className="table lg:hidden table-fixed w-full">
        <tbody>
          {orders.map((item) =>
            <div key={item.orderNo} className="mb-5 table w-full">
              <tr key={'1' + item.orderNo}>
                <td className="p-4 bg-white border-b-2 font-bold">ORDER NO.</td>
                <td className="p-4 bg-white border-b-2">{item.orderNo}</td>
              </tr>
              <tr key={'2' + item.orderNo}>
                <td className="p-4 bg-white border-b-2 font-bold">PAYMENT STATUS</td>
                <td className="p-4 bg-white border-b-2">{item.paymentStatus}</td>
              </tr>
              <tr key={'3' + item.orderNo}>
                <td className="p-4 bg-white border-b-2 font-bold">AMOUNT</td>
                <td className="p-4 bg-white border-b-2">{item.amount}</td>
              </tr>
              <tr key={'4' + item.orderNo}>
                <td className="p-4 bg-white border-b-2 font-bold">ADDRESS.</td>
                <td className="p-4 bg-white border-b-2">{item.address}</td>
              </tr>
              <tr key={'5' + item.orderNo}>
                <td className="p-4 bg-white border-b-2 font-bold">ORDER DATE</td>
                <td className="p-4 bg-white border-b-2">{item.orderDate}</td>
              </tr>
            </div>,
          )}
        </tbody>
      </table>
    </div>
    <Footer />
  </div>;
};

export default OrdersPage;
