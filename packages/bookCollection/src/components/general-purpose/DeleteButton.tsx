import { Trash2 } from 'lucide-react';
interface DeleteButtonProps {
	id: string;
	className?: string;
	popupToggle: React.Dispatch<React.SetStateAction<boolean>>;
	popupState: boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
	id,
	className,
	popupState,
	popupToggle,
}) => {
	return (
		<button
			className={className}
			onClick={() => popupToggle(true)}>
			<Trash2 />
		</button>
	);
};

export default DeleteButton;
