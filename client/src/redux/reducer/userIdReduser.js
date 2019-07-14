function userId(state = '', action) {
  switch (action.type) {
    case 'GET_USER_ID':
      return action.payload;
    default:
      return state;
  }
}

export default userId;
