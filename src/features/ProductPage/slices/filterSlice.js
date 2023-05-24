import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  filters: {
    categories: [],
    minPrice: 0,
    maxPrice: 50000,
    rating: 0,
    searchString: '',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, {payload}) => {
      state.filters = payload;
    },
    addCategory: (state, {payload}) => {
      state.filters.categories.push(payload);
    },
    removeCategory: (state, {payload}) => {
      state.filters.categories = state.filters.categories.filter((obj) => obj != payload);
    },
    setMinPrice: (state, {payload}) => {
      state.filters.minPrice = payload;
    },
    setMaxPrice: (state, {payload}) => {
      state.filters.maxPrice = payload;
    },
    setRating: (state, {payload}) => {
      state.filters.rating = payload;
    },
    setSearchString: (state, {payload}) => {
      state.filters.searchString = payload;
    },
  },
});

export const getFilters = (state)=>state.filters.filters;

export const {
  setFilters,
  addCategory,
  removeCategory,
  setMinPrice,
  setMaxPrice,
  setRating,
  setSearchString,
} = filterSlice.actions;

export default filterSlice.reducer;
