import styles from './Button.module.css';

type ButtonProps = {

    onClick : ()=> void

}

const Button : React.FC<ButtonProps> = ({

    children,
    onClick

}) =>{

    return(
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    );

}

export default Button;