export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_COUNTRIES":
      return action.payload;
    case "SHOW_ALL_COUNTRIES":
      return state;
    default:
      return state;
  }
};
