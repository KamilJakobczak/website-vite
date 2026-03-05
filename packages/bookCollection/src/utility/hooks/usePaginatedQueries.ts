import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { DocumentNode } from 'graphql';
import { CollectionsClasses } from '../enums';

interface DataInterface {
	id: string;
	__typename: string;
}

interface FeedConfig {
	dataKey: string;
	itemsKey: string;
	offset: number;
}

const feedConfigMap: Record<CollectionsClasses, FeedConfig> = {
	[CollectionsClasses.Authors]: {
		dataKey: 'authorsFeed',
		itemsKey: 'authors',
		offset: 30,
	},
	[CollectionsClasses.Books]: {
		dataKey: 'booksFeed',
		itemsKey: 'books',
		offset: 20,
	},
	[CollectionsClasses.BookSeries]: {
		dataKey: 'bookSeriesFeed',
		itemsKey: 'bookSeries',
		offset: 20,
	},
	[CollectionsClasses.Genres]: {
		dataKey: 'genresFeed',
		itemsKey: 'genres',
		offset: 30,
	},
	[CollectionsClasses.Publishers]: {
		dataKey: 'publishersFeed',
		itemsKey: 'publishers',
		offset: 30,
	},
	[CollectionsClasses.Translators]: {
		dataKey: 'translatorsFeed',
		itemsKey: 'translators',
		offset: 30,
	},
};

const defaultConfig = feedConfigMap[CollectionsClasses.Books];

export const usePaginatedQueries = (
	paginatedQuery: DocumentNode,
	listClass: CollectionsClasses,
) => {
	const [activePage, setActivePage] = useState(1);
	const [data, setData] = useState<DataInterface[]>([]);
	const [totalPages, setTotalPages] = useState(0);

	const { dataKey, itemsKey, offset } =
		feedConfigMap[listClass] ?? defaultConfig;

	const {
		data: QueryData,
		error,
		loading,
		refetch,
	} = useQuery(paginatedQuery, {
		variables: {
			input: {
				offset: (activePage - 1) * offset,
				limit: offset,
			},
		},
		fetchPolicy: 'cache-and-network',
	});

	useEffect(() => {
		if (QueryData && !loading) {
			const feed = QueryData[dataKey];
			if (feed) {
				setData(feed[itemsKey]);
				setTotalPages(Math.ceil(feed.totalCount / offset));
			}
		}
	}, [QueryData, loading, dataKey, itemsKey, offset]);

	return {
		data,
		error,
		loading,
		refetch,
		pagination: { activePage, totalPages, setActivePage },
	};
};
