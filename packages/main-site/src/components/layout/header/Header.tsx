import styles from './Header.module.scss';

import Hamburger from './Hamburger';

import Navigation from './Navigation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import type { WithTheme } from '../../theme';

type HeaderProps = WithTheme;

export default function Header({ theme, setTheme }: HeaderProps) {
	const isMobile = useMediaQuery('(max-width: 1024px)');

	return (
		<header className={styles.header}>
			<div>
				<div className={styles.name}>
					Kamil <span>Jamar</span> Jakóbczak
				</div>
				{!isMobile ? (
					<Navigation
						isMobile={isMobile}
						theme={theme}
						setTheme={setTheme}
					/>
				) : (
					<Hamburger
						navigation={
							<Navigation
								isMobile={isMobile}
								theme={theme}
								setTheme={setTheme}
							/>
						}
					/>
				)}
			</div>
		</header>
	);
}
