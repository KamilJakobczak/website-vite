import SunIcon from './assets/icons/sun.svg?react';
import MoonIcon from './assets/icons/moon.svg?react';
import styles from './Header.module.scss';
import type { Theme } from './App';

interface HeaderProps {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export default function Header({ theme, setTheme }: HeaderProps) {
	const toggleDarkMode = () => {
		console.log('toggling dark mode');
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
	};
	return (
		<header className={styles.header}>
			<div>
				<div>
					Kamil <span>"Jamar"</span> Jakóbczak
				</div>
				<nav className={styles.header_nav}>
					<ul>
						<li>home</li>
						<li>projects</li>
						<li>3D printing</li>
						<li>contact</li>
						<li onClick={toggleDarkMode}>
							{theme === 'dark' ? (
								<SunIcon className={styles.sun} />
							) : (
								<MoonIcon className={styles.moon} />
							)}
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
