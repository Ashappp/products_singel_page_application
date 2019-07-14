import { combineReducers } from 'redux';
import dataProducts from './getAllProductsReduser';
import userId from './userIdReduser';
import oneProduct from './oneProductreducer';

const rootReducer = combineReducers({
  dataProducts,
  userId,
  oneProduct,
});

export default rootReducer;
