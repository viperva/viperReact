import React, {useState} from "react";
import styles from './MenuItem.module.css';


const MenuItem = (props: any) =>{

    return(
        <div className={styles.menuItem}>
                <img className={styles.menuItemPhoto}src={props.photo}/>
                <h1 className={styles.menuItemTitle}>{props.title}</h1>
            </div>
    );

}

export default MenuItem;