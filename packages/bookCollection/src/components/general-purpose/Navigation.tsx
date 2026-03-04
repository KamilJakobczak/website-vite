import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss';

interface NavigationProps {
	elements: {
		id: number;
		path?: string;
		element: string;
		text: string;
		handler?: () => void;
	}[];
	className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ elements, className }) => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleSamePageRefresh = (element: string) => {
		const segments = location.pathname.split('/').filter(Boolean);
		const lastSegment = segments[segments.length - 1];
		if (element === lastSegment) {
			navigate(0);
		}
	};
	const renderElements = () => {
		return elements.map(({ id, path, element, text, handler }) => {
			return (
				<li
					key={id}
					className={styles.item}>
					{handler ? (
						<button onClick={handler}>{text}</button>
					) : (
						<NavLink
							onClick={() => handleSamePageRefresh(element)}
							to={path ? `${path}/${element}` : element}>
							{text}
						</NavLink>
					)}
				</li>
			);
		});
	};

	return (
		<nav className={`${styles.nav}${className ? ` ${className}` : ''}`}>
			<ul className={styles.list}>{renderElements()}</ul>
		</nav>
	);
};

export default Navigation;
