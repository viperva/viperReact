import {useState} from 'react';
import Store from '../STORE/Store';
import Blog from '../BLOG/Blog';
import styles from './Modules.module.css';

const Modules = (props: any) =>{

    return(
        <>
        <Store storeHandler={props.storeHandler}/>
        <Blog blogHandler={props.blogHandler}/>
        </>
    );

}

export default Modules;