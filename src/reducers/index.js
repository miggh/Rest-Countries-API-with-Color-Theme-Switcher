import { combineReducers } from "redux";
import allCountriesReducer from "./allCountriesReducer";
import userInputSearchReducer from "./userInputSearchReducer";
import countryDetailReducer from "./countryDetailReducer";
import showCountryDetailReducer from "./showCountryDetailReducer";
import countryNameRecuder from "./countryNameReducer";
import toggleDarkModeReducer from "./toggleDarkModeReducer";
import isSearchingReducer from "./isSearchingReducer";
import RegionReducer from "./RegionReducer";

export default combineReducers({
  allCountries: allCountriesReducer,
  userInputSearch: userInputSearchReducer,
  countryDetail: countryDetailReducer,
  showCountryDetail: showCountryDetailReducer,
  countryName: countryNameRecuder,
  darkMode: toggleDarkModeReducer,
  isSearching: isSearchingReducer,
  selectedRegion: RegionReducer,
});
