/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import styles from "./Contact.module.css";
import { CSSTransition } from "react-transition-group";
import title from "../../images2/tytul.gif";
import ben1 from "../../images2/ben1.png";
import ben2 from "../../images2/ben2.png";
import ben3 from "../../images2/ben3.png";
import StoreItem from "../STORE/StoreItem";
import arrow from "../../images2/arrow.png";
import Background from "../LAYOUT/Background";
import Title from "../LAYOUT/Title";
import { useMediaQuery } from "react-responsive";
import Footer from "../LAYOUT/Footer";

type ContactProps = {
  contactHandler: boolean;
  toggleContact: () => void;
};

const Store: React.FC<ContactProps> = ({ contactHandler, toggleContact }) => {
  const isMobile = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <CSSTransition
      in={contactHandler}
      mountOnEnter={true}
      unmountOnExit={true}
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
        <Background hue={190} brightness={100} grayscale={0} />
        <button onClick={toggleContact} className={styles.titleButton}>
          <img className={styles.title} src={title} />
        </button>
        <Footer />
      </div>
    </CSSTransition>
  );
};

export default Store;
