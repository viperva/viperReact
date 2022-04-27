import Store from '../STORE/Store';
import Blog from '../BLOG/Blog';
import Gallery from '../GALLERY/Gallery';
//import styles from './Modules.module.css';

type ModulesProps = {

    storeHandler : boolean,
    toggleStore : ()=> void,
    
    blogHandler : boolean,
    toggleBlog : ()=> void,

    galleryHandler : boolean,
    toggleGallery : ()=> void,

}

const Modules : React.FC<ModulesProps> = ({

    storeHandler,
    toggleStore,
    blogHandler,
    toggleBlog,
    galleryHandler,
    toggleGallery,

}) =>{

    return(
        <>
        <Store storeHandler={storeHandler} toggleStore={toggleStore}/>
        <Blog blogHandler={blogHandler} toggleBlog={toggleBlog}/>
        <Gallery galleryHandler={galleryHandler} toggleGallery={toggleGallery}/>
        </>
    );

}

export default Modules;