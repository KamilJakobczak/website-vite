import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADD_GENRE, UPDATE_GENRE } from '../../GraphQL/mutations';
import CustomError from '../general-purpose/CustomError';
import LoadingSpinner from '../general-purpose/LoadingSpinner';
import Button from '../general-purpose/Button';
import { regexValidator } from '../../utility/handlers/regexValidator';
import { genreRegex } from '../../utility/regex';
import SuccessMessage from '../general-purpose/SuccessMessage';
import { useLocation, useNavigate } from 'react-router-dom';
import { Flags } from '../../utility/enums';
import styles from './AddRecordForm.module.scss';

interface AddGenreFormProps {
  genre?: string;
  onAdded?: React.Dispatch<React.SetStateAction<string[]>>;
  flag: Flags;
}

const AddGenreForm: React.FC<AddGenreFormProps> = ({ genre, onAdded, flag }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const editableData = location.state;

  const [name, setName] = useState(genre || editableData?.name || '');
  const [namePolish, setNamePolish] = useState(editableData?.namePolish || '');
  const [successMessage, setSuccessMessage] = useState('');
  const [userError, setUserError] = useState('');

  const [addGenre, { data, loading, error }] = useMutation(ADD_GENRE, {
    onCompleted(data) {
      if (data.addGenre.userErrors[0].message) {
        setUserError(data.addGenre.userErrors[0].message);
        onAdded && onAdded(prevState => [...prevState, ' ']);
      }
      if (data.addGenre.genre) {
        setName('');
        setNamePolish('');
        setUserError('');
        setSuccessMessage(data.addGenre.genre.name);
        onAdded && onAdded(prevState => [...prevState, data.addGenre.genre.id]);
        setTimeout(() => {
          setSuccessMessage('');
          navigate('/add');
        }, 3000);
      }
    },
  });

  const [updateGenre, { data: dataU, loading: loadingU, error: errorU }] = useMutation(UPDATE_GENRE, {
    onCompleted(data) {
      const recordPath = location.pathname.replace(/\/edit$/, '');
      navigate(recordPath, {
        state: { id: editableData.id, refetch: true },
      });
    },
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        regexValidator(genreRegex, value, setName);
        break;
      case 'namePolish':
        regexValidator(genreRegex, value, setNamePolish);
    }
  };

  const handleSubmit = () => {
    const variables = {
      name,
      namePolish,
    };
    if (flag === Flags.Add) addGenre({ variables });
    if (flag === Flags.Edit)
      updateGenre({
        variables: { ...variables, ...{ id: editableData.id } },
      });
  };

  const showForm = () => {
    return (
      <form action=''>
        <h5>{flag} genre</h5>
        <div>
          <label htmlFor='name'>name</label>
          <input
            type='text'
            id='name'
            autoComplete='off'
            required
            value={name}
            placeholder='small characters only'
            onChange={e => handleNameChange(e)}
          />
        </div>
        <div>
          <label htmlFor='namePolish'>Polish Name</label>
          <input
            type='text'
            id='namePolish'
            autoComplete='off'
            required
            value={namePolish}
            placeholder='small characters only'
            onChange={e => handleNameChange(e)}
          />
        </div>
        <Button className='' handleClick={handleSubmit} />
      </form>
    );
  };

  const showErrors = () => {
    if (error) {
      return <CustomError text={error.message} />;
    } else if (userError) {
      return <CustomError text={userError} />;
    }
  };

  return (
    <div className={styles.addRecord}>
      {data && successMessage ? <SuccessMessage item='genre' successMessage={successMessage} /> : null}
      {loading && <LoadingSpinner />}

      {!loading && !successMessage ? showForm() : null}
      {showErrors()}
    </div>
  );
};

export default AddGenreForm;
