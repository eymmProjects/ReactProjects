import React from "react";
import AboutImage from "../assets/photo.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutButtom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          dolores veniam nulla enim officia nobis magnam necessitatibus ex dolor
          aperiam. Dolorem, labore velit enim consectetur fuga vitae minus
          expedita reiciendis!
        </p>
      </div>
    </div>
  );
}

export default About;
