import React from "react";
import "./Nav.css";
import "../Logon/Logon.js"

const Nav = props => (

  <nav>
    <div className="nav-wrapper">
      <a href="/homepage" className="brand-logo">
        <img src="../../../img/logo.png" />
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="/movienight">Dinner & Movie</a>
        </li>
        <li>
          <a href="/wheel">Spin the Wheel</a>
        </li>
        <li>
          <a href="/dollardates">Dollar Dates</a>
        </li>
        <li>
          <a href="/" onClick={props.logout}>Sign Out</a>
        </li>
      </ul>
    </div>
  </nav>

);


export default Nav;
