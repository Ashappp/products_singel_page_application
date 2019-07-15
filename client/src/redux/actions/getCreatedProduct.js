import * as t from './actionsType';
const addNewProduct = data => ({
  type: t.ADD_NEW_PRODUCT,
  payload: data,
});

export default addNewProduct;
