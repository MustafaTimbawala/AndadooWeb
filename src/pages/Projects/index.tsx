import React from "react";
import styles from "./index.module.css"
import { Primary_Button } from "../../components/Button";
import { FaCheck } from "react-icons/fa6";

const Projects = () => {
  return (
    <main className={styles.projects_page}>

      {/* HERO SECTION */}
      <section className={styles.projects_hero}>
        <div className={styles.projects_hero_content}>
          <p className={styles.section_label}>NOS PROJETS</p>
          <h1>
            Des actions concrètes pour redonner dignité et espoir.
          </h1>
          <p className={styles.hero_description}>
            À travers des partenariats solides au Sénégal, Andadoo agit
            directement auprès des enfants en situation de rue,
            notamment les enfants talibés, pour transformer leur quotidien.
          </p>
        </div>

        <div className={styles.projects_hero_image}>
          <img
            src="/images/project_hero.jpg"
            alt="Équipe Andadoo engagée sur le terrain"
          />
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className={styles.project_section}>
        <div className={styles.project_image}>
          <img
            src="/images/Les9Cases.jpg"
            alt="Projet Les 9 Cases"
          />
        </div>

        <div className={styles.project_content}>
          <p className={styles.section_label}>PROJET PARTENAIRE</p>
          <h2>Les 9 Cases</h2>
          <p>
            Présente au Sénégal depuis près de 10 ans, l’association
            Les 9 Cases œuvre dans la protection de l’enfance et
            accompagne les enfants talibés en situation de rue.
          </p>

          <ul className={styles.impact_list}> 
      
            <li><FaCheck />Petit-déjeuner quotidien essentiel</li>
            <li><FaCheck />Soins médicaux de base</li>
            <li><FaCheck />Activités socio-éducatives</li>
            <li><FaCheck />Accompagnement humain et social</li>
          </ul>
         
        </div>
      </section>

      {/* ACTION BLOCKS */}
      <section className={styles.actions_section}>
        <div className={styles.action_card}>
          <h3>Nutrition</h3>
          <p>
            Un petit-déjeuner équilibré chaque matin,
            souvent le seul repas stable de la journée.
          </p>
        </div>

        <div className={styles.action_card}>
          <h3>Santé</h3>
          <p>
            Accès à des soins médicaux de base pour
            préserver la dignité et le bien-être.
          </p>
        </div>

        <div className={styles.action_card}>
          <h3>Éveil</h3>
          <p>
            Activités éducatives et socio-culturelles
            pour permettre aux enfants de grandir et rêver.
          </p>
        </div>

        <div className={styles.action_card}>
          <h3>Accompagnement</h3>
          <p>
            Un espace d’écoute et de reconstruction
            dans un cadre sûr et bienveillant.
          </p>
        </div>
      </section>

      {/* DONATION SECTION */}
      <section className={styles.donation_section}>
        <div className={styles.donation_content}>
          <p className={styles.section_label}>IMPACT</p>
          <h2>Votre don devient action concrète</h2>

          <div className={styles.donation_grid}>
            <div className={styles.donation_card}>
              <span>10€</span>
              <p>Offre un petit-déjeuner à 5 enfants pendant une semaine.</p>
            </div>

            <div className={styles.donation_card}>
              <span>25€</span>
              <p>Finance des soins médicaux et un kit d’hygiène.</p>
            </div>

            <div className={styles.donation_card}>
              <span>50€</span>
              <p>Soutient les activités socio-éducatives d’un groupe.</p>
            </div>
          </div>

          <Primary_Button link="https://web.samirpay.com/make-payment/permanent_ec06c5b2-f62e-4222-b145-21cd1844e34a?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn58I37W65ZFOLolDOwIV0ZKQ_7-8pNrlEHcMTxBoYHFq6C47wQLppMEnniIY_aem_2_CHC_VNjjcJ6m5rFB4Ogw" content="Fair un Don"/>
        </div>
      </section>

    </main>
  );
};

export default Projects;