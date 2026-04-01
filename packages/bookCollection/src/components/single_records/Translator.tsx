import { useTranslation } from 'react-i18next';
import List from '../lists/List';
import styles from './RecordDetail.module.scss';

interface TranslatorProps {
	data: {
		id: string;
		firstName: string;
		lastName: string;
		books: [];
	};
}

const Translator: React.FC<TranslatorProps> = ({ data }) => {
	const { t } = useTranslation();
	const { firstName, lastName, books } = data;

	return (
		<div className={styles.record}>
			<div className={styles.name}>
				<h4>
					{firstName} {lastName}
				</h4>
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
