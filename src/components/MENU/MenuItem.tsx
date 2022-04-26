import styles from './MenuItem.module.css';

const MenuItem = (props: any) =>{

    return(
        <button onClick={props.onClick} className={styles.menuItem}>
                <img className={styles.menuItemPhoto}src={props.photo}/>
                <h1 className={styles.menuItemTitle}>{props.title}</h1>
            </button>
    );

}

export default MenuItem;