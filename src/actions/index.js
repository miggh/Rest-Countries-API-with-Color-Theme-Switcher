import restCountries from "../apis/restCountries";

export const fetchAllCountries = () => {
  return async (dispatch) => {
    const response = await restCountries.get("/all");
    dispatch({ type: "FETCH_ALL_COUNTRIES", payload: response.data });
  };
};

export const showAllCountries = () => {
  return { type: "SHOW_ALL_COUNTRIES" };
};

export const fetchSearchCountries = (input) => {
  return async (dispatch) => {
    try {
      const response = await restCountries.get(`/name/${input}`);
      dispatch({ type: "FETCH_SEARCH_COUNTRIES", payload: response.data });
    } catch (err) {
      console.error(err.response);
      dispatch({ type: "FETCH_ERROR" });
    }
  };
};

export const regionFilter = (region) => {
  return { type: "REGION_FILTER", payload: region };
};

export const fetchCountryDetail = (fullName) => {
  return async (dispatch) => {
    const response = await restCountries.get(`/name/${fullName}?fullText=true`);
    dispatch({ type: "FETCH_COUNTRY_DETAIL", payload: response.data[0] });
  };
};

export const toggleShowCountryDetail = () => {
  return { type: "TOGGLE_SHOW_DETAIL" };
};

export const fetchCountryName = (alpha3Code) => {
  return async (dispatch) => {
    const response = await restCountries.get(`/alpha/${alpha3Code}`);
    dispatch({ type: "FETCH_COUNTRY_NAME", payload: response.data.name });
  };
};

export const toggleDarkMode = () => {
  return { type: "TOGGLE_DARK_MODE" };
};

export const searching = (searching) => {
  return { type: "IS_SEARCHING", payload: searching };
};
