import deleteIcon from '../../assets/delete50.png';

interface DeleteButtonProps {
  id: string;
  className?: string;
  popupToggle: React.Dispatch<React.SetStateAction<boolean>>;
  popupState: boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, className, popupState, popupToggle }) => {
  return (
    <div className={className} onClick={() => popupToggle(true)}>
      <img src={deleteIcon} alt='delete icon' />
    </div>
  );
};

export default DeleteButton;
