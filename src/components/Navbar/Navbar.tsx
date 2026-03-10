import { Link } from "react-router-dom"; 
import styles from "./index.module.css"
import { Primary_Button } from "../Button";
import Logo from "../Logo";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>  
    <div className={styles.logo}> 
      <Logo width={80} height={80}/> 
      <h1>Andadoo</h1>
    </div>
      
      <div className={styles.links}>
            <Link to="/">Accueil</Link>
            <Link to="/about">À propos</Link>
            <Link to="/projects">Nos projets</Link>
            {/* <Link to="/members">Members</Link>
            <Link to="/ambassadors">Ambassadors</Link> */}
            <Link to="/team">Notre équipe</Link> 
            <Link to="/contact">Nous contacter</Link>
          </div>
    <Primary_Button content="Faire un Don" link="https://web.samirpay.com/make-payment/permanent_ec06c5b2-f62e-4222-b145-21cd1844e34a?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn58I37W65ZFOLolDOwIV0ZKQ_7-8pNrlEHcMTxBoYHFq6C47wQLppMEnniIY_aem_2_CHC_VNjjcJ6m5rFB4Ogw"/>
    </nav>
  );
};

export default Navbar;
