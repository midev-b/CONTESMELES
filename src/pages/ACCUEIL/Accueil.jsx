import styles from "./Accueil.module.css";
import React, { useEffect } from "react";

import backgroundForest from "./ImagesAccueil/background-forest.jpg";
import birdsImg from "./ImagesAccueil/flying-birds.gif";

import dogRunning from "./ImagesAccueil/running-dog.gif";

export function Accueil() {
  useEffect(() => {
    document.body.style.background = "url(" + backgroundForest + ")";

    document.body.style.backgroundSize = "cover";
  }, []);

  return (
    <div className={styles.accueil}>
      <marquee className={styles.marqueebirds} scrollamount="10">
        <img src={birdsImg} alt="flying-birds" />
      </marquee>
      <h1> Contes Mêlés </h1>

      <div className={styles.introduction}>
        <p>
          Prêt à embarquer pour une aventure où les limites temporelles
          s'estompent, laissant libre cours à l'exploration infinie ?<br />
          Bienvenue dans notre application web, où les contes prennent vie et
          s'entrelacent avec des récits classiques et des fables bien-aimées.
        </p>
      </div>

      <marquee
        direction="right"
        scrollamount="16"
        className={styles.marqueedog}
      >
        <img src={dogRunning} alt="running-dog" />
      </marquee>
    </div>
  );
}
