import { Secondary_Button } from "../../components/Button";
import styles from "./index.module.css";
const Help: React.FC = () => {
  return (
    <section className={styles.help}> 
     <h2>Comment Pouvez-Vous Aider?</h2> 
     <div className={styles.help_content}> 
      <div className={styles.left}>
        <p>Vous pouvez nous aider de trois manières :</p>
      </div>

      <div className={styles.actions}>
        <Secondary_Button content="1. Fair un Don" link="./donate"/> 
        <Secondary_Button content="2. Devenir ambassadeur" link="./"/>
        <Secondary_Button content="3. Devenir membre"/>
      </div> 

     </div>
      
    </section>
  );
};

export default Help;
