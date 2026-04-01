import { useTranslation } from 'react-i18next';
import List from '../lists/List';
import styles from './RecordDetail.module.scss';
import listStyles from '../lists/CollectionList.module.scss';

interface BookSeriesProps {
	data: {
		id: string;
		name: string;
		booksInBookSeries: [];
		books: [];
	};
}

const BookSeries: React.FC<BookSeriesProps> = ({ data }) => {
	const { t } = useTranslation();
	const { name, booksInBookSeries, books } = data;

	return (
		<div className={styles.record}>
			<div className={styles.name}>
				<h4>{name}</h4>
			</div>
			{!booksInBookSeries.length ? null : (
				<div className={listStyles.collectionList}>
					<h5>{t('books')}</h5>
					<List
						data={books}
						nested={true}
					/>
				</div>
			)}
		</div>
	);
};

export default BookSeries;
