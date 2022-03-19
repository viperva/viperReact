import {useState, useRef, useEffect} from 'react';
import styles from './StoreItem.module.css';


const StoreItem = (props: any) =>{

    return(
            <>
                <h1 className={styles.title}>{props.title}</h1>
                <div className={styles.itemRow}>
                    <img className={styles.itemPhoto} src={props.img1}/>
                    {/* <div className={styles.wrapper}> */}
                    <img className={styles.itemPhotoMain} src={props.img2} id="center"/>
                    {/* </div> */}
                    <img className={styles.itemPhoto} src={props.img3}/>
                </div>
            </>
    );

}

export default StoreItem;