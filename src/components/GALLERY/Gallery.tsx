import {useState, useEffect, KeyboardEvent} from 'react';
import styles from './Gallery.module.css';
import {CSSTransition} from 'react-transition-group';
import title from '../../images2/tytul.gif'
import light from '../../images2/reflektor.png';
import GalleryItem from './GalleryItem';

import obraz from '../../images2/obraz1.png';
import obraz2 from '../../images2/obraz2.png';
import madonna from '../../images2/madonna.png';
import chrystus from '../../images2/chrystus.png';
import babel from '../../images2/babel.png';

const Gallery = (props: any) =>{

    const paintings: {[index: string]:any} = [

        {
            title : "babel",
            img : babel,
            desc : "Nam pellentesque orci at felis pulvinar scelerisque. Sed suscipit enim faucibus lorem facilisis, vitae sollicitudin magna scelerisque. Suspendisse sit amet ipsum quis quam efficitur gravida quis eget lorem. Morbi pellentesque, ligula quis condimentum vehicula, tellus nulla semper sem, eget porta nisl neque et odio. "
        },
        {
            title : "madonna",
            img : madonna,
            desc : "Nam pellentesque orci at felis pulvinar scelerisque. Sed suscipit enim faucibus lorem facilisis, vitae sollicitudin magna scelerisque. Suspendisse sit amet ipsum quis quam efficitur gravida quis eget lorem. Morbi pellentesque, ligula quis condimentum vehicula, tellus nulla semper sem, eget porta nisl neque et odio. "
        },
        {
            title : "salvator mundi",
            img : chrystus,
            desc : "Nam pellentesque orci at felis pulvinar scelerisque. Sed suscipit enim faucibus lorem facilisis, vitae sollicitudin magna scelerisque. Suspendisse sit amet ipsum quis quam efficitur gravida quis eget lorem. Morbi pellentesque, ligula quis condimentum vehicula, tellus nulla semper sem, eget porta nisl neque et odio. "
        },
        {
            title : "tytul obrazu",
            img : obraz,
            desc : "Donec lacus mi, vehicula sit amet semper sed, dictum a felis. Suspendisse auctor metus vel ultricies maximus. Vivamus dapibus vel quam molestie sodales. Nam eu mattis arcu. Nullam ac massa sed elit egestas ornare. Etiam et aliquet elit, sit amet iaculis dui. Etiam in mattis nunc. "
        },
        {
            title : "nazwa malunku",
            img : obraz2,
            desc : "Nam pellentesque orci at felis pulvinar scelerisque. Sed suscipit enim faucibus lorem facilisis, vitae sollicitudin magna scelerisque. Suspendisse sit amet ipsum quis quam efficitur gravida quis eget lorem. Morbi pellentesque, ligula quis condimentum vehicula, tellus nulla semper sem, eget porta nisl neque et odio. "
        },
        

    ]; 

    const [bottom, setBottom] = useState(0);

    const upBottom = () =>{
        if(bottom != (paintings.length-1)*100)
        setBottom(prevBottom => prevBottom + 100);
    }

    const downBottom = () =>{
        if(bottom != 0){
            setBottom(prevBottom => prevBottom - 100);
        }
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

                    <img className={styles.light1} src={light}/>
                    <img className={styles.light2} src={light}/>

                    {/* <div className={styles.container} style={{bottom: bottom + 'vh'}}>
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
                    </div> */}

                    {paintings.map((painting :typeof paintings, index:number) => <div className={styles.container} style={{bottom: bottom-(index*100) + 'vh'}}> <GalleryItem
                                    title={paintings[index].title} 
                                    img={paintings[index].img}
                                    desc={paintings[index].desc}
                                    /> </div>)}
                    
                    <footer className={styles.footer}>Vipervalour&copy; 2022</footer>
                </div>
           
        </CSSTransition>
    );

}

export default Gallery;