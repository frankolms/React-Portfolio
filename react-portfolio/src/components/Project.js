import React from "react";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap;";

function Project(props) {
  return (
    // <div className="card" style={{width: "18rem"}}>
    //   <div className="project-card">
    //     <div>{props.data.title}</div>
    //     <img
    //       className="project-img"
    //       src={props.data.image}
    //       alt={props.data.altText}
    //     />
    //   </div>
    // </div>

    // <Card style={{ width: "18rem" }} className="project-card">
    //   <Card.Img variant="top" src={props.data.image} alt={props.data.altText} />
    //   <Card.Body>
    //     <Card.Title>{props.data.title}</Card.Title>
    //     <Card.Text>{props.data.description}</Card.Text>
    //   </Card.Body>
    // </Card>

    <div className="row row-cols-2 row-cols-md-2 g-4">
      <div className="col-sm-6">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={props.data.image}
            className="card-img-top"
            alt={props.data.altText}
          />
          <div className="card-body">
            <h5 className="card-title">{props.data.title}</h5>
            <p className="card-text">{props.data.description}</p>
            <a href="#" className="btn btn-primary">
              Check it out!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
