import { Outlet } from 'react-router-dom';
import styles from './AddBook.module.scss';

const AddBook: React.FC = () => {
  return (
    <div className={styles.addBook}>
      <Outlet />
    </div>
  );
};
export default AddBook;
