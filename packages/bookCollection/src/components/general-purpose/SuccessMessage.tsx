import styles from './SuccessMessage.module.scss';

interface SuccessMessageProps {
  item?: string;
  successMessage?: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  item,
  successMessage,
}) => {
  return (
    <div className={styles.message}>
      <p>
        <span>{item ? `${item} added successfully` : successMessage}</span>
      </p>
    </div>
  );
};

export default SuccessMessage;
