import React from "react";
import styles from "./GalleryItem.module.css";
import chain from "../../images2/lancuch.png";
import sign from "../../images2/sign-t.png";
import { useMediaQuery } from "react-responsive";

type GalleryItemProps = {
  img: string;
  title: string;
  desc: string;
};

const GalleryItem: React.FC<GalleryItemProps> = ({ img, title, desc }) => {
  const isMobile = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    <div className={styles.item}>
      <img className={styles.chainUp} src={chain} />
      <img className={styles.chainDown} src={chain} />
      <img className={styles.painting} src={img} />
      {isMobile && (
        <>
          <img className={styles.sign} src={sign} />
          <h1 className={styles.title}>{title}</h1>
        </>
      )}
      {!isMobile && (
        <div className={styles.description}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{desc}</p>
        </div>
      )}
    </div>
  );
};

export default GalleryItem;
