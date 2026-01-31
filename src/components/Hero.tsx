import { Link } from "react-router-dom";
import forestImg from "../assets/forest.jpg";

const Hero: React.FC = () => {
  return (
    <header
      className="hero"
      style={{ backgroundImage: `url(${forestImg})` }}
    >
      <div className="hero-overlay">
        <h1>ANDADOO</h1>
        <p>Pour les Enfants Oubliés</p>
        <h3>Une Action, Mille Sourire</h3>
        <div className="hero-buttons">
          <button className="primary-btn"><Link to="/about">Soutenez Notre Mission</Link></button>
          <button className="primary-btn"><Link to="/projects">Apprendre Encore Plus</Link></button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
