import title from "../../images2/tytul.gif";
import styles from "./Layout.module.css";

const Background = () => {
  return (
    <header className={styles.header}>
      <img className={styles.title} src={title}></img>
    </header>
  );
};

export default Background;
