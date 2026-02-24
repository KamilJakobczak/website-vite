import styles from './Header.module.scss';
import Hamburger from './Hamburger';
import Navigation, { DarkModeButton } from './Navigation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import type { WithTheme } from '../../theme';

type HeaderProps = WithTheme;

export default function Header({ theme, setTheme }: HeaderProps) {
	const isMobile = useMediaQuery('(max-width: 1023px)');

	return (
		<header className={styles.header}>
			<div>
				<div className={styles.name}>
					<span className={styles.namePart}>Kamil </span>
					<span className={styles.nameAccent}>Jamar</span>
					<span className={styles.namePart}> Jakóbczak</span>
				</div>
				{!isMobile ? (
					<Navigation
						device={'desktop'}
						theme={theme}
						setTheme={setTheme}
					/>
				) : (
					<div className={styles.controls}>
						<DarkModeButton
							theme={theme}
							setTheme={setTheme}
						/>
						<Hamburger
							navigation={
								<Navigation
									device='mobile'
									theme={theme}
									setTheme={setTheme}
								/>
							}
						/>
					</div>
				)}
			</div>
		</header>
	);
}
