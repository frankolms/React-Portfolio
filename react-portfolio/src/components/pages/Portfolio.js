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
      githubRepo: "https://github.com/frankolms/Etsy-Pokedex",
    },
    {
      title: "100 Famous Castles",
      website: "https://rocky-fortress-11303.herokuapp.com",
      image: "./images/Screenshot (68).png",
      description:
        "An English companion application to use alongside The Japanese Castle Association's guide book.",
      altText: "Map of Japan with website description",
      githubRepo: "https://github.com/frankolms/100-famous-castles",
    },
    {
      title: "Offres D'Art",
      website: "https://nameless-springs-87426-ab7084b2cd1d.herokuapp.com/",
      image: "./images/project 3 logo.PNG",
      description: "Host and sell your artwork!",
      altText: "Offres D'Art logo",
      githubRepo: "https://github.com/Cashew1337/Art-Dealer",
    },
    {
      title: "Weather Dashboard",
      website: "https://frankolms.github.io/Weather-Dashboard/",
      image: "./images/Screenshot (37).png",
      description:
        "A simple weather dashboard that will show you the current weather and the five day forecast of any city.",
      altText: "Weather Dashboard screenshot",
      githubRepo: "https://github.com/frankolms/Weather-Dashboard",
    },
    {
      title: "Daily Planner",
      website: "https://frankolms.github.io/Daily-Planner/",
      image: "./images/Screenshot (35).png",
      description: "Plan out your 9-5 workday in real time!",
      altText: "Daily Planner screenshot",
      githubRepo: "https://github.com/frankolms/Daily-Planner",
    },
    {
      title: "Password Generator",
      website: "https://frankolms.github.io/Password-Generator/",
      image: "./images/Screenshot (32).png",
      description:
        "A password generator that lets you choose what types of characters are included in your password!",
      altText: "Password Generator screenshot",
      githubRepo: "https://github.com/frankolms/Password-Generator",
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
