import { combineReducers } from 'redux';
import dataProducts from './getAllProductsReduser';

const rootReducer = combineReducers({
  dataProducts,
});

export default rootReducer;
