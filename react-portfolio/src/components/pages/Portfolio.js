import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      title: "PokeWiki",
      website: "https://tcunningham203.github.io/Etsy-Pokedex/",
      image: "./images/Screenshot (81).png",
      description:
        "A quick and easy to use pokedex with links to wikipedia for each pokemon for more information.",
      altText: "PokeWiki Logo",
    },
    {
      title: "100 Famous Castles",
      website: "https://rocky-fortress-11303.herokuapp.com",
      image: "./images/Screenshot (68).png",
      description:
        "An English companion application to use alongside The Japanese Castle Association's guide book.",
      altText: "Map of Japan with website description",
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
