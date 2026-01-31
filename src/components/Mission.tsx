import { FaHeart, FaBook, FaSeedling } from "react-icons/fa";
const Mission: React.FC = () => {
  return (
    <section className="mission">
      <h2>Notre Mission</h2>
      <p className="mission-sub">
        Redonner espoir, restaurer mission. Est cela passe trois pilier
        essentiel:
      </p>

      <div className="mission-cards">
        <div className="mission-card">
          <h3><FaHeart /> L’amour</h3>
          <p>pour les consoler et les entourer</p>
        </div>

        <div className="mission-card">
          <h3><FaBook /> Les Ressources</h3>
          <p>pour les accompagner au quotidien</p>
        </div>

        <div className="mission-card">
          <h3><FaSeedling /> Opportunités</h3>
          <p>pour les permettre grandir et de rêver</p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
