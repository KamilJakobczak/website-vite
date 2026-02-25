import styles from './Footer.module.scss';
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<span>&copy;Kamil Jakóbczak {new Date().getFullYear()}</span>
		</footer>
	);
}
