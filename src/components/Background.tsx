import React from "react";
import styles from './Background.module.css'
import title from '../images/tytul.gif'

const Background = () =>{

    return (
        <div className={styles.background}>
            <img className={styles.title} src={title} />
        </div>
    );

}


export default Background;