import axios from 'axios';

const getProductByID = data => ({
  type: 'ADD_ONE_PRODUCT',
  payload: data,
});

const asyncgetProductByID = obj => dispatch => {
  axios
    .post(`http://localhost:3009/api/products`, obj)
    .then(res => {
      dispatch(getProductByID(res.data.data));
    })
    .catch(error => console.log(error));
};

export default {
  asyncgetProductByID,
};
