export default (state = "", action) => {
  switch (action.type) {
    case "FETCH_COUNTRY_NAME":
      return action.payload;
    default:
      return state;
  }
};
