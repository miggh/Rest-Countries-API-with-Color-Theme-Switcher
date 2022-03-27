export default (state = false, action) => {
  switch (action.type) {
    case "IS_SEARCHING":
      return action.payload;
    case "FETCH_ERROR":
      return true;
    default:
      return state;
  }
};
