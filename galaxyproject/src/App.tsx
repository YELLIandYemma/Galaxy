import React from "react";
import NavBar from "./NavBar"; // Assuming the component file is named NavBar.tsx
import About from "./About";
import indexcss from "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      {<About />}
    </div>
  );
}

export default App;
