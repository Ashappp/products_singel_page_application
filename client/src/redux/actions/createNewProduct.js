// import axios from 'axios';

export const createNewProductAction = data => ({
  type: 'CREATE_NEW_PRODUCT',
  payload: data,
});

export default createNewProductAction;

// const asyncCreateNewProductAction = createObj => dispatch => {
//   axios
//     .get(`http://localhost:3009/api/products`, createObj)
//     .then(res => {
//       dispatch(getData(res.data.data));
//       //   dispatch(getArrFromDraw(res.data.data));
//     })
//     .catch(error => console.log(error));
// };
