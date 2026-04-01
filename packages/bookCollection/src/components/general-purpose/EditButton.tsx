import { Link, useLocation } from 'react-router-dom';
import editIcon from '../../assets/edit50.png';
interface EditButtonProps {
	data: object;
	className?: string;
}
const EditButton: React.FC<EditButtonProps> = ({ data, className }) => {
	const location = useLocation();

	return (
		<Link
			className={className}
			to={`${location.pathname}/edit`}
			state={data}>
			<img
				src={editIcon}
				alt='edit icon'
			/>
		</Link>
	);
};
export default EditButton;
