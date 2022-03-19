import {useState, useEffect} from 'react';
import styles from './Store.module.css';
import {CSSTransition} from 'react-transition-group';

const Store = (props: any) =>{

    const [store, setStore] = useState(props.storeHandler);

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
                
                <button className={styles.button} onClick={toggleStore}>X</button>
            </div>
        </CSSTransition>
    );

}

export default Store;