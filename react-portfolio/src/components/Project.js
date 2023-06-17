import React from "react";

function Project(props) {
  return (
    <div>
      <div>{props.data.title}</div>
      <img src={props.data.image} alt={props.data.altText} />
    </div>
  );
}

export default Project;
