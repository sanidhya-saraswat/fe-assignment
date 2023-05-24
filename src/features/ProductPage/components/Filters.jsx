import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {fetchCategories} from '../../../common/utils/api';
import {AiFillStar} from 'react-icons/ai';
import {BiLoaderCircle} from 'react-icons/bi';
import {
  addCategory,
  removeCategory,
  setMinPrice,
  setMaxPrice,
  setRating,
  setSearchString,
} from '../slices/filterSlice';
import {GoSearch} from 'react-icons/go';
import {DEFAULT_MAX_PRICE, DEFAULT_MIN_PRICE, DEFAULT_RATING} from '../../../constants';
import Checkbox from '../../../common/components/Checkbox';

const Filters = () => {
  const dispatch = useDispatch();
  const [availableCategories, setAvailableCategories] = useState([]);
  const availableRatings = [3, 4];
  const filters = useSelector((state) => state.filters.filters);

  useEffect(
      () => {
        setAvailableCategoriesInComponent();
      },
      [],
  );

  const setAvailableCategoriesInComponent = async () => {
    let response = await fetchCategories();
    response = response.slice(
        0,
        6,
    ); // Reducing categories until collapsible-category-selector is designed
    setAvailableCategories(response);
  };

  const onCategoryChange = (category) => {
    if (filters.categories.includes(category)) {
      dispatch(removeCategory(category));
    } else {
      dispatch(addCategory(category));
    }
  };

  const onMinPriceChange = (event) => {
    if (event.target.value) {
      dispatch(setMinPrice(event.target.value));
    }
  };

  const onMaxPriceChange = (event) => {
    if (event.target.value) {
      dispatch(setMaxPrice(event.target.value));
    }
  };

  const onRatingChange = (rating) => {
    if (filters.rating == rating) {
      dispatch(setRating(DEFAULT_RATING));
    } else {
      dispatch(setRating(rating));
    }
  };

  const onSearch = (e)=>{
    dispatch(setSearchString(e.target.value.trim()));
  };

  return (
    <div className="flex flex-col gap-8">
      <span className="text-2xl font-bold">Filters</span>
      <div>
        <div className="flex flex-row gap-3 items-center">
          <GoSearch size="19" />
          <input placeholder="Search for a product"
            className="bg-transparent h-8 focus:outline-none border-b-2
            border-slate-400 w-full min-w-[15rem]"
            name="myInput" value={filters.searchString} onChange={onSearch}/>
        </div>
        <div className="text-xs mt-1 text-slate-600">
          Search is limited. API does not support it.</div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-lg font-bold">Categories </span>
        {availableCategories.length > 0 ? <div className="flex flex-col gap-2">
          {availableCategories.map((category) => <Checkbox
            id={category}
            key={category}
            isChecked={filters.categories.includes(category)}
            onChange={() => onCategoryChange(category)}
            label={` ${category.charAt(0).toUpperCase()}${category.slice(1)}`}
          />)}
        </div> : <BiLoaderCircle className="animate-spin" size="26" />}
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-lg font-bold">Price Range</span>
        <div className="flex flex-row gap-4">
          <input placeholder="Min" type="number" min={DEFAULT_MIN_PRICE} max={DEFAULT_MAX_PRICE}
            className="bg-transparent h-8 focus:outline-none border-2
            border-slate-300 p-4 min-w-[5rem]" name="minPrice"
            value={filters.minPrice} onChange={(e) => onMinPriceChange(e)} />
          <input placeholder="Max" type="number" min={DEFAULT_MIN_PRICE} max={DEFAULT_MAX_PRICE}
            className="bg-transparent h-8 focus:outline-none border-2
            border-slate-300 p-4 min-w-[5rem]" name="maxPrice"
            value={filters.maxPrice} onChange={(e) => onMaxPriceChange(e)} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-lg font-bold">Customer Rating</span>
        <div className="flex flex-col gap-2">
          {availableRatings.map((rating) => <div key={rating}>
            <Checkbox
              id={rating}
              key={rating}
              isChecked={filters.rating == rating}
              onChange={() => onRatingChange(rating)}
              label={<span> {rating}<AiFillStar className="inline mb-1" /> & above</span>}
            />
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Filters;
