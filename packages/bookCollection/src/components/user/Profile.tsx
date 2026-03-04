import { useQuery } from '@apollo/client';
import { LOAD_PROFILE } from '../../GraphQL/queries';
import Navigation from '../general-purpose/Navigation';
import { Outlet } from 'react-router-dom';
import styles from './Profile.module.scss';

const Profile: React.FC = () => {
  const { error, loading, data } = useQuery(LOAD_PROFILE);

  const navElements = [
    { id: 0, path: '', element: 'library', text: '' },
    { id: 1, path: '', element: 'lists', text: '' },
  ];
  return (
    <div>
      <div className={styles.bio}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, porro. Nulla beatae ducimus eveniet
        doloremque repellendus saepe, ut possimus, quisquam distinctio porro dignissimos asperiores consequuntur sunt
        neque esse et? Sunt.
      </div>
      <Navigation elements={navElements} />
      <Outlet />
    </div>
  );
};

export default Profile;
