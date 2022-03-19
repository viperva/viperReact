//import React, {useState, useCallback} from "react";
import styles from './Lever.module.css';

import leverUp from '../../images2/leverUp.png';
import leverDown from '../../images2/leverDown.png';

const Lever = (props: any) =>{
    // console.log('url(' + (props.leverImage) + ')');
    // console.log("url(" + props.image + ")");
    //props.isLeverUp ? (setLeverSource('../images2/leverUp.png')) : (setLeverSource('../images2/leverDown.png'));
    //console.log(`leverSource is: url(${leverSource})`);
    //console.log("lever state insinde lever component: "+ props.isLeverUp);

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