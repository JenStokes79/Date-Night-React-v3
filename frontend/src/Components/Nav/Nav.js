import React from "react";
import "./Nav.css";
import "../Logon/Logon.js"



// console.log(Logon.constructor())



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
  <a href="/" onClick={props.logout}>Sign Out </a>
  </li>
  </ul>
  </div>
  </nav>
  
); 
  // <nav className="navbar navbar-inverse navbar-top">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  // <a href="/movienight" className="navbar-brand">
  //   Dinner & Movie
  // </a>
  // <span className="navbar-brand">|</span>
  // <a href="/wheel" className="navbar-brand">
  //   Spin the Wheel
  // </a>
  // <span className="navbar-brand">|</span>
  // <a href="/dollardates" className="navbar-brand">
  //   Dollar Dates
  // </a>
  // <span className="navbar-brand">|</span>
  // <a href="/events" className="navbar-brand">
  //   Sign Out
  // </a>
  //     </div>
  //   </div>
  // </nav>

export default Nav;
