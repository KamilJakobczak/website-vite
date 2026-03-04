import styles from './CustomError.module.scss';

interface CustomErrorProps {
  text: string;
}

const CustomError: React.FC<CustomErrorProps> = ({ text }) => {
  return (
    <div className={styles.error}>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default CustomError;
