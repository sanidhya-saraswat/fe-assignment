import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({item, onRemoveHandler}) => {
  return <div className="flex flex-row justify-between items-end gap-4">
    <div className="flex flex-row gap-4">
      <div className="w-40 h-40 image-div">
        <img alt="product-image"
          className="e-image" src={item.image} />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-xl font-bold">{item.title}</span>
        <span>Quantity: {item.quantity}</span>
        <span className="font-bold">${item.price}</span>
      </div>
    </div>
    <div onClick={(e)=>onRemoveHandler(item.id)}
      className="mb-2 underline cursor-pointer">Remove</div>
  </div>;
};

CartItem.propTypes = {
  item: PropTypes.object,
  onRemoveHandler: PropTypes.func,
};

export default CartItem;
