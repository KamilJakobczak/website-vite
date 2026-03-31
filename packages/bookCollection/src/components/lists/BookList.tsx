import { useState, useEffect } from 'react';
import CustomError from '../general-purpose/CustomError';
import LoadingSpinner from '../general-purpose/LoadingSpinner';
import BookFilters from '../filter/BookFilters';
import List from './List';
import Button from '../general-purpose/Button';
import { useLocation } from 'react-router-dom';
import { ListProps } from './CollectionList';
import { usePaginatedQueries } from '../../utility/hooks/usePaginatedQueries';
import listStyles from './CollectionList.module.scss';
import styles from './BookList.module.scss';
import { CollectionsClasses } from '../../utility/enums';

const BookList: React.FC<ListProps> = ({ paginatedQuery, listClass }) => {
	const location = useLocation();

	const [filtersVisible, setFiltersVisible] = useState(false);
	const [higherWidth, setHigherWidth] = useState(false);

	const { data, error, loading, refetch, pagination } = usePaginatedQueries(
		paginatedQuery,
		listClass,
	);

	// Refetch data if needed
	useEffect(() => {
		if (location.state?.refetch) {
			refetch();
		}
	}, [location.state, refetch]);

	// Handle list filters visability
	const handleFiltersClick = () => {
		setFiltersVisible(prevState => !prevState);
	};
	const hideFilters = () => {
		const width = window.innerWidth;
		if (width < 1280) {
			setFiltersVisible(false);
		}
	};
	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width >= 1280) {
				setFiltersVisible(true);
				setHigherWidth(true);
			} else {
				setFiltersVisible(false);
				setHigherWidth(false);
			}
		};
		handleResize();
		// Set initial state based on current window size
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const showFilters = () => (
		<>
			{filtersVisible && !higherWidth && (
				<Button
					className=''
					text='hide filters'
					handleClick={handleFiltersClick}
				/>
			)}
			{filtersVisible ? (
				<BookFilters
					refetchQuery={refetch}
					hideWhenDone={hideFilters}
				/>
			) : (
				<Button
					className=''
					text='show filters'
					handleClick={handleFiltersClick}
				/>
			)}
		</>
	);

	const showList = () => {
		if (loading) {
			return <LoadingSpinner />;
		} else {
			return (
				<>
					<div className={styles.filters}>{showFilters()}</div>
					<div
						className={`${listStyles.collectionList} ${styles.bookList} ${listStyles.bookList}`}>
						<List
							data={data}
							pagination={pagination}
							listClass={CollectionsClasses.Books}
						/>
					</div>
					{error && <CustomError text={error.message} />}
				</>
			);
		}
	};

	return <div className={styles.books}>{showList()}</div>;
};

export default BookList;
