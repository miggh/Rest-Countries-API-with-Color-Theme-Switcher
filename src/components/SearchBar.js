import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSearchCountries, searching } from "../actions";
import searchSvg from "../image/search-outline.svg";
import "../sass/layout/_search.scss";

const SearchBar = ({ fetchSearchCountries, searching }) => {
  const [term, setTerm] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    fetchSearchCountries(term);
    searching(true);
  };
  return (
    <div className="searchbar-block">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a country..."
          className="searchbar"
        />
        <img src={searchSvg} className="searchbar__icon" alt="search" />
      </form>
    </div>
  );
};

export default connect(null, { fetchSearchCountries, searching })(SearchBar);
