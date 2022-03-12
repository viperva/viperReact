import React, {useState} from "react";
import styles from './Lever.module.css';


const Lever = (props: any) =>{
    // console.log('url(' + (props.leverImage) + ')');
    // console.log("url(" + props.image + ")");

    return(
        
        <div 
            onClick={props.onClick}
            className={styles.lever} 
            style={{backgroundImage: `url(${props.lever})`}} >
        </div>
    );

}

export default Lever;