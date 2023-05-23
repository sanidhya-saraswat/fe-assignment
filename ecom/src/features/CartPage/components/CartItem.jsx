import React from 'react';

const CartItem = (props) => {
  return <div className="flex flex-row justify-between items-end gap-4">
    <div className="flex flex-row gap-4">
      <div className="w-40 h-40 image-div">
        <img alt="product-image"
          className="e-image" src={props.item.image} />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-xl font-bold">{props.item.title}</span>
        <span>Quantity: {props.item.quantity}</span>
        <span className="font-bold">${props.item.price}</span>
      </div>
    </div>
    <div onClick={(e)=>props.onRemoveHandler(props.item.id)}
      className="mb-2 underline cursor-pointer">Remove</div>
  </div>;
};

export default CartItem;
