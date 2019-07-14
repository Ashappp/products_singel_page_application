import axios from 'axios';

const fetchCreateProduct = createObject =>
  axios.post(`http://localhost:3009/api/product/new`, createObject);

const fetchLogin = loginObj =>
  axios.post(`http://localhost:3009/api/login`, loginObj);

const fetchProductById = idObj =>
  axios.post(`http://localhost:3009/api/products/:id`, idObj);

export default {
  fetchCreateProduct,
  fetchLogin,
  fetchProductById,
};
