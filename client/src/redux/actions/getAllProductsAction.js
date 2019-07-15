import axios from 'axios';
import * as t from './actionsType';

const getData = data => ({
  type: t.ADD_DATA_IN_STORE,
  payload: data,
});

const asyncDataAction = () => dispatch => {
  axios
    .get(`http://localhost:3009/api/products`)
    .then(res => {
      dispatch(getData(res.data.data));
    })
    .catch(error => console.log(error));
};

export default asyncDataAction;
