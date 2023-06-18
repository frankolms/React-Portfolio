import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap;";

function Project(props) {
  return (
    // <div className="container">
    //   <div className="project-card">
    //     <div>{props.data.title}</div>
    //     <img
    //       className="project-img"
    //       src={props.data.image}
    //       alt={props.data.altText}
    //     />
    //   </div>
    // </div>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.data.image} alt={props.data.altText} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>{props.data.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Project;
