import Button from '../general-purpose/Button';
import styles from './AddBookOptions.module.scss';

const AddBookOptions: React.FC = () => {
	return (
		<div className={styles.options}>
			<Button
				linkPath='/collection/add/book/upload'
				text='upload an epub file'
			/>
			<Button
				linkPath='/collection/add/book/manual'
				text='input info by yourself'
			/>
		</div>
	);
};

export default AddBookOptions;
