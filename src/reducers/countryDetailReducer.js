export default (state = null, action) => {
  switch (action.type) {
    case "FETCH_COUNTRY_DETAIL":
      return action.payload;
    default:
      return state;
  }
};
