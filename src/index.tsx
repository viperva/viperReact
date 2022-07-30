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
    <Background />
    <Title />
    <Menu />
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);

reportWebVitals();
