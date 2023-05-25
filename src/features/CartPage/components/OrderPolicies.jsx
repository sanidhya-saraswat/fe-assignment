import Collapsible from '../../../common/components/Collapsible';
import React from 'react';

const OrderPolicies = () => {
  return <div>
    <div className="text-2xl">Order Policies</div>
    <Collapsible header="Return policy"
      content="This Return Policy outlines the terms and
conditions related to returns for products purchased from our e-commerce store.
Please read this policy carefully before initiating a return."/>
    <Collapsible header="Payment policy"
      content="This Payment Policy outlines the terms and
conditions related to payments for products purchased from our e-commerce store.
Please read this policy carefully before making a purchase."/>
    <Collapsible header="Shipping policy"
      content="This Shipping Policy outlines the terms and
conditions related to the shipping of products purchased from our e-commerce store.
Please read this policy carefully before placing an order."/>
  </div>;
};
export default OrderPolicies;
