import { checkURL } from '../../utility/handlers/checkURL';
import List from '../lists/List';
import { useTranslation } from 'react-i18next';
import styles from './RecordDetail.module.scss';
import listStyles from '../lists/CollectionList.module.scss';
interface AuthorProps {
	data: {
		id: string;
		firstName: string;
		secondName?: string;
		thirdName?: string;
		lastName: string;
		nationality?: string;
		birthYear?: number;
		bioPages?: {
			wiki: string;
			goodreads: string;
			lubimyczytac: string;
		};
		books: [];
	};
}

const Author: React.FC<AuthorProps> = ({ data }) => {
	const { t } = useTranslation();
	const {
		firstName,
		secondName,
		thirdName,
		lastName,
		nationality,
		birthYear,
		books,
		bioPages,
	} = data;

	return (
		<div className={styles.record}>
			<div className={styles.name}>
				<h4>
					{firstName} {secondName} {thirdName} {lastName}
				</h4>
			</div>
			<div className={styles.data}>
				<div className={styles.nationality}>
					<p>{t('nationality')}</p>
					<span>❖</span>
					<span>{nationality}</span>
				</div>
				<div>
					<p>{t('birthYear')}</p>
					<span>❖</span>
					<span>{birthYear}</span>
				</div>
				{bioPages ? (
					<div className={styles.bioPages}>
						{bioPages.wiki ? (
							<a
								href={checkURL(bioPages.wiki)}
								rel='noreferrer noopener'
								target='_blank'>
								wikipedia
							</a>
						) : null}
						{bioPages.goodreads ? (
							<a
								href={checkURL(bioPages.goodreads)}
								rel='noreferrer noopener'
								target='_blank'>
								goodreads
							</a>
						) : null}
						{bioPages.lubimyczytac ? (
							<a
								href={checkURL(bioPages.lubimyczytac)}
								rel='noreferrer noopener'
								target='_blank'>
								lubimyczytac
							</a>
						) : null}
					</div>
				) : null}
			</div>
			{books.length > 0 ? (
				<div className={listStyles.collectionList}>
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

export default Author;
