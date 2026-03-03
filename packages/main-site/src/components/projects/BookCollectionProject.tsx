import { Link } from 'react-router-dom';
import { BookCollectionLayout } from '@portfolio/book-collection';
import Footer from '../layout/footer/Footer';
import styles from './ProjectsLayout.module.scss';

export default function BookCollectionPage() {
	return (
		<>
			<header className={styles.header}>
				<div>
					<Link
						to='/'
						className={styles.name}>
						<span className={styles.namePart}>Kamil </span>
						<span className={styles.nameAccent}>Jamar</span>
						<span className={styles.namePart}> Jakóbczak</span>
					</Link>
				</div>
			</header>
			<main className={styles.main}>
				<BookCollectionLayout />
			</main>
			<Footer />
		</>
	);
}
