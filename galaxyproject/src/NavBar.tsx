import React from "react";
import indexcss from "/src/index.css";
import { useState, useEffect } from "react";
import Packages from "./Packages"; // Import the Packages component
import About from "./About";
import Contact from "./Contact";
import "./index.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg text-end  bg-body-tertiary fixed-top ">
      <div className="container-fluid">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Galaxy
            </a>
          </div>
        </nav>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#package">
                Packages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
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
