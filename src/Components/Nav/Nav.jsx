import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <>
      <div className="nav__default">
        <Link className="title" to="/login">
          Login
        </Link>
        <br />
        <Link className="title" to="/register">
          Register
        </Link>
      </div>
    </>
  );
}
export default Nav;
