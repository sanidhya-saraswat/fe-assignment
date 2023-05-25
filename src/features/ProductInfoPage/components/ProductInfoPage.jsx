import React, {useState, useEffect} from 'react';
import Footer from '../../Footer/components/Footer';
import {useParams} from 'react-router';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiLinkExternal} from 'react-icons/bi';
import {addToCart} from '../../CartPage/slices/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import {setSnackbarConfig} from '../../../common/slices/snackbarSlice';
import {setProductById} from '../slices/productThunk';
import {getProduct} from '../slices/ProductSlice';

const ProductInfoPage = () => {
  const product = useSelector(getProduct);
  const [quantity, setQuantity] = useState(1);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(
      () => {
        dispatch(setProductById(id));
      },
      [],
  );

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
      {product && <div className="flex flex-col min-h-[100vh] justify-center items-center">
        <div className="flex-1 p-10 max-w-screen-lg w-full">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="w-80 h-80 shadow flex flex-row
            items-center justify-center bg-slate-300">
              <img alt="product-image" src={product.image}
                className="max-w-full max-h-full w-auto h-auto" />
            </div>
            <div className="flex flex-col gap-4 w-full flex-1">
              <div className="flex flex-row justify-between items-center">
                <h1 className="font-bold text-3xl max-w-xs">{product.title}</h1>
                <div className=" flex flex-row gap-2 items-center justify-center">
                  <button onClick={wishlistIconClicked}><AiOutlineHeart size="30"
                    className="cursor-pointer" /></button>
                  <button onClick={externalLinkIconClicked}><BiLinkExternal size="30"
                    className="cursor-pointer"/></button>
                </div>
              </div>
              <div className="text-lg">${product.price}</div>
              <div>{product.description}</div>
              <div className="flex flex-row items-end justify-between w-full gap-2">
                <button onClick={(e) => addToCartClicked(e)}
                  className="border-0 p-2 bg-slate-900 text-white
                  enabled:active:scale-95 transition duration-150 ease-in-out flex-1"
                >Add to cart</button>
                <div className="flex flex-col gap-2">
                  <span className="text-md text-slate-700">Quantity</span>
                  <div className="flex items-center justify-center text-xl">
                    <button className="cursor-pointer select-none border-2
                    border-slate-500 p-4 pt-2 pb-2"
                    onClick={(e) => decrementQuantity(e)}>-</button>
                    <span className="border-t-2 border-b-2 border-slate-500 p-4 pt-2 pb-2
                    min-w-[3.5rem] text-center">{quantity}</span>
                    <button className="cursor-pointer select-none border-2 border-slate-500
                    p-4 pt-2 pb-2"
                    onClick={(e) => incrementQuantity(e)}>+</button>
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
