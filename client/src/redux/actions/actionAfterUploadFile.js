import * as t from "./actionsType";

export const actionAfterUploadFile = data => ({
  type: t.GET_DATA_AFTER_UPLOAD,
  payload: data
});
export default actionAfterUploadFile;
