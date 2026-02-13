import { useState } from 'react';
import styles from './Hamburger.module.scss';

export default function Hamburger() {
	const [open, setOpen] = useState(false);
	return (
		<div
			className={styles.hamburgerWrapper}
			onClick={() => setOpen(prevState => !prevState)}>
			<button
				type='button'
				aria-expanded={open}
				aria-label='Toggle navigation'
				className={`${styles.hamburger} ${open ? styles.open : ''} `}>
				<span />
				<span />
				<span />
			</button>
			<div className={styles.hamburgerContent}></div>
		</div>
	);
}
