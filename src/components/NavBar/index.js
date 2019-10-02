import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <div className="navbar-fixed z-depth-4">
      <nav>
        <div className="nav-wrapper purple indigo darken-4">
          <a href="/" className="brand-logo">
            clicky
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down score-div">
            <li>
              <span id="score">score: {props.score} | high score: {props.highscore}</span>
            </li>
          </ul>

          <ul id="nav-mobile" className="right hide-on-med-and-down banner-div">
            <li>
              <span id="banner"></span>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
}

export default NavBar;
