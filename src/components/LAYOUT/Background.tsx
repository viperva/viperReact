import React from "react";
import styles from "./Layout.module.css";

type BackgroundProps = {
  hue: number;
};

const Background: React.FC<BackgroundProps> = ({ hue }) => {
  return (
    <div
      className={styles.background}
      style={{ filter: `hue-rotate(${hue}deg)` }}
    ></div>
  );
};

export default Background;
