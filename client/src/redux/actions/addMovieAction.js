import { getArrFromDraw } from "./filteredDataActions";
import * as t from "./actionsType";

export const addMovie = data => (dispatch, getState) => {
  dispatch({
    type: t.ADD_MOVIE,
    payload: data
  });
  const state = getState();
  dispatch(getArrFromDraw(state.data));
};

export default addMovie;
