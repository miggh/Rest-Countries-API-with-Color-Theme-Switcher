export default (state = "All", action) => {
  switch (action.type) {
    case "REGION_FILTER":
      return action.payload;
    default:
      return state;
  }
};
