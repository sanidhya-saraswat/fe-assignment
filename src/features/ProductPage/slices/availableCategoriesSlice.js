import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  availableCategories: [],
};

export const availableCategoriesSlice = createSlice({
  name: 'availableCategories',
  initialState,
  reducers: {
    setAvailableCategories: (state, {payload}) => {
      state.availableCategories = payload;
    },
  },
});

export const getAvailableCategories = (state)=>state.availableCategories.availableCategories;

export const {
  setAvailableCategories,
} = availableCategoriesSlice.actions;

export default availableCategoriesSlice.reducer;
