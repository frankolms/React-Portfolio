import React, { useState } from "react";

function Navigation({ renderedPage, handlePageRender }) {
  return (
    <nav className="links">
      <a href="#about-me" onClick={() => handlePageRender("AboutMe")}>
        About Me
      </a>
      <a href="#">Portfolio</a>
      <a href="#contact" onClick={() => handlePageRender("Contact")}>
        Contact
      </a>
      <a href="#">Resume</a>
    </nav>
  );
}

export default Navigation;
