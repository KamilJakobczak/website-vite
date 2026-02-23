import type { WithTheme } from '../../theme';
import SunIcon from '../../../assets/icons/sun.svg?react';
import MoonIcon from '../../../assets/icons/moon.svg?react';
import styles from './Navigation.module.scss';

interface NavigationProps extends WithTheme {
	device?: 'mobile' | 'desktop';
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
	device,
	theme,
	setTheme,
}: NavigationProps) {
	return (
		<div
			className={`${styles.navWrapper} ${device === 'mobile' ? styles.mobile : ''}`}>
			<nav className={styles.nav}>
				<ul>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#3d-printing'>3D printing</a>
					</li>
					<li>
						<a href='#contact'>contact</a>
					</li>
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
