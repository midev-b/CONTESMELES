import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <nav className={styles.links}>
      <Link to="/" className={styles.link}>
        Accueil
      </Link>
      <Link to="/histoires" className={styles.link}>
        Histoires
      </Link>
      <Link to="/jeux" className={styles.link}>
        Jeux
      </Link>
      <Link to="/contact" className={styles.link}>
        Contactez-nous
      </Link>
    </nav>
  );
}
