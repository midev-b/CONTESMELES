import { Link } from "react-router-dom";
import styles from "./Histoire.module.css";
import { useEffect } from "react";

export function Histoires() {
  useEffect(() => {
    document.body.style.background = "#7f6bc8";
  }, []);

  return (
    <div>
      <div className={styles.histoiresContainer}>
        <Link to="/histoires/Timo">
          <div className={styles.bookOne}></div>
        </Link>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
