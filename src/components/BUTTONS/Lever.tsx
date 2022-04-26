//import React, {useState, useCallback} from "react";
import styles from './Lever.module.css';
import leverUp from '../../images2/leverUp.png';
import leverDown from '../../images2/leverDown.png';

const Lever = (props: any) =>{

    return(
        <button className={styles.leverButton} onClick={props.onClick}>
            <img
                src={props.isLeverUp ? leverUp : leverDown} 
                className={styles.lever}
            />
        </button>
    );

}

export default Lever;