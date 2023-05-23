import React from 'react';
import Footer from '../../Footer/components/Footer';
import ProductListing from './ProductListing';
import Filters from './Filters';

const ProductPage = () => <div className="page-wrapper">
  <div className="page">
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">MyBag</h1>
        <p className="max-w-md">Welcome to MyBag, your ultimate destination for stylish
         and functional bags online!
        At MyBag, we believe that a bag is more than just an accessory.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-40">
        <Filters />
        <ProductListing/>
      </div>
    </div>
  </div>
  <Footer />
</div>;

export default ProductPage;
