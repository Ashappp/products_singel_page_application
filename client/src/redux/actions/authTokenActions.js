import axios from 'axios';
import * as t from './actionsType';

export const authToken = data => ({
  type: t.AUTH_TOKEN,
  payload: data,
});

export const asyncAuthToken = () => dispatch => {
  const token = localStorage.getItem('token');
  axios
    .post(
      `http://localhost:3009/api/product/new`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then(res => {
      const boolean = res.data.message !== 'Token is not valid' ? true : false;
      dispatch(authToken(boolean));
    })
    .catch(error => {
      console.log(error);
    });
};

export default { authToken, asyncAuthToken };
