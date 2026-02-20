import styles from './Footer.module.scss';
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<span>&copy;Kamil Jakóbczak {new Date().getFullYear()}</span>
			<a href='https://icons8.com/'>Icons by ICONS8</a>
		</footer>
	);
}
