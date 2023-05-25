import React from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({productObj}) => {
  const navigate = useNavigate();


  const onProductClicked = (e) => {
    navigate(`/products/${productObj.id}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-40 h-40 shadow flex flex-row items-center justify-center bg-slate-300">
        <img alt="product-image" src={productObj.image}
          className="max-w-full max-h-full w-auto h-auto" />
      </div>
      <button onClick={onProductClicked} className="
      text-left hover:cursor-pointer hover:underline max-w-[15rem]">
        {productObj.title}</button>
      <span>${productObj.price}</span>
    </div>
  );
};

Product.propTypes = {
  productObj: PropTypes.object,
};


export default Product;
