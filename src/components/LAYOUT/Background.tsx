/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Layout.module.css";

type BackgroundProps = {
  hue: number;
  grayscale: number;
  brightness: number;
};

const Background: React.FC<BackgroundProps> = ({
  hue,
  grayscale,
  brightness,
}) => {
  return (
    <div
      className={styles.background}
      {...(hue && { style: { filter: `hue-rotate(${hue}deg)` } })}
      {...(grayscale && { style: { filter: `grayscale(${grayscale}%)` } })}
      {...(brightness && { style: { filter: `brightness(${brightness}%)` } })}
    ></div>
  );
};

export default Background;
