import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Background from "./components/LAYOUT/Background";
import Title from "./components/LAYOUT/Title";
import Footer from "./components/LAYOUT/Footer";
import Menu from "./components/MENU/Menu";

ReactDOM.render(
  <React.Fragment>
    <Background hue={0} brightness={100} grayscale={0} />
    <Title />
    <Menu />
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);

reportWebVitals();
