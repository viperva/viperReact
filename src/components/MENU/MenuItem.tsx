import styles from './MenuItem.module.css';

type MenuItemProps = {

    onClick? : ()=> void,
    photo : string,
    title : string
}

const MenuItem : React.FC<MenuItemProps> = ({

    onClick,
    photo,
    title

}) =>{

    return(
        <button onClick={onClick} className={styles.menuItem}>
                <img className={styles.menuItemPhoto}src={photo}/>
                <h1 className={styles.menuItemTitle}>{title}</h1>
            </button>
    );

}

export default MenuItem;