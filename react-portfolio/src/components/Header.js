import React from "react";
import Navigation from "./Navigation";

function Header(props) {
  return (
    <header>
      <div className="my-name">
        <h1>Frank Olmsted</h1>
      </div>
      <Navigation
        renderedPage={props.renderedPage}
        handlePageRender={props.handlePageRender}
      />
    </header>
  );
}

export default Header;
