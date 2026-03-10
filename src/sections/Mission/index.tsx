import styles from "./index.module.css"
import { ImageCard } from "../../components";
const Mission: React.FC = () => {
  return (
    <section className={styles.mission}>
      <div>  
        <p className={styles.eyebrow}>Notre Misson</p>
        <h2>L'amour transforme les vies</h2>
      <p className={styles.sub}>
        Redonner espoir, restaurer la dignité et créer des opportunités concrètes. 
        Notre action s’articule autour de trois piliers essentiels qui guident chacune de nos interventions.
      </p>
      </div>
  

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
  );
};

export default Mission;
