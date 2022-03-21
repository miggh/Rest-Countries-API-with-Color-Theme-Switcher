import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import countryDetailReducer from "./countryDetailReducer";
import showCountryDetailReducer from "./showCountryDetailReducer";
import countryNameRecuder from "./countryNameReducer";
import toggleDarkModeReducer from "./toggleDarkModeReducer";

export default combineReducers({
  countries: countriesReducer,
  countryDetail: countryDetailReducer,
  showCountryDetail: showCountryDetailReducer,
  countryName: countryNameRecuder,
  toggleDarkMode: toggleDarkModeReducer,
});
