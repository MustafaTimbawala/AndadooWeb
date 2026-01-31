import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Logo */}
        <div className="footer-logo">AN</div>

        {/* Center Content */}
        <div className="footer-center">
          <div className="social-links">
            <a href="https://www.instagram.com/association.andadoo/?hl=en" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@andadoo" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
          </div>

          <div className="page-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/projects">Our Projects</Link>
            <Link to="/members">Members</Link>
            <Link to="/ambassadors">Ambassadors</Link>
            <Link to="/team">Team</Link>
          </div>
        </div>

        {/* Donate Button */}
        <div>
          <Link to="/donate">
            <button className="footer-donate-btn">Donate</button>
          </Link>
        </div>
      </div>

      <hr className="footer-divider" />

      <p className="footer-copy">© {year} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
