import {
  ADD_DATA_IN_STORE,
  GET_MOVIE_FROM_TITLE,
  GET_MOVIE_FROM_STAR,
  GET_SORT_MOVIE_AZ,
  GET_SORT_MOVIE_ZA,
  DELETE_FILTERED_DATA,
  GET_DATA_AFTER_UPLOAD
} from "../actions/actionsType";

function data(state = [], action) {
  switch (action.type) {
    case ADD_DATA_IN_STORE:
      return action.payload;

    case GET_MOVIE_FROM_TITLE:
      if (action.param === "") {
        const defaultArr = [...action.payload];
        return defaultArr;
      } else if (action.param !== "") {
        const arrTitle = [...action.payload].filter(
          el => el.title.toLowerCase().indexOf(action.param.toLowerCase()) >= 0
        );
        return arrTitle;
      } else {
        return [...action.payload];
      }

    case GET_MOVIE_FROM_STAR:
      if (action.param === "") {
        const defaultArr = [...action.payload];
        return defaultArr;
      } else if (action.param !== "") {
        const arrStar = [...action.payload].filter(el =>
          el.stars.find(
            item => item.toLowerCase().indexOf(action.param.toLowerCase()) >= 0
          )
        );
        return arrStar;
      } else {
        return [...action.payload];
      }

    case GET_SORT_MOVIE_AZ:
      const arrSortAZ = [...action.payload].sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      });
      return arrSortAZ;

    case GET_SORT_MOVIE_ZA:
      const arrSortZA = [...action.payload].sort((a, b) =>
        a.title < b.title ? 1 : -1
      );
      return arrSortZA;

    case DELETE_FILTERED_DATA:
      const newArr = [...state].filter(el => el._id !== action.id);
      return newArr;

    case GET_DATA_AFTER_UPLOAD:
      const dataAfterUpload = [...state, ...action.payload];
      return dataAfterUpload;

    default:
      return state;
  }
}

export default data;
