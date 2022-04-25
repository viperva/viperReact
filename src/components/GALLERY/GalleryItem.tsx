import {useState} from 'react';
import styles from './GalleryItem.module.css';
import chain from '../../images2/lancuch.png';

const GalleryItem = (props: any) =>{

    return(
        <>
        <img className={styles.lancuchUp} src={chain}></img>
        <img className={styles.lancuchDown} src={chain}></img>
        <img className={styles.obraz} src={props.img}></img>
        <div className={styles.description}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.text}>{props.desc}</p>
        </div>
        </>
    );

}

export default GalleryItem;