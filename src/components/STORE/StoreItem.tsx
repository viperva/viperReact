import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./StoreItem.module.css";

type StoreItemProps = {
  title: string;
  img1: string;
  img2: string;
  img3: string;
};

const StoreItem: React.FC<StoreItemProps> = ({ title, img1, img2, img3 }) => {
  const isMobile = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    <>
      {!isMobile && <h1 className={styles.title}>{title}</h1>}
      <div className={styles.itemRow}>
        <div className={styles.itemWrap}>
          <img className={styles.itemPhoto} src={img1} />
        </div>
        {isMobile && <h1 className={styles.title}>{title}</h1>}

        <div className={styles.itemWrap}>
          <img className={styles.itemPhoto} src={img2} />
        </div>

        <div className={styles.itemWrap}>
          <img className={styles.itemPhoto} src={img3} />
        </div>
      </div>
    </>
  );
};

export default StoreItem;
