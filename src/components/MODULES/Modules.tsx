import {useState} from 'react';
import Store from '../STORE/Store';
import Blog from '../BLOG/Blog';
import styles from './Modules.module.css';

const Modules = (props: any) =>{

    return(
        <>
        <Store storeHandler={props.storeHandler} toggleStore={props.toggleStore}/>
        <Blog blogHandler={props.blogHandler} toggleBlog={props.toggleBlog}/>
        </>
    );

}

export default Modules;