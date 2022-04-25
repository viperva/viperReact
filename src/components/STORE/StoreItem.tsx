import {useState, useRef, useEffect} from 'react';
import styles from './StoreItem.module.css';


const StoreItem = (props: any) =>{

    return(
            <>
                <h1 className={styles.title}>{props.title}</h1>
                <div className={styles.itemRow}>

                    <div className={styles.itemWrap}>
                    <img className={styles.itemPhoto} src={props.img1}/>
                    </div>

                    <div className={styles.itemWrap}>
                    <img className={styles.itemPhoto} src={props.img2} id="center"/>
                    </div>

                    <div className={styles.itemWrap}>
                    <img className={styles.itemPhoto} src={props.img3}/>
                    </div>

                </div>
            </>
    );

}

export default StoreItem;