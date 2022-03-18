import styles from './Button.module.css';

const Button = (props: any) =>{

    return(
        <button onClick={props.onClick} className={styles.button}>
            {props.children}
        </button>
    );

}

export default Button;