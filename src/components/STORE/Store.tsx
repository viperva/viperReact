import {useState, useEffect} from 'react';
import styles from './Store.module.css';
import {CSSTransition} from 'react-transition-group';
import title from '../../images2/tytul.gif'
import ben1 from '../../images2/ben1.png'
import ben2 from '../../images2/ben2.png'
import ben3 from '../../images2/ben3.png'
import StoreItem from './StoreItem'
import arrow from '../../images2/arrow.png'

type StoreProps = {

    storeHandler : boolean,
    toggleStore : ()=> void

}

type item = {

    title : string,
    img1 : string,
    img2 : string,
    img3 : string

}

const Store : React.FC<StoreProps> = ({

    storeHandler,
    toggleStore

}) =>{

    const items : item[] = [

        {
            title : "benio hoodie",
            img1 : ben1,
            img2 : ben2,
            img3 : ben3
        },
        {
            title : "TEST POST",
            img1 : ben1,
            img2 : ben2,
            img3 : ben3
        },
        {
            title : "TEST POST",
            img1 : ben1,
            img2 : ben2,
            img3 : ben3
        },

    ];

    const pixelsToMove : number = 100;

    const [left, setLeft] = useState(0);

    const increaseLeft : ()=> void = () =>{
        if(left != 0){
            setLeft(prevLeft => prevLeft + pixelsToMove);
        }
    }

    const decreaseLeft : ()=> void = () =>{
        if(left != (items.length-1)*(-pixelsToMove)){
            setLeft(prevLeft => prevLeft - pixelsToMove);
        }
    }

    return(
        <CSSTransition
        in={storeHandler}
        mountOnEnter={true}
        unmountOnExit={true}
        onEnter={() => setLeft(0)}
        timeout={600}
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
                <div className={styles.backdrop}/>
                <button onClick={toggleStore} className={styles.titleButton}>
                    <img className={styles.title} src={title}/>
                </button>
                <button onClick={increaseLeft}> 
                <img className={styles.next} src={arrow}/>
                </button>
                <button onClick={decreaseLeft}> 
                <img className={styles.previous} src={arrow}/>
                </button>
                <button className={styles.button} onClick={toggleStore}>X</button>
                
                {items.map((item : item, index:number) => <div className={styles.container} style={{left: left+(index * pixelsToMove) + 'vw'}}> <StoreItem
                img1={items[index].img1} 
                img2={items[index].img2} 
                img3={items[index].img3} 
                title={items[index].title} 
                /> </div>)}                
                
                <footer className={styles.footer}>Vipervalour&copy; 2022</footer>
            </div>
            
        </CSSTransition>
    );

}

export default Store;