import axios from 'axios';

export const fetchProducts = async (limit, pageNumber, minPrice, maxPrice, categories, rating) => {
  /* eslint-disable-next-line max-len */
  let url = `https://vast-erin-gosling-vest.cyclic.app/products?limit=${limit}&page=${pageNumber}&minPrice=${minPrice}&maxPrice=${maxPrice}&rating=${rating}`;
  if (categories.length) {
    categories = categories.join(',');
    url += `&category=${categories}`;
  }
  const response = await axios.get(url);
  return response.data;
};

export const fetchProductById = async (id) => {
  const url = `https://vast-erin-gosling-vest.cyclic.app/products/${id}`;
  const response = await axios.get(url);
  return response.data;
};


export const fetchCategories = async () => {
  const url = 'https://vast-erin-gosling-vest.cyclic.app/products/categories';
  const response = await axios.get(url);
  return response.data;
};

export const fetchInfoFromPincode = async (pincode) => {
  const url = 'https://api.postalpincode.in/pincode/' + pincode;
  const response = await axios.get(url);
  return response.data;
};
