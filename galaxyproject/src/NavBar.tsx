import React from "react";
import indexcss from "/src/index.css";
import { useState, useEffect } from "react";
import About from "./About";
import "./index.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="/invest">Invest</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
