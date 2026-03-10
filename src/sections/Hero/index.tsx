import React from "react";
import styles from "./index.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}> 
          <p className={styles.org_name}>ANDADOO</p>
            <h1 className={styles.title}>Une Ation, Mille Sourires. </h1>
            <p className={styles.subtitle}> Pour les Enfants Oubliés.</p>


          <p className={styles.description}>
            Andadoo est une voix pour les enfants oubliés au Sénégal. 
            Portée par des jeunes engagés du pays et de la diaspora, 
            l’association agit auprès des enfants en situation de précarité 
            en leur offrant amour, ressources et opportunités pour 
            reconstruire leur avenir avec dignité et espoir.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Faire un don
            </button>
            <button className={styles.secondaryBtn}>
              Découvrir nos projets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;