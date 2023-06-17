import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [renderedPage, setRenderedPage] = useState("AboutMe");

  const renderPage = () => {
    if (renderedPage === "AboutMe") {
      return <AboutMe />;
    }

    if (renderedPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageRender = (page) => setRenderedPage(page);

  return (
    <div>
      <Header renderedPage={renderedPage} handlePageRender={handlePageRender} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
