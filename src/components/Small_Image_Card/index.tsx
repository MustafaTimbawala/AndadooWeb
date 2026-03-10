import React from "react";
import styles from  "./index.module.css"

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
}

const SmallImageCard: React.FC<ImageCardProps> = ({
  image,
  title,
  description
}) => {
  return (
    <div className={styles.project_card}>
      <div className={styles.project_card_image}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.project_card_content}>
        <h2 className={styles.project_card_title}>{title}</h2>

        <p className={styles.project_card_description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default SmallImageCard;