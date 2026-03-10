import { Link } from "react-router-dom";
import styles from "./index.module.css"; 

interface button_props{ 
    content: string,  
    link?: string 
}
const primary_button :React.FC<button_props>=({ 
    content,  
    link,
})=>{   
    const linkage = link? link: "";
    return( 
        <div>
          <Link to={linkage}>
            <button className={styles.donate_btn} >{content}</button>
          </Link>
        </div> 
    )

} 

export default primary_button