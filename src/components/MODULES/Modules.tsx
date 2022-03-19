import {useState} from 'react';
import Store from '../STORE/Store';
import styles from './Modules.module.css';

const Modules = (props: any) =>{

    return(
        <>
        <Store storeHandler={props.storeHandler}/>
        </>
    );

}

export default Modules;