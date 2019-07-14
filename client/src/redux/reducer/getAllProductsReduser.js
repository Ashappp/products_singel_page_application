function data(state = [], action) {
  switch (action.type) {
    case 'ADD_DATA_IN_STORE':
      return [...state, ...action.payload];

    case 'ADD_NEW_PRODUCT':
      return [...state, action.payload];

    default:
      return state;
  }
}

export default data;
