import {useState, useEffect} from 'react';
import styles from './Blog.module.css';
import {CSSTransition} from 'react-transition-group';
import title from '../../images2/tytul.gif'
import BlogPost from './BlogPost';
import art1img from '../../images2/viper2.png';

const Blog = (props: any) =>{

    return(
        <CSSTransition
        in={props.blogHandler}
        mountOnEnter={true}
        unmountOnExit={false}
        timeout={1200}
        classNames={{
        enter: styles.blogEnter,
        enterActive: styles.blogEnterActive,
        enterDone: styles.blogEnterDone,
        exit: styles.blogExit,
        exitActive: styles.blogExitActive,
        exitDone: styles.blogExitDone,
        appear: styles.blogAppear,
        appearActive: styles.blogAppearActive
        }}>
            <div className={styles.blog}>
            <div className={styles.backdrop}></div>
                <button onClick={props.toggleBlog} className={styles.titleButton}>
                    <img className={styles.title} src={title} />
                </button>

                <button className={styles.button} onClick={props.toggleBlog}>X</button>
                <button className={styles.next}> &#8592; </button>
                <button className={styles.previous}> &#8594; </button>
                
                <div className={styles.book}>
                    <BlogPost
                        title={"TEST POST"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique bibendum massa sit amet euismod. Cras nec sapien gravida, bibendum nisl eget, sodales sem. Mauris nec interdum dolor. Donec ac rhoncus arcu. Sed ac varius tortor. Phasellus ornare sapien id libero rutrum, sed volutpat massa tristique. Integer gravida est sed sem sagittis, a faucibus lacus iaculis. Phasellus eros ante, ultrices id mi non, vehicula pulvinar ipsum. Nam quis dui non velit aliquam ornare. Nunc imperdiet egestas odio, sed malesuada tortor ullamcorper tempus. Aliquam mollis tellus nibh, eu elementum mauris malesuada id. "}
                        image={art1img}
                    />
                </div>

                <footer className={styles.footer}>Vipervalour&copy; 2022</footer>
            </div>
            
        </CSSTransition>
    );

}

export default Blog;