import React from "react";
import NavBar from "./NavBar"; // Assuming the component file is named NavBar.tsx
import About from "./about";
import indexcss from "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      {/* Other content of your application */}
      <About />
    </div>
  );
}

export default App;
