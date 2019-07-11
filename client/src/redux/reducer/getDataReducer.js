import {
  GET_DATA,
  DELETE_DATA,
  ADD_MOVIE,
  GET_DATA_AFTER_UPLOAD
} from "../actions/actionsType";

function data(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;

    case DELETE_DATA:
      const newArr = [...state].filter(el => el._id !== action.id);
      return newArr;

    case ADD_MOVIE:
      return [...state, action.payload];

    case GET_DATA_AFTER_UPLOAD:
      return [...state, ...action.payload];

    default:
      return state;
  }
}

export default data;
