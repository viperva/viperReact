import styles from './BlogPost.module.css';

const BlogPost = (props: any) =>{

    return(
        <>
        {props.title != "" && <div className={styles.content}>
            <div className={styles.left}>
            <img className={styles.image} src={props.image}/>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{props.title}</h1>
                <p className={styles.text}>
                    {props.text}
                </p>
            </div>
        </div>
    }
    </>
    );

}

export default BlogPost;