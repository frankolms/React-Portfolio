import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      title: "PokeWiki",
      website: "https://tcunningham203.github.io/Etsy-Pokedex/",
      image: "./images/Screenshot (81).png",
      altText: "PokeWiki Logo",
    },
  ];

  return (
    <div>
      {projects.map((project) => (
        <Project data={project} />
      ))}
    </div>
  );
}

export default Portfolio;
