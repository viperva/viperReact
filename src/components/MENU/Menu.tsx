import React, {useState, useEffect} from "react";
import styles from './Menu.module.css'
import Lever from '../BUTTONS/Lever'
import MenuItem from './MenuItem'
import Modules from '../MODULES/Modules';

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

    const [store, setStore] = useState(false);
    const [blog, setBlog] = useState(false);

    let dynamicClass = 'visible';
    let dynamicClass2 = 'hidden';
    let dynamicClass3 = '0';
    let dynamicClass4 = '100%';

    const toggleLever = () =>{
        setLever(!lever);
    }

    const toggleStore = () =>{
        setStore(!store);
    }

    const toggleBlog = () =>{
        setBlog(!blog);
    }

    !lever && (dynamicClass="hidden");
    !lever && (dynamicClass2='visible');
    lever && (dynamicClass='visible');
    lever && (dynamicClass2='hidden');

    !lever && (dynamicClass3='-100%');
    !lever && (dynamicClass4='0');
    lever && (dynamicClass3='0');
    lever && (dynamicClass4='100%');

    return(
        <React.Fragment>
        <Lever onClick = {toggleLever} isLeverUp = {lever}/>

        <Modules storeHandler={store} blogHandler={blog}/>
        
        <div className={styles.menuRow} style={{visibility: lever ? "visible" : "hidden" , left: dynamicClass3}}>

            <MenuItem photo={toBeReplaced} onClick={toggleStore} title='STORE'/>

            <MenuItem photo={toBeReplaced} onClick={toggleBlog} title='BLOG'/>

            <MenuItem photo={toBeReplaced} title='GALLERY'/>

            <MenuItem photo={toBeReplaced} title='PORTFOLIO'/>

        </div>
        
        <div className={styles.menuRow} style={{visibility: lever ? "hidden" : "visible" , left: dynamicClass4}}>

            <MenuItem photo={aboutPhoto} title='ABOUT ME'/>

            <MenuItem photo={contactPhoto} title='CONTACT'/>
                    
            <MenuItem photo={toBeReplaced} title='PLAYGROUND'/>
                    
            <MenuItem photo={toBeReplaced} title='DONT CLICK!'/>

        </div>

        </React.Fragment>
    );

}

export default Menu;