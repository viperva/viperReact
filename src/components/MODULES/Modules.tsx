import React from "react";
import Store from "../STORE/Store";
import Blog from "../BLOG/Blog";
import Gallery from "../GALLERY/Gallery";
import Contact from "../CONTACT/Contact";
//import styles from './Modules.module.css';

type ModulesProps = {
  storeHandler: boolean;
  toggleStore: () => void;

  blogHandler: boolean;
  toggleBlog: () => void;

  galleryHandler: boolean;
  toggleGallery: () => void;

  contactHandler: boolean;
  toggleContact: () => void;
};

const Modules: React.FC<ModulesProps> = ({
  storeHandler,
  toggleStore,
  blogHandler,
  toggleBlog,
  galleryHandler,
  toggleGallery,
  contactHandler,
  toggleContact,
}) => {
  return (
    <>
      <Store storeHandler={storeHandler} toggleStore={toggleStore} />
      <Blog blogHandler={blogHandler} toggleBlog={toggleBlog} />
      <Gallery galleryHandler={galleryHandler} toggleGallery={toggleGallery} />
      <Contact contactHandler={contactHandler} toggleContact={toggleContact} />
    </>
  );
};

export default Modules;
