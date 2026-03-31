import { Link, useNavigate } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps {
	className?: string;
	handleClick?: () => void;
	linkPath?: string;
	linkEnd?: string;
	text?: string;
	goBack?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	className,
	handleClick,
	linkPath,
	linkEnd,
	text,
	goBack,
}) => {
	const path = `${linkPath}/${linkEnd || ''}`;
	const navigate = useNavigate();

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!goBack && handleClick) {
			handleClick();
		} else if (goBack) {
			navigate(-1);
		}
	};

	if (linkPath) {
		return (
			<Link
				className={`${styles.button}${className ? ` ${className}` : ''}`}
				to={path}>
				{text}
			</Link>
		);
	}

	return (
		<button
			className={`${styles.button}${className ? ` ${className}` : ''}`}
			onClick={handleSubmit}>
			{text || 'submit'}
		</button>
	);
};

export default Button;
