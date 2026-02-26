import { Link, Outlet } from 'react-router-dom';
import Footer from '../layout/footer/Footer';
import styles from './ProjectsLayout.module.scss';

export default function ProjectsLayout() {
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
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
