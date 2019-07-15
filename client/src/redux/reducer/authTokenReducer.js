import * as t from '../actions/actionsType';

function authToken(state = false, action) {
  switch (action.type) {
    case t.AUTH_TOKEN:
      return action.payload;

    default:
      return state;
  }
}

export default authToken;
