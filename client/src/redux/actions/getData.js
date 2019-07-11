import axios from "axios";
import { getArrFromDraw } from "../actions/filteredDataActions";
import { deleteFilteredData } from "./filteredDataActions";
import { GET_DATA, DELETE_DATA } from "./actionsType";
import {url} from "../../services/fileWithConstants"

const getData = data => ({
  type: GET_DATA,
  payload: data
});

const deleteData = id => ({
  type: DELETE_DATA,
  id
});

const asyncDataAction = () => dispatch => {
  axios
    .get(`${url}/all`)
    .then(res => {
      dispatch(getData(res.data.data));
      dispatch(getArrFromDraw(res.data.data));
    })
    .catch(error => console.log(error));
};

const asyncDeleteDataAction = id => dispatch => {
  axios
    .delete(`${url}/delete/${id}`)
    .then(res => {
      if (res.data.movieToDelete._id === id) {
        dispatch(deleteData(id));
        dispatch(deleteFilteredData(id));
      }
    })
    .catch(err => console.log(err));
};

export default {
  asyncDataAction,
  asyncDeleteDataAction
};
