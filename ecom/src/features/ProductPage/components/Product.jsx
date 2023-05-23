import React from 'react';
import {useNavigate} from 'react-router-dom';

const Product = (props) => {
  const {productObj} = props;
  const navigate = useNavigate();


  const onProductClicked = (event, id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-40 h-40 image-div">
        <img alt="product-image" src={productObj.image}
          className="e-image" />
      </div>
      <span onClick={(e) => onProductClicked(
          e,
          productObj.id,
      )} className="hover:cursor-pointer hover:underline max-w-[15rem]">{productObj.title}</span>
      <span>${productObj.price}</span>
    </div>
  );
};

export default Product;
