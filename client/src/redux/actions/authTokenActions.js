import axios from 'axios';

const authToken = data => ({
  type: 'AUTH_TOKEN',
  payload: data,
});

const asyncDataAction = () => dispatch => {
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
    .then(res => (res.data.message !== 'Token is not valid' ? true : false))
    .then(boolean => dispatch(authToken(boolean)))
    .catch(error => console.log(error));
};

export default asyncDataAction;
