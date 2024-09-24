import React from "react";
import { ReactComponent as DarkIcon } from "./dark.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={`navbar navbar-expand-lg bg-primary`}>
      <div className="container-fluid">
        <NavLink className={`navbar-brand text-light`} to="/">
          teXtutils
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link text-light mx-1"
                activeClassName="active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link text-light mx-1"
                activeClassName="active"
              >
                About us
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className={`btn ${darkMode ? "btn-light" : "btn-dark"} mx-1 mb-2`}
            onClick={toggleDarkMode}
          >
            <DarkIcon />
          </button>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 mx-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
