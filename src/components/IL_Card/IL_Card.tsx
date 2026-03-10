import styles from "./IL_Card.module.css";

interface CardProps {
  title: string;
  description: string;
  color1: string;
  color2?: string;
}

const IL_Card: React.FC<CardProps> = ({
  title,
  description,
  color1,
  color2,
}) => {
  const backgroundStyle = color2
    ? {
        background: `linear-gradient(180deg, ${color1} 0%, ${color2} 100%)`,
      }
    : {
        backgroundColor: color1,
      };

  return (
    <div className={styles.card} style={backgroundStyle}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default IL_Card;
