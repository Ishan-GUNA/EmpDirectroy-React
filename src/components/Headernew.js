import React from "react";
import girl3 from "../static/girl3.jpg";
import ReactDOM from "react-dom";

function Headernew() {
  return (
    <divwrapper className="headn">
      <div className="head-new">Employee</div>
      <div className="add-image">
        <h4>
          Juliya Tailor <br />
          <img src={girl3} />
          <div className="one-sub">
            <b>VP of Marketing</b>
          </div>
        </h4>
      </div>
      <ul>
        <li>
          Call office <br />
          <div className="two-sub">
            <b>0777123456</b>
          </div>
        </li>
        <li>
          Call mobile <br />
          <div className="two-sub">
            <b>0777123456</b>
          </div>
        </li>
        <li>
          SMS <br />
          <div className="two-sub">
            <b>0777123456</b>
          </div>
        </li>
        <li>
          Email <br />
          <div className="two-sub">
            <b>info@wisdompath.com</b>
          </div>
        </li>
      </ul>
    </divwrapper>
  );
}

export default Headernew;
