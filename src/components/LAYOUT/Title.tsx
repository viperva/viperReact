import title from "../../images2/tytul.gif";
import styles from "./Layout.module.css";

const Background = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img className={styles.title} src={title}></img>
      </a>
    </header>
  );
};

export default Background;
