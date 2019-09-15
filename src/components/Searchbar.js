import React from "react";
import ReactDOM from "react-dom";

function Searchbar() {
  return (
    <div className="bar">
      <form>
        <input type="text" name="search" placeholder="Search.." />
      </form>
    </div>
  );
}

export default Searchbar;
