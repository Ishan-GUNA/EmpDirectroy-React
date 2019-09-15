import React from "react";
import Header from "./Header.js";
import Searchbar from "./Searchbar.js";
import Employeelist from "./Employeelist.js";
import ReactDOM from "react-dom";

function Homepage() {
  return (
    <div className="home-page">
      <Header />,
      <Searchbar />,
      <Employeelist />,
    </div>
  );
}

export default Homepage;
