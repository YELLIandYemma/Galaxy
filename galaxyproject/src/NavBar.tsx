import React from "react";
import indexcss from "/src/index.css";
import About from "./About";
const NavBar: React.FC = () => {
  return (
    <center>
      <nav>
        <ul>
          <li>
            <a href="#about ">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/invest">Invest</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </center>
  );
};

export default NavBar;
