import React from "react";
import "./myskills.css";

function Skills() {
  let myskills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node", level: 70 },
    { name: "Python", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "TypeScript", level: 55 },
  ];

  return (
    <div className="container">
      <h1 className="title">My Skills</h1>

      <p className="description">
        Mastering the full spectrum of web technologies, I seamlessly integrate
        front-end and back-end development to create cohesive, high-performing
        applications.
      </p>

      <div className="grid">
        {myskills.map((item, index) => (
          <div className="skill" key={index}>
            <div className="info">
              <h3 className="skill-name">
                <span className="skill-icon">{item.icon}</span>
                {item.name}
              </h3>
              <p>{item.level}%</p>
            </div>

            <div className="a">
              <div
                className={`b ${item.name.toLowerCase()}`}
                style={{ width: `${item.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
