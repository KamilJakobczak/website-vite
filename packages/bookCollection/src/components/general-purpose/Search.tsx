import { useLazyQuery } from '@apollo/client';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LOAD_SEARCH } from '../../GraphQL/queries';
import { imageApi } from '../../../server';
import CustomError from './CustomError';
import LoadingSpinner from './LoadingSpinner';
import { RecordValues } from '../lists/List';
import { useTranslation } from 'react-i18next';
import BookThumbnail from '../../assets/thumbnails/book.svg?react';
import styles from './Search.module.scss';

enum SearchCategories {
	Author = 'Author',
	Book = 'Book',
	Publisher = 'Publisher',
}

const CATEGORY_KEYS: Record<SearchCategories, string> = {
	[SearchCategories.Author]: 'author',
	[SearchCategories.Book]: 'book',
	[SearchCategories.Publisher]: 'publisher',
};

const BookResultThumbnail: React.FC<{ bookId: string }> = ({ bookId }) => {
	const [hasError, setHasError] = useState(false);

	if (hasError) {
		return <BookThumbnail className={styles.resultThumbnail} />;
	}

	return (
		<img
			className={styles.resultThumbnail}
			src={`${imageApi}/covers/${bookId}/thumbnail`}
			alt=''
			onError={() => setHasError(true)}
		/>
	);
};

const Search: React.FC = () => {
	const { t } = useTranslation();
	const [searchInput, setSearchInput] = useState('');
	const [activeCategory, setActiveCategory] = useState<SearchCategories>(
		SearchCategories.Book,
	);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isResultsOpen, setIsResultsOpen] = useState(false);

	const dropdownRef = useRef<HTMLUListElement>(null);
	const searchRef = useRef<HTMLDivElement>(null);

	const [loadSearch, { called, loading, data, error }] = useLazyQuery(
		LOAD_SEARCH,
		{
			variables: { contains: searchInput, type: activeCategory },
		},
	);

	// Close dropdown and results on outside clicks
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			if (
				dropdownRef.current &&
				!dropdownRef.current.parentElement?.contains(target)
			) {
				setIsDropdownOpen(false);
			}
			if (searchRef.current && !searchRef.current.contains(target)) {
				setIsResultsOpen(false);
			}
		};

		document.body.addEventListener('click', handleClickOutside);
		return () => {
			document.body.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const handleOptionClick = (category: SearchCategories) => {
		setActiveCategory(category);
		setIsDropdownOpen(false);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
		if (e.target.value.length >= 2) {
			setTimeout(() => {
				loadSearch();
			}, 200);
			setIsResultsOpen(true);
		}
	};

	const showSearchResults = () => {
		if (!data || !data.search) return null;

		const dataArr = data.search as RecordValues[];

		return dataArr.map((record: RecordValues) => {
			let linkPath = '';
			switch (activeCategory) {
				case SearchCategories.Author:
					linkPath = 'authors';
					break;
				case SearchCategories.Book:
					linkPath = 'books';
					break;
				case SearchCategories.Publisher:
					linkPath = 'publishers';
					break;
				default:
					break;
			}
			const isBook = activeCategory === SearchCategories.Book;
			return (
				<div
					className={styles.resultItem}
					key={record.id}>
					<Link
						to={`${linkPath}/${record.id.slice(-10)}`}
						state={{ id: record.id }}
						onClick={() => {
							setSearchInput('');
							setIsResultsOpen(false);
						}}>
						{isBook && <BookResultThumbnail bookId={record.id} />}
						{record.title ? record.title : null}
						{record.lastName
							? `${record.lastName} ${record.firstName}`
							: null}
						{record.name ? record.name : null}
					</Link>
				</div>
			);
		});
	};

	return (
		<div
			className={styles.search}
			ref={searchRef}>
			<div className={styles.searchBox}>
				<div className={styles.dropdown}>
					<div
						className={styles.dropdownDefault}
						onClick={() => {
							setIsDropdownOpen(!isDropdownOpen);
							if (window.innerWidth < 1024) {
								setIsResultsOpen(false);
							}
						}}>
						{t(CATEGORY_KEYS[activeCategory])}
					</div>
					<ul
						ref={dropdownRef}
						className={`${styles.dropdownList}${
							isDropdownOpen ? ` ${styles.open}` : ''
						}`}>
						{Object.values(SearchCategories).map(category => (
							<li
								key={category}
								onClick={() => handleOptionClick(category)}>
								{t(CATEGORY_KEYS[category])}
							</li>
						))}
					</ul>
				</div>
				<div className={styles.searchField}>
					<input
						className={styles.input}
						placeholder={t('search')}
						value={searchInput}
						onChange={e => handleInputChange(e)}
						type='text'
					/>
					<i className={`fas fa-search ${styles.icon}`}></i>
					<div
						className={`${styles.results}${
							isResultsOpen ? ` ${styles.open}` : ''
						}`}>
						{called && error && <CustomError text={error.message} />}
						{called && loading && !data && <LoadingSpinner />}
						{data && !loading && !error && showSearchResults()}
					</div>
				</div>
			</div>
			{isResultsOpen && (
				<div
					className={styles.backdrop}
					onClick={() => {
						setIsResultsOpen(false);
						setIsDropdownOpen(false);
					}}
				/>
			)}
		</div>
	);
};

export default Search;
