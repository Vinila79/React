import React from "react";
import { Link } from "react-router-dom";


function Navbar () {
    const LinkStyle = {
        textDecoration: "none",
    }

    const ListStyle = {
        margin: 10,
    }
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={ListStyle}>
        {/* <a className="nav-link active" href="#">
        Home
        </a> */}
        <Link to={"/"} style={{LinkStyle}}>Home</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          about
        </a> */}
        <Link to={"/about"} style={{LinkStyle}}>About</Link>
      </li>
      <li className="nav-item">
        {/* <a className="nav-link" href="#">
          settings
        </a> */}
        <Link to={"/settings"} style={{LinkStyle}}>settings</Link>
      </li>

      <li className="nav-item">
        {/* <a className="nav-link" href="#">
         contact
        </a> */}
        <Link to={"/contact"} style={{LinkStyle}}>contact</Link>
      </li>

    </ul>
  </div>
</nav>

    )
};
export default Navbar;