// import axios from 'axios';

const addNewProduct = data => ({
  type: 'ADD_NEW_PRODUCT',
  payload: data,
});

// export const asyncgetProductByID = obj => dispatch => {
//   axios
//     .post(`http://localhost:3009/api/product/new`, obj)
//     .then(res => {
//       dispatch(addNewProduct(res.data.data));
//     })
//     .catch(error => console.log(error));
// };

export default addNewProduct;
