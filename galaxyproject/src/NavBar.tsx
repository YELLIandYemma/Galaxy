import React from "react";
import "./index.css";
import "./Packages";
import "./About";
import "./Contact";
import "./index.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg text-end  bg-body-tertiary fixed-top bg-black ">
      <div className="container-fluid">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Galaxy
            </a>
          </div>
        </nav>

        <button
          className="navbar-toggler text-black"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-black"></span>
        </button>
        <div className="collapse navbar-collapse text-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-black"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item text-black">
              <a className="nav-link text-black" href="#about">
                About
              </a>
            </li>
            <li className="nav-item text-black">
              <a className="nav-link text-black" href="#package">
                Packages
              </a>
            </li>
            <li className="nav-item text-black">
              <a className="nav-link text-black" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
