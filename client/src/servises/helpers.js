import axios from 'axios';

export const authToken = () => {
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
    .then(res => (res.data.message !== 'Token is not valid' ? true : false));
};
export default authToken;
