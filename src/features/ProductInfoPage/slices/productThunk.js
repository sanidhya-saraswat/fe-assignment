import {fetchProductById} from '../../../common/utils/api';
import {setProduct} from '../slices/productSlice';

export const setProductById = (id) => async (dispatch) => {
  const product = await fetchProductById(id);
  dispatch(setProduct(product));
};
