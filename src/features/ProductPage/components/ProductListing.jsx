import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setProducts, addProducts} from '../slices/productSlice';
import {fetchProducts} from '../../../common/utils/api';
import {useState, useEffect} from 'react';
import {PRODUCT_LISTING_LIMIT} from '../../../constants';
import Product from './Product';
import {BiLoaderCircle} from 'react-icons/bi';

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const filters = useSelector((state) => state.filters.filters);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMoreProducts, setLoadingMoreProducts] = useState(false);

  useEffect(
      () => {
        setPageNumber(1);
        setProductsInStore();
      },
      [filters],
  );

  useEffect(
      () => {
        setProductsInStore();
      },
      [pageNumber],
  );

  const setProductsInStore = async () => {
    if (pageNumber == 1) {
      setLoading(true);
    } else {
      setLoadingMoreProducts(true);
    }
    const response = await fetchProducts(
        PRODUCT_LISTING_LIMIT,
        pageNumber,
        filters.minPrice,
        filters.maxPrice,
        filters.categories,
        filters.rating,
    );
    if (response.totalPages <= response.currentPage) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
    setProductsCount(response.totalCount);
    if (filters.searchString.length) {
      response.products = response.products.filter(
          (obj)=>obj.title.toLowerCase().includes(filters.searchString.toLowerCase()));
    }
    // Since from API, id is not coming unique
    response.products.forEach((obj) => obj.temp_id = Math.random());
    if (pageNumber == 1) {
      dispatch(setProducts(response.products));
    } else {
      dispatch(addProducts(response.products));
    }
    setLoading(false);
    setLoadingMoreProducts(false);
  };

  const loadMoreProductsClicked = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="w-full">
      {loading ? <div className="text-lg flex flex-col justify-center items-center gap-1">
        <BiLoaderCircle className="animate-spin inline" size="30" />
        <div>Loading products</div>
      </div> : <div className="flex flex-col gap-10 w-full">
        <div className="text-right">Showing {productsCount} products</div>
        {products.length > 0 ?
          <div className="flex flex-col gap-16 justify-center items-center">
            <div role="list"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 w-full">
              {products.map((productObj) =>
                <Product key={productObj.temp_id} productObj={productObj} />)}
            </div>
            {!isLastPage &&
              <button className="e-button"
                onClick={loadMoreProductsClicked}>Load more products
                {loadingMoreProducts &&
                <BiLoaderCircle className="animate-spin inline" size="28" />}</button>}
          </div> :
          <div className="flex flex-row justify-center items-center">
            <span className="text-2xl">No products found</span>
          </div>}
      </div>}
    </div>
  );
};

export default ProductListing;
