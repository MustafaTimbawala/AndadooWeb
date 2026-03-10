import React from "react";
import styles from  "./index.module.css"

interface ImageCardProps {
  image: string;
  label: string;
  title: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  label,
  title,
  description
}) => {
  return (
    <div className={styles.project_card}>
      <div className={styles.project_card_image}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.project_card_content}>
        <span className={styles.project_card_label}>{label}</span>

        <h2 className={styles.project_card_title}>{title}</h2>

        <p className={styles.project_card_description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;