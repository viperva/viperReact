import React from "react";
import styles from './Background.module.css'
import title from '../../images2/tytul.gif'

const Background = () =>{

    return (
        <div className={styles.background}>
            <button className={styles.titleButton}>
            <img className={styles.title} src={title} />
            </button>
            <footer className={styles.footer}>Vipervalour&copy; 2022</footer>
        </div>
    );

}


export default Background;