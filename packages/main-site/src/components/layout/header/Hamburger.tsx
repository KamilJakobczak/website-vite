import { useState } from 'react';
import styles from './Hamburger.module.scss';

interface HamburgerProps {
	navigation: React.ReactNode;
}

export default function Hamburger({ navigation }: HamburgerProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.hamburgerWrapper}>
			<button
				type='button'
				aria-expanded={open}
				aria-label='Toggle navigation'
				className={`${styles.hamburger} ${open ? styles.open : ''} `}
				onClick={() => setOpen(prevState => !prevState)}>
				<span />
				<span />
				<span />
			</button>
			<div
				className={styles.hamburgerContent}
				aria-hidden={!open}>
				<button
					type='button'
					aria-label='Close navigation'
					className={styles.closeButton}
					onClick={() => setOpen(false)}>
					x
				</button>
				<div
					onClick={e => {
						if ((e.target as HTMLElement).closest('a')) setOpen(false);
					}}>
					{navigation}
				</div>
			</div>
		</div>
	);
}
