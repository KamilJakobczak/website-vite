import { useTranslation } from 'react-i18next';
import EditButton from '../general-purpose/EditButton';
import List from '../lists/List';
import styles from './RecordDetail.module.scss';

interface TranslatorProps {
	data: {
		id: string;
		firstName: string;
		lastName: string;
		books: [];
	};
	editable: boolean;
}

const Translator: React.FC<TranslatorProps> = ({ data, editable }) => {
	const { t } = useTranslation();
	const { id, firstName, lastName, books } = data;
	const editableData = {
		id,
		firstName,
		lastName,
	};

	return (
		<div className={styles.record}>
			<div className={styles.name}>
				<h4>
					{firstName} {lastName}
				</h4>
				{editable ? <EditButton data={editableData} /> : null}
			</div>
			{books.length ? (
				<div className={styles.books}>
					<h5>{t('books')}</h5>
					<List
						data={books}
						nested={true}
					/>
				</div>
			) : null}
		</div>
	);
};
export default Translator;
