import React from "react";
import NavBar from "./NavBar"; // Assuming the component file is named NavBar.tsx
import About from "./About";
import indexcss from "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      {<About />}
      <div>
        <img id="header-img" src="\src\assets\tv_snacks.png"></img>
      </div>
      <img />
    </div>
  );
}

export default App;
