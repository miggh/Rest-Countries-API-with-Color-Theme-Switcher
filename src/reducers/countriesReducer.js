export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_COUNTRIES":
      return action.payload;
    case "FETCH_REGION_COUNTRIES":
      return action.payload;
    case "FETCH_SEARCH_COUNTRIES":
      return action.payload;
    default:
      return state;
  }
};
