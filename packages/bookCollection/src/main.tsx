import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import Navigation from './components/general-purpose/Navigation';
import Search from './components/general-purpose/Search';

import { CHECK_LOGIN } from './GraphQL/queries';
import { SIGNOUT } from './GraphQL/mutations';
import { useTranslation } from 'react-i18next';
import './style/main.scss';
import styles from './BookCollection.module.scss';
type ContextType = {
	setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	setUserRole: React.Dispatch<React.SetStateAction<string>>;
	loggedIn: boolean;
};

const BookCollection: React.FC = () => {
	const { t } = useTranslation();
	const { loading, data } = useQuery(CHECK_LOGIN);

	const [loggedIn, setLoggedIn] = useState<boolean>();
	const [userRole, setUserRole] = useState('');

	const [logout] = useMutation(SIGNOUT, {
		onCompleted(data) {
			setLoggedIn(false);
			setUserRole('');
		},
	});

	useEffect(() => {
		if (data?.checkLogin) {
			setLoggedIn(data.checkLogin.authenticated);
			if (data.checkLogin.user) {
				setUserRole(data.checkLogin.user.role);
			}
		}
	}, [data]);

	const elements = [
		{ id: 0, element: 'books', text: `${t('books')}` },
		{ id: 1, element: 'authors', text: `${t('authors')}` },
		{ id: 2, element: 'publishers', text: `${t('publishers')}` },
	];
	const elementsSecondary = [
		{ id: 0, element: 'genres', text: `${t('genres')}` },
		{ id: 1, element: 'translators', text: `${t('translators')}` },
		{ id: 2, element: 'bookseries', text: `${t('bookSeries')}` },
	];

	const userNavElements = [
		{ id: 0, path: 'user', element: 'signup', text: `${t('signUp')}` },
		{ id: 1, path: 'user', element: 'login', text: `${t('logIn')}` },
	];
	const loggedInUserNavElements = [
		...(userRole === 'ADMIN'
			? [{ id: 0, element: 'add', text: `${t('add')}` }]
			: []),
		{ id: 1, path: 'user', element: 'profile', text: `${t('profile')}` },
		{
			id: 2,
			element: 'logout',
			text: `${t('logOut')}`,
			handler: logout,
		},
	];

	return (
		<div className={styles.bookCollection}>
			<Navigation elements={elements} />
			<Search />
			<Navigation elements={elementsSecondary} />
			{!loading && (
				<Navigation
					elements={loggedIn ? loggedInUserNavElements : userNavElements}
				/>
			)}
			<Outlet context={{ setLoggedIn, setUserRole, loggedIn }} />
		</div>
	);
};

export default BookCollection;

export function useStatus() {
	return useOutletContext<ContextType>();
}
