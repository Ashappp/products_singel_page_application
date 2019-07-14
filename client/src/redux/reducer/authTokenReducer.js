function authToken(state = true, action) {
  switch (action.type) {
    case 'AUTH_TOKEN':
      return action.payload;

    default:
      return state;
  }
}

export default authToken;
