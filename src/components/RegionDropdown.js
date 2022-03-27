import React from "react";
import { connect } from "react-redux";
import {
 
  regionFilter,
} from "../actions";
import "../sass/components/_dropdown.scss";

const RegionDropdown = ({ regionFilter }) => {
  const handleChange = (event) => {
   
    regionFilter(event.target.value);
  };
  
  return (
    <React.Fragment>
      <select
        className="dropdown"
        onChange={handleChange}
        defaultValue="default"
        title="region"
      >
        <option className="dropdown__option" value="default" disabled hidden>
          Filter by Region
        </option>
        <option className="dropdown__option" value="Africa">
          Africa
        </option>
        <option className="dropdown__option" value="Americas">
          Americas
        </option>
        <option className="dropdown__option" value="Asia">
          Asia
        </option>
        <option className="dropdown__option" value="Europe">
          Europe
        </option>
        <option className="dropdown__option" value="Oceania">
          Oceania
        </option>
        <option className="dropdown__option" value="All">
          All Regions
        </option>
      </select>
    </React.Fragment>
  );
};

export default connect(null, {
  regionFilter,
})(RegionDropdown);
