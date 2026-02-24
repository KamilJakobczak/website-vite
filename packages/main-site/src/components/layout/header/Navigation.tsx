import type { WithTheme } from '../../theme';

import styles from './Navigation.module.scss';

interface NavigationProps extends WithTheme {
	device?: 'mobile' | 'desktop';
}

export default function Navigation({ device }: NavigationProps) {
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
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
