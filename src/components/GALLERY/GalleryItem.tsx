import {useState} from 'react';
import styles from './GalleryItem.module.css';
import lancuch from '../../images2/lancuch.png';

const GalleryItem = (props: any) =>{

    return(
        <>
        <img className={styles.lancuchUp} src={lancuch}></img>
        <img className={styles.lancuchDown} src={lancuch}></img>
        <img className={styles.obraz} src={props.obraz}></img>
        <div className={styles.description}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.text}>{props.desc}</p>
        </div>
        </>
    );

}

export default GalleryItem;