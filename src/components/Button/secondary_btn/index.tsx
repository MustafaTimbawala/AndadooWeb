import { Link } from "react-router-dom";
import styles from "./index.module.css"  

interface button_props{ 
    content: string, 
    link?: string
} 

const Secondary_button: React.FC<button_props>=({ 
    content, 
    link,
})=>{  
    const linkage = link? link:""; 
    return ( 
        <button className={styles.btn}><Link to={linkage}>{content}</Link></button>
    )

} 

export default Secondary_button