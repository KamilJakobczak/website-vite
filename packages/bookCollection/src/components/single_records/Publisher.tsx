import { useTranslation } from 'react-i18next';
import { checkURL } from '../../utility/handlers/checkURL';
import List from '../lists/List';
import styles from './RecordDetail.module.scss';
import listStyles from '../lists/CollectionList.module.scss';
interface PublisherProps {
	data: {
		id: string;
		address: {
			country: string;
			zipCode: string;
			city: string;
			street: string;
			buildingNr: string;
			placeNr: number;
		};
		name: string;
		website: string;
		books: [];
	};
}

const Publisher: React.FC<PublisherProps> = ({ data }) => {
	const { t } = useTranslation();
	const { name, address, books, website } = data;
	const { country, zipCode, city, street, buildingNr, placeNr } = address;

	return (
		<div className={styles.record}>
			<div className={styles.name}>
				<h4>{name}</h4>
			</div>
			<div className={styles.data}>
				<div>
					<p>{t('street')}</p>
					<span>❖</span>
					<span>
						{street} {buildingNr}
						{placeNr ? `/${placeNr}` : null}
					</span>
				</div>
				<div>
					<p>{t('city')}</p>
					<span>❖</span>
					<span>{city}</span>
				</div>
				<div>
					<p>{t('zipCode')}</p>
					<span>❖</span>
					<span>{zipCode}</span>
				</div>
				<div>
					<p>{t('country')}</p>
					<span>❖</span>
					<span>{country}</span>
				</div>
				{website ? (
					<div className={styles.bioPages}>
						<a
							href={checkURL(website)}
							rel='noreferrer noopener'
							target='_blank'>
							{t('website')}
						</a>
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

export default Publisher;
