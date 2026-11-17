import React from 'react';
import styles from './Welcome.module.scss';

const Welcome: React.FC = () => {
	return (
		<div className={styles.welcome}>
			<h2>Welcome to my Book Collection!</h2>
			<p>
				A place to browse, manage and keep track of books across the family
				library. Search by title, author or genre, add new records, and
				organise everything in one place.
			</p>
			<p>
				Use the navigation above to explore the catalogue or log in to
				manage your personal reading list.
			</p>
		</div>
	);
};

export default Welcome;
