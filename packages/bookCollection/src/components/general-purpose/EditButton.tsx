import { Link, useLocation } from 'react-router-dom';
import { PenLine } from 'lucide-react';
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
			<PenLine />
		</Link>
	);
};
export default EditButton;
