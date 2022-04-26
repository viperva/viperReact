import Store from '../STORE/Store';
import Blog from '../BLOG/Blog';
import Gallery from '../GALLERY/Gallery';
//import styles from './Modules.module.css';

const Modules = (props: any) =>{

    return(
        <>
        <Store storeHandler={props.storeHandler} toggleStore={props.toggleStore}/>
        <Blog blogHandler={props.blogHandler} toggleBlog={props.toggleBlog}/>
        <Gallery galleryHandler={props.galleryHandler} toggleGallery={props.toggleGallery}/>
        </>
    );

}

export default Modules;