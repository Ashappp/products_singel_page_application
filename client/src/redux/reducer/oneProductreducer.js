function oneProduct(state = [], action) {
  switch (action.type) {
    case 'ADD_ONE_PRODUCT':
      return [...state, ...action.payload];

    default:
      return state;
  }
}

export default oneProduct;
