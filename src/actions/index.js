import restCountries from "../apis/restCountries";

export const fetchAllCountries = () => {
  return async (dispatch) => {
    const response = await restCountries.get("/all");
    dispatch({ type: "FETCH_ALL_COUNTRIES", payload: response.data });
  };
};

export const fetchRegionCountries = (region) => {
  return async (dispatch) => {
    const response = await restCountries.get(`/region/${region}`);
    dispatch({ type: "FETCH_REGION_COUNTRIES", payload: response.data });
  };
};

export const fetchSearchCountries = (input) => {
  return async (dispatch) => {
    try {
      const response = await restCountries.get(`/name/${input}`);
      dispatch({ type: "FETCH_SEARCH_COUNTRIES", payload: response.data });
    } catch (err) {
      alert(`${err.response.data.message}. Please try again!`);
    }
  };
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
