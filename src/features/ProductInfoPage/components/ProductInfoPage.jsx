import React, {useState, useEffect} from 'react';
import Footer from '../../Footer/components/Footer';
import {fetchProductById} from '../../../common/utils/api';
import {useParams} from 'react-router';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiLinkExternal} from 'react-icons/bi';
import {addToCart} from '../../CartPage/slices/cartSlice';
import {useDispatch} from 'react-redux';
import {setSnackbarConfig} from '../../../common/slices/snackbarSlice';

const ProductInfoPage = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(
      () => {
        setProductById();
      },
      [],
  );

  const setProductById = async () => {
    const response = await fetchProductById(id);
    setProduct(response);
  };

  const incrementQuantity = () => {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };

  const addToCartClicked = (e) => {
    dispatch(addToCart({id: product.id,
      quantity: quantity,
      image: product.image,
      title: product.title,
      price: product.price}));
  };

  const wishlistIconClicked = ()=>{
    dispatch(setSnackbarConfig({show: true, message: 'This feature is coming soon!'}));
  };

  const externalLinkIconClicked = ()=>{
    dispatch(setSnackbarConfig({show: true, message: 'This feature is coming soon!'}));
  };

  return (
    <div>
      {product && <div className="page-wrapper">
        <div className="page">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="w-80 h-80 image-div">
              <img alt="product-image" src={product.image}
                className="e-image" />
            </div>
            <div className="flex flex-col gap-4 w-full flex-1">
              <div className="flex flex-row justify-between items-center">
                <h1 className="font-bold text-3xl max-w-xs">{product.title}</h1>
                <div className=" flex flex-row gap-2 items-center justify-center">
                  <AiOutlineHeart size="30"
                    className="cursor-pointer" onClick={wishlistIconClicked}/>
                  <BiLinkExternal size="30"
                    className="cursor-pointer" onClick={externalLinkIconClicked}/>
                </div>
              </div>
              <div className="text-lg">${product.price}</div>
              <div>{product.description}</div>
              <div className="flex flex-row items-end justify-between w-full gap-2">
                <button onClick={(e) => addToCartClicked(e)}
                  className="e-button-filled flex-1"
                >Add to cart</button>
                <div className="flex flex-col gap-2">
                  <span className="text-md text-slate-700">Quantity</span>
                  <div className="flex items-center justify-center text-xl">
                    <span className="cursor-pointer select-none border-2
                    border-slate-500 p-4 pt-2 pb-2"
                    onClick={(e) => decrementQuantity(e)}>-</span>
                    <span className="border-t-2 border-b-2 border-slate-500 p-4 pt-2 pb-2
                    min-w-[3.5rem] text-center">{quantity}</span>
                    <span className="cursor-pointer select-none border-2 border-slate-500
                    p-4 pt-2 pb-2"
                    onClick={(e) => incrementQuantity(e)}>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>}
    </div>
  );
};

export default ProductInfoPage;
