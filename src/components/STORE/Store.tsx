/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import styles from "./Store.module.css";
import { CSSTransition } from "react-transition-group";
import title from "../../images2/tytul.gif";
import ben1 from "../../images2/ben1.png";
import ben2 from "../../images2/ben2.png";
import ben3 from "../../images2/ben3.png";
import StoreItem from "./StoreItem";
import arrow from "../../images2/arrow.png";
import Background from "../LAYOUT/Background";
// eslint-disable-next-line no-unused-vars
import Title from "../LAYOUT/Title";
import { useMediaQuery } from "react-responsive";

type StoreProps = {
  storeHandler: boolean;
  toggleStore: () => void;
};

type item = {
  title: string;
  img1: string;
  img2: string;
  img3: string;
};

const Store: React.FC<StoreProps> = ({ storeHandler, toggleStore }) => {
  const items: item[] = [
    {
      title: "benio hoodie",
      img1: ben1,
      img2: ben2,
      img3: ben3,
    },
    {
      title: "TEST POST",
      img1: ben1,
      img2: ben2,
      img3: ben3,
    },
    {
      title: "TEST POST",
      img1: ben1,
      img2: ben2,
      img3: ben3,
    },
  ];
  const isMobile = useMediaQuery({ query: "(orientation: portrait)" });
  const pixelsToMove: number = 100;

  const [left, setLeft] = useState(0);

  const increaseLeft: () => void = () => {
    if (left != 0) {
      setLeft((prevLeft) => prevLeft + pixelsToMove);
    }
  };

  const decreaseLeft: () => void = () => {
    if (left != (items.length - 1) * -pixelsToMove) {
      setLeft((prevLeft) => prevLeft - pixelsToMove);
    }
  };

  return (
    <CSSTransition
      in={storeHandler}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={() => setLeft(0)}
      timeout={600}
      classNames={{
        enter: styles.storeEnter,
        enterActive: styles.storeEnterActive,
        enterDone: styles.storeEnterDone,
        exit: styles.storeExit,
        exitActive: styles.storeExitActive,
        exitDone: styles.storeExitDone,
        appear: styles.storeAppear,
        appearActive: styles.storeAppearActive,
      }}
    >
      <div className={styles.store}>
        <Background hue={72} />
        <button onClick={toggleStore} className={styles.titleButton}>
          <img className={styles.title} src={title} />
        </button>
        {!isMobile && (
          <>
            <button className={styles.next} onClick={increaseLeft}>
              <img style={{ width: "100%" }} src={arrow} />
            </button>
            <button className={styles.previous} onClick={decreaseLeft}>
              <img style={{ width: "100%" }} src={arrow} />
            </button>
            <button className={styles.button} onClick={toggleStore}>
              X
            </button>
          </>
        )}

        {!isMobile ? (
          items.map((item: item, index: number) => (
            <div
              key={index}
              className={styles.container}
              style={{ left: left + index * pixelsToMove + "vw" }}
            >
              <StoreItem
                img1={item.img1}
                img2={item.img2}
                img3={item.img3}
                title={item.title}
              />
            </div>
          ))
        ) : (
          <div className={styles.items}>
            {items.map((item: item, index: number) => (
              <div key={index}>
                <StoreItem
                  img1={item.img1}
                  img2={item.img2}
                  img3={item.img3}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        )}

        <footer className={styles.footer}>Vipervalour&copy; 2022</footer>
      </div>
    </CSSTransition>
  );
};

export default Store;
