import styles from "./index.module.css"  
import { team_data } from "../../data/team_data";
import { MemberCard } from "../../components";

// THis
const Team: React.FC = () => { 

  return(  
    <div className={styles.team_page}> 
      <h1 className={styles.title}>Rencontrez l'équipe</h1> 
      <div className={styles.cards}> 
        {team_data.map((member)=> { 
          return <MemberCard name={member.name} title={member.position} imageUrl={member.image}/>
        })}
      </div>
    </div>
    
  ) 
};

export default Team;
