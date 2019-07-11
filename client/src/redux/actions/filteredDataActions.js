import * as t from "./actionsType";

export const getArrFromDraw = data => ({
  type: t.ADD_DATA_IN_STORE,
  payload: data
});

export const arrFilterTitle = (data, param) => ({
  type: t.GET_MOVIE_FROM_TITLE,
  payload: data,
  param
});

export const arrFilterStar = (data, param) => ({
  type: t.GET_MOVIE_FROM_STAR,
  payload: data,
  param
});

export const arrFilterSortAZ = data => ({
  type: t.GET_SORT_MOVIE_AZ,
  payload: data
});

export const arrFilterSortZA = data => ({
  type: t.GET_SORT_MOVIE_ZA,
  payload: data
});

export const deleteFilteredData = id => ({
  type: t.DELETE_FILTERED_DATA,
  id
});

export default {
  getArrFromDraw,
  arrFilterTitle,
  arrFilterStar,
  arrFilterSortAZ,
  arrFilterSortZA,
  deleteFilteredData
};
