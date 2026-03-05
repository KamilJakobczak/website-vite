import styles from './AZ-list.module.scss';

interface AZListProps {
	letter: string;
	sort: React.Dispatch<React.SetStateAction<string>>;
}

const AZList: React.FC<AZListProps> = ({ letter, sort }) => {
	const letters = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	const handleClick = (clickedLetter: string) => {
		if (letter === clickedLetter) {
			sort('');
		} else {
			sort(clickedLetter);
		}
	};

	return (
		<div className={styles.az}>
			{letters.map(l => {
				const isActive = letter === l;
				return (
					<span
						className={`bookCollection__list__az_element${
							isActive ? ' active' : ''
						}`}
						onClick={() => handleClick(l)}
						key={l}>
						{l}
					</span>
				);
			})}
		</div>
	);
};

export default AZList;
