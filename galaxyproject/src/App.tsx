import React from "react";
import NavBar from "./NavBar"; // Assuming the component file is named NavBar.tsx
import About from "./About";
import indexcss from "./index.css";

function App() {
  return (
    <div>
      <NavBar />

      {<About />}
      <div className="text-layer">
        <h1 id="h1">Galaxy</h1>
        <h2 className="text-right">
          An Environment where you<br></br> can find all the movies and
          <br></br> music for free.
        </h2>
      </div>
      <img />
    </div>
  );
}
export default App;
