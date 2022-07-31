import React from "react";
import styles from "./BlogPost.module.css";
// import pin from "../../images2/pin-t.png";
import postnote from "../../images2/postnote-t.png";

type BlogPostProps = {
  image?: string | undefined;
  title?: string;
  text?: string | JSX.Element;
};

const BlogPost: React.FC<BlogPostProps> = ({ image, title, text }) => {
  return (
    <>
      {title && (
        <div className={styles.content}>
          <div className={styles.left}>
            <img className={styles.image} src={image} />
          </div>
          <div className={styles.right}>
            <img className={styles.postnote} src={postnote} />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPost;
