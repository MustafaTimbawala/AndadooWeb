import styles from "./index.module.css"
interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
     className={styles.logo}> </div>
  );
};

export default Logo;
