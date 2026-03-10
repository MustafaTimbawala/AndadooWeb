import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./index.module.css"
import { Primary_Button } from "../Button";
import Logo from "../Logo";
const Footer: React.FC = () => {
  const year: number = new Date().getFullYear(); 
  const links={ 
    "instagram" : "https://www.instagram.com/association.andadoo/?hl=en", 
    "tiktok": "https://www.tiktok.com/@andadoo", 
    "facebook": "", 
    "X": "", 
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {/* Logo */}
        <Logo width={80} height={80}/>

        {/* Center Content */}
        <div className={styles.center}>
          <div className={styles.social_links}>
            <a href={links["instagram"]}target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href={links["tiktok"]} target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
          </div>

          <div className={styles.page_links}>
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
            <Link to="/projects">Nos projets</Link>
            {/* <Link to="/members">Members</Link>
            <Link to="/ambassadors">Ambassadors</Link> */} 
            <Link to="/team">Notre équipe</Link> 
            <Link to="/contact">Nous contacter</Link>
          </div>
        </div>

        {/* Donate Button */}
        <Primary_Button content="Faire un Don" link="https://web.samirpay.com/make-payment/permanent_ec06c5b2-f62e-4222-b145-21cd1844e34a?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn58I37W65ZFOLolDOwIV0ZKQ_7-8pNrlEHcMTxBoYHFq6C47wQLppMEnniIY_aem_2_CHC_VNjjcJ6m5rFB4Ogw"/>
      </div>

      <hr className={styles.divider} />

      <p className={styles.copyright}>© {year} Andadoo. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
