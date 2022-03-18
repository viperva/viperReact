import React, {useState, useEffect} from "react";
import styles from './Menu.module.css'
import Lever from '../BUTTONS/Lever'
import MenuItem from './MenuItem'

import storePhoto from '../images2/storePhoto.png'
// import storePhotoGif from '../images2/storePhoto.gif'

import portfolioPhoto from '../../images2/portfolioPhoto.png'
// import portfolioPhotoGif from '../images2/portfolioPhoto.gif'

import aboutPhoto from '../../images2/aboutPhoto.png'
// import aboutPhotoGif from '../images2/aboutPhotoGif.gif'

import contactPhoto from '../../images2/contactPhoto.png'
// import contactPhotoGif from '../images2/contactPhotoGif.gif'

import blogPhoto from '../images2/blogPhoto.png'
// import storePhotoGif from '../images2/storePhoto.gif'

import playgroundPhoto from '../images2/playgroundPhoto.png'
// import portfolioPhotoGif from '../images2/portfolioPhoto.gif'

import galleryPhoto from '../images2/galleryPhoto.png'
// import aboutPhotoGif from '../images2/aboutPhotoGif.gif'

import Photo from '../images2/Photo.png'
// import contactPhotoGif from '../images2/contactPhotoGif.gif'
//src/images2/._contactPhoto.png

import toBeReplaced from '../../images2/toBeReplaced.png'

const Menu = () =>{

    const [lever, setLever] = useState(true);

    let dynamicClass = -100;
    let dynamicClass2 = 0;

    const toggleLever = () =>{
        setLever(!lever);
        console.log("changing lever state to: " + lever)
    }

    !lever && (dynamicClass=-100);
    !lever && (dynamicClass2=0);
    lever && (dynamicClass=0);
    lever && (dynamicClass2=100);

    return(
        <React.Fragment>
        <Lever onClick = {toggleLever} isLeverUp = {lever}/>

        <div className={styles.menuRow} style={{left: dynamicClass +'%'}}>

            <MenuItem photo={toBeReplaced} title='STORE'></MenuItem>

            <MenuItem photo={toBeReplaced} title='BLOG'></MenuItem>

            <MenuItem photo={toBeReplaced} title='GALLERY'></MenuItem>

            <MenuItem photo={toBeReplaced} title='PORTFOLIO'></MenuItem>

        </div>

        <div className={styles.menuRow} style={{left: dynamicClass2 +'%'}}>

            <MenuItem photo={aboutPhoto} title='ABOUT ME'></MenuItem>

            <MenuItem photo={contactPhoto} title='CONTACT'></MenuItem>
                    
            <MenuItem photo={toBeReplaced} title='PLAYGROUND'></MenuItem>
                    
            <MenuItem photo={toBeReplaced} title='DONT CLICK!'></MenuItem>

        </div>

        </React.Fragment>
    );

}

export default Menu;