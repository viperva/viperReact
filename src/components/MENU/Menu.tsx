import React, {useState, useEffect} from "react";
import styles from './Menu.module.css'
import Lever from '../BUTTONS/Lever'
import MenuItem from './MenuItem'
import Modules from '../MODULES/Modules';

import storePhoto from '../../images2/_store.png'
import portfolioPhoto from '../../images2/_portfolio.png'
import aboutPhoto from '../../images2/aboutPhoto.png'
import contactPhoto from '../../images2/contactPhoto.png'
import blogPhoto from '../../images2/_blog.png'
import galleryPhoto from '../../images2/_gallery.png'
//import playgroundPhoto from '../images2/playgroundPhoto.png'
//import Photo from '../images2/Photo.png'

import toBeReplaced from '../../images2/toBeReplaced.png'

const Menu : React.FC = () =>{

    const [lever, setLever] = useState(true);

    const [store, setStore] = useState(false);
    const [blog, setBlog] = useState(false);
    const [gallery, setGallery] = useState(false);

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
        console.log("toggleBlog")
    }

    const toggleGallery = () =>{
        setGallery(!gallery);
    }

    !lever && (dynamicClass3='-100%');
    !lever && (dynamicClass4='0');
    lever && (dynamicClass3='0');
    lever && (dynamicClass4='100%');

    return(
        <React.Fragment>
        <Lever onClick = {toggleLever} isLeverUp = {lever}/>

        <Modules storeHandler={store} toggleStore={toggleStore} blogHandler={blog} toggleBlog={toggleBlog} galleryHandler={gallery} toggleGallery={toggleGallery}/>
        
        <div className={styles.menuRow} style={{visibility: lever ? "visible" : "hidden" , left: dynamicClass3}}>

            <MenuItem photo={storePhoto} onClick={toggleStore} title='STORE'/>

            <MenuItem photo={blogPhoto} onClick={toggleBlog} title='BLOG'/>

            <MenuItem photo={galleryPhoto} onClick={toggleGallery} title='GALLERY'/>

            <MenuItem photo={portfolioPhoto} title='PORTFOLIO'/>

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