
import React, { useState } from "react";
import styles from "./index.module.css"; 
import { FaCheck } from "react-icons/fa6";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.section}>
        <div className={styles.heroCard}>
          <h1>Parlons ensemble</h1>
          <p>
            Une question, une idée ou un partenariat ? L’équipe Andadoo vous
            répond avec attention et bienveillance.
          </p>
        </div>
      </section>

      {/* WHY CONTACT + FORM */}
      <section className={styles.section}>
        <div className={styles.split}>
          <div className={styles.why}>
            <h2>Pourquoi nous contacter ?</h2>
            <p>
              Chaque message compte. Que vous soyez donateur, futur bénévole,
              partenaire ou simplement curieux de notre mission, nous sommes à
              votre écoute.
            </p>

            <ul>
              <li><FaCheck /> Obtenir des informations sur nos projets</li>
              <li><FaCheck /> Poser une question avant un don</li>
              <li><FaCheck /> Proposer un partenariat</li>
              <li><FaCheck /> Rejoindre notre mission</li>
            </ul>
          </div>

          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.confirmation}>
                <h3>Merci pour votre message 💚</h3>
                <p>
                  Nous avons bien reçu votre demande.  
                  Délai de réponse : 24 à 48 heures.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label>Nom complet</label>
                <input type="text" required />

                <label>Email</label>
                <input type="email" required />

                <label>Sujet</label>
                <select required>
                  <option value="">Sélectionner</option>
                  <option>Question générale</option>
                  <option>Faire un don</option>
                  <option>Partenariat</option>
                  <option>Bénévolat</option>
                  <option>Presse</option>
                </select>

                <label>Message</label>
                <textarea rows={4} required />

                <button type="submit">Envoyer mon message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ALTERNATIVE CONTACT METHODS */}
      <section className={styles.section}>
        <div className={styles.card}>
          <h2>Autres moyens de nous joindre</h2>
          <div className={styles.contactGrid}>
            <div>
              <p className={styles.label}>Email</p>
              <p>contact@andadoo.org</p>
            </div>
            <div>
              <p className={styles.label}>Localisation</p>
              <p>Sénégal – Diaspora engagée</p>
            </div>
            <div>
              <p className={styles.label}>Réseaux sociaux</p>
              <p>Instagram · Facebook · LinkedIn</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
     
          <h2>Questions fréquentes</h2>

          <div className={styles.faqItem}>
            <h4>Comment puis-je faire un don ?</h4>
            <p>Vous pouvez visiter la page "Faire un don" pour soutenir nos actions.</p>
          </div>

          <div className={styles.faqItem}>
            <h4>À quoi servent les dons ?</h4>
            <p>
              Les dons financent les petits-déjeuners, les soins médicaux et les
              activités socio-éducatives.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h4>Travaillez-vous uniquement au Sénégal ?</h4>
            <p>
              Oui. Nos actions sont menées au Sénégal en collaboration avec des
              partenaires locaux engagés.
            </p>
          </div>
        
      </section>

      {/* CTA */}
      <section className={styles.section}>
        <div className={styles.cta}> 
            <div className={styles.cta_content}>  
                <h4>Chaque message compte. Chaque don change une vie.</h4> 
          <p className={styles.subtext}>Rejoignez le mouvement Andadoo et devenez acteur du changement.</p>

            </div>
          
          <button>Faire un don</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
