import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import blogPhoto from "../../images2/_blog.png";
import galleryPhoto from "../../images2/_gallery.png";
import portfolioPhoto from "../../images2/_portfolio.png";
import storePhoto from "../../images2/_store.png";
import aboutPhoto from "../../images2/aboutPhoto.png";
import contactPhoto from "../../images2/contact.png";
import toBeReplaced from "../../images2/toBeReplaced.png";
import Lever from "../BUTTONS/Lever";
import Modules from "../MODULES/Modules";
import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";

// import playgroundPhoto from '../images2/playgroundPhoto.png'
// import Photo from '../images2/Photo.png'

const Menu: React.FC = () => {
  const [lever, setLever] = useState(true);
  const [store, setStore] = useState(false);
  const [blog, setBlog] = useState(false);
  const [gallery, setGallery] = useState(false);
  const isMobile = useMediaQuery({ query: "(orientation: portrait)" });

  let dynamicClass3: string = "0";
  let dynamicClass4: string = "100%";

  const toggleLever: () => void = () => {
    setLever(!lever);
  };

  const toggleStore: () => void = () => {
    setStore(!store);
  };

  const toggleBlog: () => void = () => {
    setBlog(!blog);
    console.log("toggleBlog");
  };

  const toggleGallery: () => void = () => {
    setGallery(!gallery);
  };

  !lever && (dynamicClass3 = "-100%");
  !lever && (dynamicClass4 = "0");
  lever && (dynamicClass3 = "0");
  lever && (dynamicClass4 = "100%");

  return (
    <React.Fragment>
      <Modules
        storeHandler={store}
        toggleStore={toggleStore}
        blogHandler={blog}
        toggleBlog={toggleBlog}
        galleryHandler={gallery}
        toggleGallery={toggleGallery}
      />

      {isMobile && (
        <div className={styles.menuColumn}>
          <MenuItem photo={storePhoto} onClick={toggleStore} title="STORE" />

          <MenuItem photo={blogPhoto} onClick={toggleBlog} title="BLOG" />

          <MenuItem
            photo={galleryPhoto}
            onClick={toggleGallery}
            title="GALLERY"
          />

          <MenuItem photo={contactPhoto} title="CONTACT" />

          <MenuItem photo={aboutPhoto} title="ABOUT ME" />

          <MenuItem photo={portfolioPhoto} title="PORTFOLIO" />
        </div>
      )}

      {!isMobile && (
        <React.Fragment>
          <Lever onClick={toggleLever} isLeverUp={lever} />

          <div
            className={styles.menuRow}
            style={{
              visibility: lever ? "visible" : "hidden",
              left: dynamicClass3,
            }}
          >
            <MenuItem photo={storePhoto} onClick={toggleStore} title="STORE" />

            <MenuItem photo={blogPhoto} onClick={toggleBlog} title="BLOG" />

            <MenuItem
              photo={galleryPhoto}
              onClick={toggleGallery}
              title="GALLERY"
            />

            <MenuItem photo={contactPhoto} title="CONTACT" />
          </div>

          <div
            className={styles.menuRow}
            style={{
              visibility: lever ? "hidden" : "visible",
              left: dynamicClass4,
            }}
          >
            <MenuItem photo={aboutPhoto} title="ABOUT ME" />

            <MenuItem photo={portfolioPhoto} title="PORTFOLIO" />

            <MenuItem photo={toBeReplaced} title="PLAYGROUND" />

            <MenuItem photo={toBeReplaced} title="DONT CLICK!" />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Menu;
