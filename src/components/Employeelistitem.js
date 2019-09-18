import React from "react";
import people from "../static/people.png";
import girl from "../static/girl.jpg";
import girl2 from "../static/girl2.png";
import pep from "../static/pep.png";
import person from "../static/person.jpg";
import wom from "../static/wom.png";

import ReactDOM from "react-dom";

function Employeelistitem() {
  return (
    <div className="list-item">
      <ul>
        <div className="one">
          <li>
            James King
            <br />
            <div className="one-sub">
              <b>President & CEO</b>
            </div>
            <img src={people} />
          </li>
        </div>
        <div className="two">
          <li>
            Julie Taylor <br />
            <div className="one-sub">
              <b>VP of Marketing</b>
            </div>
            <img src={girl} />
          </li>
        </div>
        <div className="three">
          <li>
            Eugene Lee <br />
            <div className="one-sub">
              <b>CFO</b>
            </div>
            <img src={girl2} />
          </li>
        </div>
        <div className="four">
          <li>
            John Williams <br />
            <div className="one-sub">
              <b>VP of Engineering</b>
            </div>
            <img src={pep} />
          </li>
        </div>
        <div className="five">
          <li>
            Ray Moore <br />
            <div className="one-sub">
              <b>VP of Sales</b>
            </div>
            <img src={person} />
          </li>
        </div>
        <div className="six">
          <li>
            Paul Jones <br />
            <div className="one-sub">
              <b>QA manager</b>
            </div>
            <img src={wom} />
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Employeelistitem;
