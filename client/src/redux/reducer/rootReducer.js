import { combineReducers } from 'redux';
import dataProducts from './getAllProductsReduser';
import authToken from './authTokenReducer';

const rootReducer = combineReducers({
  dataProducts,
  authToken,
});

export default rootReducer;
