// import React from 'react'
import "./Skills.css";
import html from "../../Images/html.png";
import css from "../../Images/css.png";
import js from "../../Images/java-scriptW.png";
import react from "../../Images/reactW.png";

function Skills() {
  return (
    <div className="skills">
      <div className="skills--images lg:ml-56 xl:ml-80 2xl:ml-96">
        <img
          src={html}
          className="html w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
        />
        <img
          src={css}
          className="css w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
        />
        <img
          src={js}
          className=" javascript w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
        />
        <img
          src={react}
          className="react w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
        />
      </div>
    </div>
  );
}

export default Skills;
