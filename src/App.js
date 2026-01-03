import React from "react";
import Myskills from "./components/Myskills";
import "./App.css";

function App() {
  let skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85},
    { name: "JavaScript", level: 75 },
    { name: "React", level: 77 },
    { name: "MUI", level: 98 },
    { name: "Angular", level: 65 },
    { name: "Node", level:85 },
    { name: "Express", level: 90},
    { name: "MongoDB", level: 92 },
    { name: "Java", level: 85 },
  ];

  return (
    <div className="container">
      <Myskills skills={skills} />
    </div>
  );
}

export default App;
