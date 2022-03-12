import React, {useState, useEffect} from "react";
import styles from './Menu.module.css'
import Lever from './Lever'

import storePhoto from '../images2/storePhoto.png'
// import storePhotoGif from '../images2/storePhoto.gif'

import portfolioPhoto from '../images2/portfolioPhoto.png'
// import portfolioPhotoGif from '../images2/portfolioPhoto.gif'

import aboutPhoto from '../images2/aboutPhoto.png'
// import aboutPhotoGif from '../images2/aboutPhotoGif.gif'

import contactPhoto from '../images2/contactPhoto.png'
// import contactPhotoGif from '../images2/contactPhotoGif.gif'

import leverUp from '../images/leverUp.png';
import leverDown from '../images/leverDown.png';

const Menu = () =>{

    const [lever, setLever] = useState(true);

    const [leverImage, setLeverImage] = useState(leverDown);

    let dynamicClass = -100;
    let dynamicClass2 = 0;

    const toggleLever = () =>{
        setLever(!lever);
    }

    useEffect(() => {
        if(lever){
            setLeverImage(leverUp);
        }else{
            setLeverImage(leverDown);
        }
    }, [lever]);

    return(
        <React.Fragment>
        <Lever onClick = {toggleLever} lever = {leverImage}/>

        {!lever && (dynamicClass=-101)}
        {!lever && (dynamicClass2=0)}
        {lever && (dynamicClass=0)}
        {lever && (dynamicClass2=101)}

        <div className={styles.container}>
        <div className={styles.menuRow} style={{left: dynamicClass +'%'}}>

            <div className={styles.menuItem}>
                <img className={styles.menuItemPhoto}src={storePhoto} />
                <h1 className={styles.menuItemTitle}>STORE</h1>
            </div>

            <div className={styles.menuItem}>
                <img className={styles.menuItemPhoto} src={portfolioPhoto} />
                <h1 className={styles.menuItemTitle}>PORTFOLIO</h1>
            </div>

            <div className={styles.menuItem}>
                <img className={styles.menuItemPhoto} src={aboutPhoto} />
                <h1 className={styles.menuItemTitle}>ABOUT ME</h1>
            </div>

            <div className={styles.menuItem}>
                <img className={styles.menuItemPhoto} src={contactPhoto} />
                <h1 className={styles.menuItemTitle}>CONTACT</h1>
            </div>
        </div>
        </div>

        <div className={styles.container}>
        <div className={styles.menuRow} style={{left: dynamicClass2 +'%'}}>

            <div className={styles.menuItem}>
                <img className={styles.menuItemPhoto}src={storePhoto} />
                <h1 className={styles.menuItemTitle}>STORE</h1>
            </div>

            <div className={styles.menuItem}>
                <img className={styles.menuItemPhoto} src={portfolioPhoto} />
                <h1 className={styles.menuItemTitle}>PORTFOLIO</h1>
            </div>

            <div className={styles.menuItem}>
                <img className={styles.menuItemPhoto} src={aboutPhoto} />
                <h1 className={styles.menuItemTitle}>ABOUT ME</h1>
            </div>

            <div className={styles.menuItem}>
                <img className={styles.menuItemPhoto} src={contactPhoto} />
                <h1 className={styles.menuItemTitle}>CONTACT</h1>
            </div>
        </div>
        </div>
        </React.Fragment>
    );

}

export default Menu;