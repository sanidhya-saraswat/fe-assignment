import React, {useEffect, useState} from 'react';
import Footer from '../../Footer/components/Footer';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // currently setting orders manually. In future will fetch orders from API
    setOrders([
      {
        orderNo: 135,
        paymentStatus: 'COMPLETED',
        amount: '$345',
        address: 'Mumbai',
        orderDate: '24th Nov 2022',
      },
      {
        orderNo: 43,
        paymentStatus: 'COMPLETED',
        amount: '$34',
        address: 'Mumbai',
        orderDate: '24th Dec 2022',
      }, {
        orderNo: 34,
        paymentStatus: 'COMPLETED',
        amount: '$87',
        address: 'Mumbai',
        orderDate: '1st Jan 2022',
      }, {
        orderNo: 1335,
        paymentStatus: 'FAILED',
        amount: '$787',
        address: 'Mumbai',
        orderDate: '4th April 2023',
      }, {
        orderNo: 336,
        paymentStatus: 'COMPLETED',
        amount: '$999',
        address: 'Mumbai',
        orderDate: '11th Nov 2022',
      },
    ]);
  }, []);

  return <div className="page-wrapper">
    <div className="page">
      <div className="text-4xl font-bold">My Orders</div>
      <div className="text-xs mt-1 text-slate-600 pt-4 pb-4">
        Currently showing sample data since login is not yet implemented.</div>
      <table className="table-fixed shadow w-full">
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
    </div>
    <Footer />
  </div>;
};

export default OrdersPage;
