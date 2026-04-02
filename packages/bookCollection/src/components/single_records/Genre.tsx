import { useTranslation } from 'react-i18next';
import List from '../lists/List';
import styles from './RecordDetail.module.scss';
import listStyles from '../lists/CollectionList.module.scss';

interface GenreProps {
	data: {
		id: string;
		name: string;
		namePolish: string;
		books: [];
	};
}

const Genre: React.FC<GenreProps> = ({ data }) => {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;
	const { name, namePolish, books } = data;

	return (
		<div className={styles.record}>
			<div className={styles.name}>
				<h4>
					{currentLanguage === 'pl'
						? namePolish
							? namePolish
							: name
						: name}
				</h4>
			</div>
			{/* <div className={styles.data}></div> */}
			{!books.length ? null : (
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

export default Genre;
