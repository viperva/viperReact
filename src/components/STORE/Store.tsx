import {useState, useEffect} from 'react';
import styles from './Store.module.css';
import {CSSTransition} from 'react-transition-group';
import title from '../../images2/tytul.gif'
import ben1 from '../../images2/ben1.png'
import ben2 from '../../images2/ben2.png'
import ben3 from '../../images2/ben3.png'
import StoreItem from './StoreItem'

const Store = (props: any) =>{

    const items: {[index: string]:any} = [

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

    const [left, setLeft] = useState(0);

    const increaseLeft = () =>{
        if(left != 0){
            setLeft(prevLeft => prevLeft+100);
        }
    }

    const decreaseLeft = () =>{
        if(left != (items.length-1)*(-100)){
            setLeft(prevLeft => prevLeft-100);
        }
    }

    return(
        <CSSTransition
        in={props.storeHandler}
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
                <div className={styles.backdrop}></div>
                <button onClick={props.toggleStore} className={styles.titleButton}>
                    <img className={styles.title} src={title} />
                </button>
                <button onClick={increaseLeft} className={styles.next}> &#8592; </button>
                <button onClick={decreaseLeft} className={styles.previous}> &#8594; </button>
                <button className={styles.button} onClick={props.toggleStore}>X</button>
                

                

                {items.map((item :typeof items, index:number) => <div className={styles.container} style={{left: left+(index*100) + 'vw'}}> <StoreItem
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