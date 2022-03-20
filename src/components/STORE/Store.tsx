import {useState, useEffect} from 'react';
import styles from './Store.module.css';
import {CSSTransition} from 'react-transition-group';
import title from '../../images2/tytul.gif'
import ben1 from '../../images2/ben1.png'
import ben2 from '../../images2/ben2.png'
import ben3 from '../../images2/ben3.png'
import StoreItem from './StoreItem'

const Store = (props: any) =>{

    const [left, setLeft] = useState(0);

    const [store, setStore] = useState(props.storeHandler);

    const increaseLeft = () =>{
        setLeft(prevLeft => prevLeft+100);
        console.log(left);
    }

    const decreaseLeft = () =>{
        setLeft(prevLeft => prevLeft-100);
        console.log(left);
    }

    const toggleStore = () =>{
        setStore(!store);
    }
    useEffect(() => {
        toggleStore();
        console.log("echo")
    }, [props.storeHandler])

    return(
        <CSSTransition
        in={store}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={1000}
        classNames={{
        enter: styles.storeEnter,
        enterActive: styles.storeEnterActive,
        enterDone: styles.storeEnterDone,
        exit: styles.storeExit,
        exitActive: styles.storeExitActive,
        exitDone: styles.storeExitDone,
        appear: styles.storeAppear,
        appearActive: styles.storeAppearActive
        }}>
            <div className={styles.store}>
                <div className={styles.backdrop}></div>
                <button onClick={toggleStore} className={styles.titleButton}>
                    <img className={styles.title} src={title} />
                </button>
                <button onClick={increaseLeft} className={styles.next}> &#8592; </button>
                <button onClick={decreaseLeft} className={styles.previous}> &#8594; </button>
                <button className={styles.button} onClick={toggleStore}>X</button>
                

                <div className={styles.container} style={{left: left + 'vw'}}>
                <StoreItem
                img1={ben1} 
                img2={ben2} 
                img3={ben3} 
                title="BENIO HOODIE"
                />
                </div>
                <div className={styles.container} style={{left: left+100 + 'vw'}}>
                <StoreItem
                img1={ben1} 
                img2={ben2} 
                img3={ben3} 
                title="BENIO HOODIE"
                />
                </div>
                <footer className={styles.footer}>Vipervalour&copy; 2022</footer>
            </div>
            
        </CSSTransition>
    );

}

export default Store;