/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import styles from "./Blog.module.css";
import { CSSTransition } from "react-transition-group";
import title from "../../images2/tytul.gif";
import BlogPost from "./BlogPost";
import art1img from "../../images2/viper2.png";
import art2img from "../../images2/obraz1.png";
import test from "../../images2/madonna.png";
import bookFront from "../../images2/bookFront.png";
import book from "../../images2/book.png";
import bookBack from "../../images2/bookBack.png";
import arrow from "../../images2/arrow.png";
import Background from "../LAYOUT/Background";
import Footer from "../LAYOUT/Footer";
import { useMediaQuery } from "react-responsive";

type BlogProps = {
  blogHandler: boolean;
  toggleBlog: () => void;
};

type post = {
  title?: string;
  text?: string;
  image?: string | undefined;
};

const Blog: React.FC<BlogProps> = ({ blogHandler, toggleBlog }) => {
  const posts: post[] = [
    {
      title: "TEST POST",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique bibendum massa sit amet euismod. Cras nec sapien gravida, bibendum nisl eget, sodales sem. Mauris nec interdum dolor. Donec ac rhoncus arcu. Sed ac varius tortor. Phasellus ornare sapien id libero rutrum, sed volutpat massa tristique. Integer gravida est sed sem sagittis, a faucibus lacus iaculis. Phasellus eros ante, ultrices id mi non, vehicula pulvinar ipsum. Nam quis dui non velit aliquam ornare. Nunc imperdiet egestas odio, sed malesuada tortor ullamcorper tempus. Aliquam mollis tellus nibh, eu elementum mauris malesuada id. ",
      image: art1img,
    },
    {
      title: "TEST POST",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique bibendum massa sit amet euismod. Cras nec sapien gravida, bibendum nisl eget, sodales sem. Mauris nec interdum dolor. Donec ac rhoncus arcu. Sed ac varius tortor. Phasellus ornare sapien id libero rutrum, sed volutpat massa tristique. Integer gravida est sed sem sagittis, a faucibus lacus iaculis. Phasellus eros ante, ultrices id mi non, vehicula pulvinar ipsum. Nam quis dui non velit aliquam ornare. Nunc imperdiet egestas odio, sed malesuada tortor ullamcorper tempus. Aliquam mollis tellus nibh, eu elementum mauris malesuada id. ",
      image: test,
    },
    {
      title: "TEST POST2",
      text: "Donec ac rhoncus arcu. Sed ac varius tortor. Phasellus ornare sapien id libero rutrum, sed volutpat massa tristique. Integer gravida est sed sem sagittis, a faucibus lacus iaculis. Phasellus eros ante, ultrices id mi non, vehicula pulvinar ipsum. Nam quis dui non velit aliquam ornare. Nunc imperdiet egestas odio, sed malesuada tortor ullamcorper tempus. Aliquam mollis tellus nibh, eu elementum mauris malesuada id. ",
      image: art2img,
    },
  ];
  const isMobile = useMediaQuery({ query: "(orientation: portrait)" });
  const [postId, setPostId] = useState(0);

  const [bookImage, setBookImage] = useState(bookFront);

  const nextPost: () => void = () => {
    if (postId < posts.length - 1) {
      setPostId((prevPostId) => prevPostId + 1);
      setBookImage(book);
      if (postId == posts.length - 2) setBookImage(bookBack);
    }
  };

  const prevPost: () => void = () => {
    if (postId > 0) {
      setPostId((prevPostId) => prevPostId - 1);
      setBookImage(book);
      if (postId == 1) setBookImage(bookFront);
    }
  };

  return (
    <CSSTransition
      in={blogHandler}
      mountOnEnter={true}
      unmountOnExit={false}
      timeout={1200}
      onExited={() => setPostId(0)}
      onEnter={() => setBookImage(bookFront)}
      classNames={{
        enter: styles.blogEnter,
        enterActive: styles.blogEnterActive,
        enterDone: styles.blogEnterDone,
        exit: styles.blogExit,
        exitActive: styles.blogExitActive,
        exitDone: styles.blogExitDone,
        appear: styles.blogAppear,
        appearActive: styles.blogAppearActive,
      }}
    >
      <div className={styles.blog}>
        <Background hue={232} />
        <button onClick={toggleBlog} className={styles.titleButton}>
          <img className={styles.title} src={title} />
        </button>
        {!isMobile && (
          <>
            <button className={styles.button} onClick={toggleBlog}>
              X
            </button>

            <button className={styles.next} onClick={prevPost}>
              <img style={{ width: "100%" }} src={arrow} />
            </button>
            <button className={styles.previous} onClick={nextPost}>
              <img style={{ width: "100%" }} src={arrow} />
            </button>
          </>
        )}

        {/* <img className={styles.book} src={bookImage} /> */}

        {isMobile ? (
          <div className={styles.items}>
            {posts.map((post: post, index: number) => (
              <div key={index}>
                <BlogPost
                  title={post.title}
                  text={post.text}
                  image={post.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.post}>
            <BlogPost
              title={posts[postId].title}
              text={posts[postId].text}
              image={posts[postId].image}
            />
          </div>
        )}

        <Footer />
      </div>
    </CSSTransition>
  );
};

export default Blog;
