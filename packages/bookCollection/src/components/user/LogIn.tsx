// Hooks and main libraries
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useStatus } from '../../main';
// Components
import Button from '../general-purpose/Button';
import Error from '../general-purpose/CustomError';
import LoadingSpinner from '../general-purpose/LoadingSpinner';
import SuccessMessage from '../general-purpose/SuccessMessage';
// GraphQL
import { SIGNIN } from '../../GraphQL/mutations';
import styles from './Auth.module.scss';

const LogIn: React.FC = () => {
	const navigate = useNavigate();
	const { setLoggedIn, setUserRole } = useStatus();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userError, setUserError] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	// GraphQL mutation for signing in
	const [signin, { error, data, loading }] = useMutation(SIGNIN, {
		onCompleted(data) {
			if (data.signin.userErrors[0].message) {
				setUserError(data.signin.userErrors[0].message);
			} else if (data.signin.user) {
				setSuccessMessage('You were successfully logged in');
				setEmail('');
				setPassword('');
				setLoggedIn(true);
				setUserError('');
				setUserRole(data.signin.user.role);
				setTimeout(() => {
					navigate('/collection');
				}, 1000);
			}
		},
	});
	// Function to handle form submission
	const handleSubmit = () => {
		if (!email || !password) {
			setUserError('Provide both username/email and password');
			return;
		}
		signin({
			variables: {
				credentials: {
					email,
					password,
				},
			},
		});
	};
	const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') handleSubmit();
	};

	const showForm = () => {
		return (
			<form action=''>
				<div>
					<label htmlFor='username'>e-mail</label>
					<input
						type='text'
						id='username'
						value={email}
						onKeyDown={handleEnterKey}
						onChange={e => {
							setEmail(e.target.value);
							setUserError('');
						}}
					/>
				</div>
				<div>
					<label htmlFor='password'>password</label>
					<input
						type='password'
						id='password'
						value={password}
						onKeyDown={handleEnterKey}
						onChange={e => {
							setPassword(e.target.value);
							setUserError('');
						}}
					/>
				</div>
			</form>
		);
	};

	const showErrors = () => {
		if (userError) {
			return <Error text={userError} />;
		}
	};

	return (
		<div className={styles.wrapper}>
			{loading && <LoadingSpinner />}
			{!loading && !successMessage && showForm()}
			{successMessage ? (
				<SuccessMessage successMessage={successMessage} />
			) : (
				<Button
					text='login'
					className=''
					handleClick={handleSubmit}
				/>
			)}
			{userError && showErrors()}
		</div>
	);
};

export default LogIn;
