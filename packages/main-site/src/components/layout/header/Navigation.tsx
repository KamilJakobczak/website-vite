import type { WithTheme } from '../../theme';
import SunIcon from '../../../assets/icons/sun.svg?react';
import MoonIcon from '../../../assets/icons/moon.svg?react';
import styles from './Navigation.module.scss';

interface NavigationProps extends WithTheme {
	isMobile: boolean;
}

function DarkModeButton({
	theme,
	setTheme,
}: Pick<WithTheme, 'theme' | 'setTheme'>) {
	const toggleDarkMode = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<button
			type='button'
			onClick={toggleDarkMode}
			aria-label='Toggle dark mode'>
			{theme === 'dark' ? (
				<SunIcon className={styles.sun} />
			) : (
				<MoonIcon className={styles.moon} />
			)}
		</button>
	);
}

export default function Navigation({
	isMobile,
	theme,
	setTheme,
}: NavigationProps) {
	return (
		<div className={`${styles.navWrapper} ${isMobile ? styles.mobile : ''}`}>
			<nav className={styles.nav}>
				<ul>
					<li>home</li>
					<li>projects</li>
					<li>3D printing</li>
					<li>contact</li>
					<li>
						<DarkModeButton
							theme={theme}
							setTheme={setTheme}
						/>
					</li>
				</ul>
			</nav>
		</div>
	);
}
