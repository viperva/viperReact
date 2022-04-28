import styles from './GalleryItem.module.css';
import chain from '../../images2/lancuch.png';

type GalleryItemProps = {

    img : string,
    title : string,
    desc : string

}

const GalleryItem : React.FC<GalleryItemProps> = ({

    img,
    title,
    desc

}) =>{

    return(
        <>
        <img className={styles.chainUp} src={chain}/>
        <img className={styles.chainDown} src={chain}/>
        <img className={styles.painting} src={img}/>
        <div className={styles.description}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{desc}</p>
        </div>
        </>
    );

}

export default GalleryItem;