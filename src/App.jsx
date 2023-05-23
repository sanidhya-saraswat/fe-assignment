import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Header from './features/Header/components/Header.jsx';
import ProductPage from './features/ProductPage/components/ProductPage.jsx';
import ProductInfoPage from './features/ProductInfoPage/components/ProductInfoPage';
import CartPage from './features/CartPage/components/CartPage';
import React, {useEffect} from 'react';
import {setCart} from './features/CartPage/slices/cartSlice';
import {useDispatch} from 'react-redux';
import Snackbar from './common/components/Snackbar';
import CheckoutPage from './features/CheckoutPage/components/CheckoutPage';
import OrderPlacedPage from './features/OrderPlacedPage/components/OrderPlacedPage';
import OrdersPage from './features/OrdersPage/components/OrdersPage';

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
      dispatch(setCart(JSON.parse(cartItems)));
    }
  }, []);

  return (
    <div className="bg-slate-200">
      <Snackbar />
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductInfoPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-placed" element={<OrderPlacedPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
