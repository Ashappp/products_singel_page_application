import axios from 'axios';

const fetchCreateProduct = (createObject, token) =>
  axios.post(`http://localhost:3009/api/product/new`, createObject, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

const fetchLogin = loginObj =>
  axios.post(`http://localhost:3009/api/login`, loginObj);

const fetchProductById = idObj =>
  axios.post(`http://localhost:3009/api/products/:id`, idObj);

export default {
  fetchCreateProduct,
  fetchLogin,
  fetchProductById,
};
