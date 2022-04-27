//import React, {useState, useCallback} from "react";
import styles from './Lever.module.css';
import leverUp from '../../images2/leverUp.png';
import leverDown from '../../images2/leverDown.png';

type LeverProps = {

    onClick : ()=> void,
    isLeverUp : boolean

}

const Lever : React.FC<LeverProps> = ({

    onClick,
    isLeverUp

}) =>{

    return(
        <button className={styles.leverButton} onClick={onClick}>
            <img
                src={isLeverUp ? leverUp : leverDown} 
                className={styles.lever}
            />
        </button>
    );

}

export default Lever;