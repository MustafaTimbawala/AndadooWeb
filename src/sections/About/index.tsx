import styles from "./index.module.css"
const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Notre origine</span>

        <h2 className={styles.title}>
          Nous sommes nés d’une conviction simple : chaque enfant mérite dignité et espoir.
        </h2>

        <p className={styles.description}>
          Andadoo est née au Sénégal, portée par des jeunes engagés du pays et
          de la diaspora. Nous agissons auprès des enfants en situation de
          précarité pour leur offrir bien plus qu’une aide matérielle :
          une présence, une écoute et des opportunités concrètes pour
          grandir et rêver.
        </p>

        <p className={styles.cta}>
        Apprendre encore plus
        </p>
      </div> 

      <div className={styles.image}>
        <img src="/images/branding.jpeg" alt="Enfants soutenus par Andadoo" />
      </div>
    </section>
  );
};

export default About;