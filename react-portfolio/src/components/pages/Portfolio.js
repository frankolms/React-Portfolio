import React from "react";
import Project from "../Project";
import { Container, Row } from "react-bootstrap";

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
    {
      title: "Weather Dashboard",
      website: "https://frankolms.github.io/Weather-Dashboard/",
      image: "./images/Screenshot (37).png",
      description:
        "A simple weather dashboard that will show you the current weather and the five day forecast of any city.",
      altText: "Weather Dashboard screenshot",
    },
  ];

  return (
    <Container>
      <Row>
        {projects.map((project) => (
          <Project data={project} />
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
