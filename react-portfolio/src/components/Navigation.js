import React from "react";

function Navigation({ renderedPage, handlePageRender }) {
  return (
    <nav className="links">
      <a
        href="#about-me"
        className="section-links"
        onClick={() => handlePageRender("AboutMe")}
      >
        About Me
      </a>
      <a
        href="#portfolio"
        className="section-links"
        onClick={() => handlePageRender("Portfolio")}
      >
        Portfolio
      </a>
      <a
        href="#contact"
        className="section-links"
        onClick={() => handlePageRender("Contact")}
      >
        Contact
      </a>
      <a
        href="#resume"
        className="section-links"
        onClick={() => handlePageRender("Resume")}
      >
        Resume
      </a>
    </nav>
  );
}

export default Navigation;
