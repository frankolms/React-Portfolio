import React from "react";

function Navigation({ renderedPage, handlePageRender }) {
  return (
    <nav className="links">
      <a href="#about-me" onClick={() => handlePageRender("AboutMe")}>
        About Me
      </a>
      <a href="#portfolio" onClick={() => handlePageRender("Portfolio")}>
        Portfolio
      </a>
      <a href="#contact" onClick={() => handlePageRender("Contact")}>
        Contact
      </a>
      <a href="#resume" onClick={() => handlePageRender("Resume")}>
        Resume
      </a>
    </nav>
  );
}

export default Navigation;
