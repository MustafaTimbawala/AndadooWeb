import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="footer-logo">AN</div>
      <div className="page-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/projects">Our Projects</Link>
            <Link to="/members">Members</Link>
            <Link to="/ambassadors">Ambassadors</Link>
            <Link to="/team">Team</Link>
          </div>
      <div>
          <Link to="/donate">
            <button className="footer-donate-btn">Donate</button>
          </Link>
        </div>
    </nav>
  );
};

export default Navbar;
