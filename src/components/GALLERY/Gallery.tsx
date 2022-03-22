import {useState, useEffect} from 'react';
import styles from './Gallery.module.css';
import {CSSTransition} from 'react-transition-group';
import title from '../../images2/tytul.gif'
import reflektor from '../../images2/reflektor.png';
import GalleryItem from './GalleryItem';

import obraz from '../../images2/obraz1.png';
import obraz2 from '../../images2/obraz2.png';

const Gallery = (props: any) =>{

    const [bottom, setBottom] = useState(0);

    const upBottom = () =>{
        setBottom(prevBottom => prevBottom + 100);
    }

    const downBottom = () =>{
        setBottom(prevBottom => prevBottom - 100);
    }

    return(
        <CSSTransition
        in={props.galleryHandler}
        mountOnEnter={true}
        unmountOnExit={false}
        timeout={1000}
        classNames={{
        enter: styles.galleryEnter,
        enterActive: styles.galleryEnterActive,
        enterDone: styles.galleryEnterDone,
        exit: styles.galleryExit,
        exitActive: styles.galleryExitActive,
        exitDone: styles.galleryExitDone,
        appear: styles.galleryAppear,
        appearActive: styles.galleryAppearActive
        }}>
            
                <div className={styles.gallery}>
                <div className={styles.backdrop}></div>
                    <button onClick={props.toggleGallery} className={styles.titleButton}>
                        <img className={styles.title} src={title} />
                    </button>

                    <button className={styles.button} onClick={props.toggleGallery}>X</button>

                    <button onClick={downBottom} className={styles.previous}> &#8593; </button>
                    <button onClick={upBottom} className={styles.next}> &#8595; </button>

                    <img className={styles.reflektor1} src={reflektor}/>
                    <img className={styles.reflektor2} src={reflektor}/>

                    <div className={styles.container} style={{bottom: bottom + 'vh'}}>
                    <GalleryItem 
                        obraz={obraz}
                        title="TYTUL OBRAZU"
                        desc="Donec lacus mi, vehicula sit amet semper sed, dictum a felis. Suspendisse auctor metus vel ultricies maximus. Vivamus dapibus vel quam molestie sodales. Nam eu mattis arcu. Nullam ac massa sed elit egestas ornare. Etiam et aliquet elit, sit amet iaculis dui. Etiam in mattis nunc. "
                        />
                    </div>
                    
                    <div className={styles.container} style={{bottom: bottom-100 + 'vh'}}>
                    <GalleryItem 
                        obraz={obraz2}
                        title="NAZWA OBRAZA"
                        desc="Nam pellentesque orci at felis pulvinar scelerisque. Sed suscipit enim faucibus lorem facilisis, vitae sollicitudin magna scelerisque. Suspendisse sit amet ipsum quis quam efficitur gravida quis eget lorem. Morbi pellentesque, ligula quis condimentum vehicula, tellus nulla semper sem, eget porta nisl neque et odio. "
                        />
                    </div>
                    
                    <footer className={styles.footer}>Vipervalour&copy; 2022</footer>
                </div>
           
        </CSSTransition>
    );

}

export default Gallery;