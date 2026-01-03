import React from "react";
import "./myskills.css";

function Myskills() {


  let  skillList = Myskills.map((item, index) => (
    <div className="skill" key={index}>
      <div className="info">
        <h3>{item.name}</h3>
        <p>{item.level}%</p>
      </div>

      <div className="a">
        <div
          className={`b ${item.name.toLowerCase()}`}
          style={{ width: `${item.level}%` }}
        />
      </div>
    </div>
  ))

  return (
    <div className="container">
      <h1 className="title">My Skills</h1>

      <p className="description">
        Mastering the full spectrum of web technologies, I seamlessly integrate
        front-end and back-end development to create cohesive, high-performing
        applications that deliver exceptional user experiences and meet diverse
        business needs.
      </p>

      <div className="grid">
    
             {skillList}

        <div className="text">
          <h1>WORKS</h1>
        </div>
      </div>
    </div>
  );
}

export default Myskills;
