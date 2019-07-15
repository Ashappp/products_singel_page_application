import * as t from '../actions/actionsType';
function data(state = [], action) {
  switch (action.type) {
    case t.ADD_DATA_IN_STORE:
      return [...state, ...action.payload];

    case t.ADD_NEW_PRODUCT:
      return [...state, action.payload];

    default:
      return state;
  }
}

export default data;
