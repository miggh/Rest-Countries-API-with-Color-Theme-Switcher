export default (state = "", action) => {
  switch (action.type) {
    case "FETCH_SEARCH_COUNTRIES":
      return action.payload;
    case "FETCH_ERROR":
      return "No results.";
    default:
      return state;
  }
};
