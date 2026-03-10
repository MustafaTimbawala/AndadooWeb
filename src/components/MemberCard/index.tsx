import React  from "react";
import styles from "./index.module.css"; 

interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  title: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  imageUrl,
  name,
  title,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image_wrapper}>
        <img src={imageUrl} alt={name} className={styles.card_image} />
      </div>
      <div className={styles.card_content}>
        <h3 className={styles.card_name}>{name}</h3>
        <p className={styles.card_title}>{title}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;