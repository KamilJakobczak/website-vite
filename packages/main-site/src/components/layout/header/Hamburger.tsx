import { useState } from 'react';
import styles from './Hamburger.module.scss';

interface HamburgerProps {
	navigation: React.ReactNode;
}

export default function Hamburger({ navigation }: HamburgerProps) {
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
			<div className={styles.hamburgerContent}>{navigation}</div>
		</div>
	);
}
