import { ImageCard, SmallImageCard } from "../../components";
import styles from "./index.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>

      {/* SECTION 2 — NOTRE MISSION */}
      <section className={styles.section}>
        <div className={styles.centerBlock}>
          <p className={styles.sectionLabel}>NOTRE MISSION</p>

          <h2 className={styles.title}>
            Redonner espoir aux enfants oubliés.
          </h2>

          <p className={styles.text}>
            Andadoo agit auprès des enfants en situation de précarité pour leur
            offrir bien plus qu’une aide matérielle. Notre mission est de leur
            apporter une présence humaine, des ressources essentielles et des
            opportunités concrètes pour construire un avenir meilleur.
          </p>
        </div>
      </section>

      {/* SECTION 3 — NOS TROIS PILIERS */}
      <section className={styles.pillarsSection}> 

        <h2 className={styles.ctaTitle}>NOS TROIS PILIERS</h2>
        
        <div className={styles.cards}> 
          <ImageCard image="/images/heart.jpg" 
          label="L'amour"  
          title="Soutien émotionnel profond"
          description="pour les consoler et les entourer"
          /> 
          <ImageCard image="/images/resources.jpg" 
          label="Les Ressources"  
          title="Soutien émotionnel profond"
          description="pour les accompagner au quotidien"
          /> 
          <ImageCard image="/images/opportunity.jpg" 
          label="Opportunités"  
          title="Soutien émotionnel profond"
          description="pour les permettre grandir et de rêver"
          />
     
      </div>
      </section>

      {/* SECTION 7 — NOTRE HISTOIRE */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>

          <div className={styles.imageContainer}>
            <img
              src="/images/branding_6.JPG"
              alt="Histoire Andadoo"
              className={styles.image}
            />
          </div>

          <div className={styles.textContent}>
            <p className={styles.sectionLabel}>NOTRE HISTOIRE</p>

            <h2 className={styles.title}>
              Une initiative née de la jeunesse et de la solidarité.
            </h2>

            <p className={styles.text}>
              Andadoo est née au Sénégal, portée par des jeunes engagés du pays
              et de la diaspora. Animés par une volonté commune d’agir, nous
              avons décidé de transformer la compassion en action concrète pour
              soutenir les enfants les plus vulnérables.
            </p>

            <p className={styles.text}>
              Depuis nos premières initiatives, notre objectif reste le même :
              créer des opportunités pour les enfants afin qu’ils puissent
              grandir avec dignité et espoir.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 6 — NOS VALEURS */}
      <section className={styles.valuesSection}>

        <p className={styles.sectionLabel}>NOS VALEURS</p>

        <div className={styles.cards}> 

          <SmallImageCard image="/images/flag.jpg" title="Dignité" description="Chaque enfant mérite respect, protection et considération."/> 
          <SmallImageCard image="/images/solidarity.jpg" title="Solidarité" description="Nous croyons en la force de l’action collective."/> 
          <SmallImageCard image="/images/heart.jpg" title="Responsabilité" description="Nous agissons avec transparence et engagement."/> 
          <SmallImageCard image="/images/hope.jpg" title="Espoir" description="Chaque action vise à construire un avenir meilleur."/>

        </div>
      </section>

      {/* SECTION 4 — NOTRE ENGAGEMENT */}
      <section className={styles.section}>
        <div className={styles.container}>

          <div className={styles.textContent}>
            <p className={styles.sectionLabel}>NOTRE ENGAGEMENT</p>

            <h2 className={styles.title}>
              Agir concrètement sur le terrain.
            </h2>

            <p className={styles.text}>
              Andadoo agit en collaboration avec des partenaires locaux pour
              soutenir les enfants en situation de rue et les enfants talibés.
              Nos actions se concentrent sur l’aide quotidienne et
              l’accompagnement humain.
            </p>

            <p className={styles.text}>
              Grâce à ces initiatives, nous contribuons à offrir un espace
              sécurisant où les enfants peuvent se nourrir, apprendre et se
              reconstruire.
            </p>
          </div>

          <div className={styles.imageContainer}>
            <img
              src="/images/ground.jpg"
              alt="Engagement Andadoo"
              className={styles.image}
            />
          </div>

        </div>
      </section>

      {/* SECTION 5 — IMPACT */}
      <section className={styles.impactSection}>

        <p className={styles.sectionLabelCenter}>NOTRE IMPACT</p>

        <div className={styles.stats}>

          <div>
            <h3>500+</h3>
            <p>Enfants accompagnés</p>
          </div>

          <div>
            <h3>1200+</h3>
            <p>Repas distribués</p>
          </div>

          <div>
            <h3>50+</h3>
            <p>Activités éducatives</p>
          </div>

        </div>

      </section>

      {/* SECTION 9 — CTA */}
      <section className={styles.ctaSection}>

        <h2 className={styles.ctaTitle}>
          Rejoignez notre mission
        </h2>

        <p className={styles.ctaText}>
          Chaque contribution aide à offrir un avenir meilleur aux enfants
          oubliés.
        </p>

        <div className={styles.ctaButtons}> 
          <button className={styles.primaryButton}>Faire un don</button>
          <button className={styles.secondaryButton}>Nous contacter</button>
        </div>

      </section>

    </main>
  );
}