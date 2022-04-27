import styles from './BlogPost.module.css';

type BlogPostProps = {

    image? : string | undefined,
    title : string,
    text : string

}

const BlogPost : React.FC<BlogPostProps> = ({

    image,
    title,
    text

}) =>{

    return(
        <>
        {title != "" && <div className={styles.content}>
            <div className={styles.left}>
            <img className={styles.image} src={image}/>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.text}>
                    {text}
                </p>
            </div>
        </div>
    }
    </>
    );

}

export default BlogPost;