import {fetchCategories} from '../../../common/utils/api';
import {setAvailableCategories} from './availableCategoriesSlice';

export const setAllAvailableCategories =
  () => async (dispatch, getState) => {
    let response = await fetchCategories();
    response = response.slice(
        0,
        6,
    ); // Reducing categories until collapsible-category-selector is designed
    dispatch(setAvailableCategories(response));
  };
