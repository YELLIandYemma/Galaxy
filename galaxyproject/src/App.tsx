import React from "react";
import NavBar from "./NavBar"; // Assuming the component file is named NavBar.tsx
import About from "./About";
import Packages from "./Packages";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <NavBar />

      {<About />}
      {<Packages />}
      {<Contact />}

      <div className="text-layer">
        <h1 id="h1">Galaxy</h1>
        <h2 className="text-right">
          An Environment where you<br></br> can find all the movies and
          <br></br> music for free.
        </h2>
      </div>
    </div>
  );
}
export default App;
