import { useTranslation } from 'react-i18next';
import Checkbox from './Checkbox';
import styles from './Filter.module.scss';

interface FilterProps {
	handleCheckboxChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		name: string,
	) => void;
	filterOptions: {
		name: string;
		data: {
			id: string;
			name: string;
			namePolish?: string;
		}[];
	};
}

const Filter: React.FC<FilterProps> = ({
	handleCheckboxChange,
	filterOptions,
}) => {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;
	const { name, data } = filterOptions;
	const isPublishers = name === 'publishers';

	const translatedName = () => {
		if (name === 'genres') {
			return t('genres');
		}
		if (name === 'publishers') {
			return t('publishers');
		}
	};

	return (
		<div
			className={`${styles.category}${
				isPublishers ? ` ${styles.publishers}` : ''
			}`}>
			<legend className={styles.legend}>{translatedName()}</legend>
			{data.map(item => {
				return (
					<div
						key={item.name}
						className={styles.item}>
						<label
							className={styles.formControl}
							htmlFor={item.name}>
							<Checkbox
								name={name}
								id={item.id}
								handleCheckboxChange={handleCheckboxChange}
							/>
							<span>
								{currentLanguage === 'pl'
									? item.namePolish
										? item.namePolish
										: item.name
									: item.name}
							</span>
						</label>
					</div>
				);
			})}
		</div>
	);
};
export default Filter;
