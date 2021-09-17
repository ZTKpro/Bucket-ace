import * as React from "react";

import "./Search.scss";

import SearchIcon from "../../images/search.png";

const Search = () => {
  return (
    <section className="search">
      <div className="search__input">
        <input placeholder="Wyszukaj product"></input>
        <img src={SearchIcon} className="search__input-icon"></img>
      </div>
    </section>
  );
};

export default Search;
