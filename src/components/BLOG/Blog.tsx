import {useState, useEffect} from 'react';
import styles from './Blog.module.css';
import {CSSTransition} from 'react-transition-group';
import title from '../../images2/tytul.gif'

const Blog = (props: any) =>{

    const [blog, setBlog] = useState(props.blogHandler);

    const toggleBlog = () =>{
        setBlog(!blog);
    }
    useEffect(() => {
        toggleBlog();
        console.log("echo")
    }, [props.blogHandler])

    return(
        <CSSTransition
        in={blog}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={5000}
        classNames={{
        enter: styles.blogEnter,
        enterActive: styles.blogEnterActive,
        enterDone: styles.blogEnterDone,
        exit: styles.blogExit,
        exitActive: styles.blogExitActive,
        exitDone: styles.blogExitDone,
        }}>
            <div className={styles.blog}>
            <div className={styles.backdrop}></div>
                <button onClick={toggleBlog} className={styles.titleButton}>
                    <img className={styles.title} src={title} />
                </button>

                <button className={styles.button} onClick={toggleBlog}>X</button>
                
                <footer className={styles.footer}>Vipervalour&copy; 2022</footer>
            </div>
            
        </CSSTransition>
    );

}

export default Blog;