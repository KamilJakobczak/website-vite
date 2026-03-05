import { redirect, type RouteObject } from 'react-router-dom';

import {
	LOAD_AUTHOR,
	LOAD_AUTHORS_FEED,
	LOAD_BOOK,
	LOAD_BOOKS_FEED,
	LOAD_BOOKSERIES_FEED,
	LOAD_GENRE,
	LOAD_GENRES_FEED,
	LOAD_PUBLISHER,
	LOAD_PUBLISHERS_FEED,
	LOAD_SINGLEBOOKSERIES,
	LOAD_TRANSLATOR,
	LOAD_TRANSLATORS_FEED,
} from '../GraphQL/queries';

import SingleRecord from '../components/single_records/SingleRecord';
import AddBookForm from '../components/adding_records/AddBookForm';
import AddPublisherForm from '../components/adding_records/AddPublisherForm';
import NewRecords from '../components/adding_records/NewRecords';
import AddGenreForm from '../components/adding_records/AddGenreForm';
import AddTranslatorForm from '../components/adding_records/AddTranslatorForm';
import BookList from '../components/lists/BookList';
import CollectionList from '../components/lists/CollectionList';
import UploadBook from '../components/adding_records/UploadBook';
import AddBook from '../components/adding_records/AddBook';
import AddBookOptions from '../components/adding_records/AddBookOptions';
import AddAuthorForm from '../components/adding_records/AddAuthorForm';
import LogIn from '../components/user/LogIn';
import SignUp from '../components/user/SignUp';
import { ProtectedRoute } from './ProtectedRoute';
import UserLibrary from '../components/user/UserLibrary';
import Profile from '../components/user/Profile';
import AddBookSeries from '../components/adding_records/AddBookSeries';
import { CollectionsClasses, Flags } from '../utility/enums';
import styles from '../Main.module.scss';

export const bookCollectionRoutes: RouteObject[] = [
	{
		index: true,
		element: (
			<div className={styles.welcome}>
				<h2>Welcome to the Collection</h2>
				<p>
					A place to browse, manage and keep track of books across the
					family library. Search by title, author or genre, add new
					records, and organise everything in one place.
				</p>
				<p>
					Use the navigation above to explore the catalogue or log in to
					manage your personal reading list.
				</p>
			</div>
		),
	},
	{
		path: 'books',
		element: (
			<BookList
				paginatedQuery={LOAD_BOOKS_FEED}
				listClass={CollectionsClasses.Books}
			/>
		),
	},
	{
		path: 'books/:id',
		element: <SingleRecord query={LOAD_BOOK} />,
	},
	{
		path: 'books/:id/edit',
		element: (
			<ProtectedRoute nestedElement={<AddBookForm flag={Flags.Edit} />} />
		),
	},
	{
		path: 'authors',
		element: (
			<CollectionList
				paginatedQuery={LOAD_AUTHORS_FEED}
				listClass={CollectionsClasses.Authors}
			/>
		),
	},
	{
		path: 'authors/:id',
		element: <SingleRecord query={LOAD_AUTHOR} />,
	},
	{
		path: 'authors/:id/edit',
		element: (
			<ProtectedRoute nestedElement={<AddAuthorForm flag={Flags.Edit} />} />
		),
	},
	{
		path: 'bookseries',
		element: (
			<CollectionList
				paginatedQuery={LOAD_BOOKSERIES_FEED}
				listClass={CollectionsClasses.BookSeries}
			/>
		),
	},
	{
		path: 'bookseries/:id',
		element: <SingleRecord query={LOAD_SINGLEBOOKSERIES} />,
	},
	{
		path: 'bookseries/:id/edit',
		element: (
			<ProtectedRoute nestedElement={<AddBookSeries flag={Flags.Edit} />} />
		),
	},
	{
		path: 'genres',
		element: (
			<CollectionList
				paginatedQuery={LOAD_GENRES_FEED}
				listClass={CollectionsClasses.Genres}
			/>
		),
	},
	{
		path: 'genres/:id',
		element: <SingleRecord query={LOAD_GENRE} />,
	},
	{
		path: 'genres/:id/edit',
		element: (
			<ProtectedRoute nestedElement={<AddGenreForm flag={Flags.Edit} />} />
		),
	},
	{
		path: 'publishers',
		element: (
			<CollectionList
				paginatedQuery={LOAD_PUBLISHERS_FEED}
				listClass={CollectionsClasses.Publishers}
			/>
		),
	},
	{
		path: 'publishers/:id',
		element: <SingleRecord query={LOAD_PUBLISHER} />,
	},
	{
		path: 'publishers/:id/edit',
		element: (
			<ProtectedRoute
				nestedElement={<AddPublisherForm flag={Flags.Edit} />}
			/>
		),
	},
	{
		path: 'translators',
		element: (
			<CollectionList
				paginatedQuery={LOAD_TRANSLATORS_FEED}
				listClass={CollectionsClasses.Translators}
			/>
		),
	},
	{
		path: 'translators/:id',
		element: <SingleRecord query={LOAD_TRANSLATOR} />,
	},
	{
		path: 'translators/:id/edit',
		element: (
			<ProtectedRoute
				nestedElement={<AddTranslatorForm flag={Flags.Edit} />}
			/>
		),
	},
	{
		path: 'add',
		element: <ProtectedRoute nestedElement={<NewRecords />} />,
	},
	{
		path: 'add/author',
		element: (
			<ProtectedRoute nestedElement={<AddAuthorForm flag={Flags.Add} />} />
		),
	},
	{
		path: 'add/book',
		element: <ProtectedRoute nestedElement={<AddBook />} />,
		children: [
			{
				index: true,
				element: <ProtectedRoute nestedElement={<AddBookOptions />} />,
			},
			{
				path: 'upload',
				element: <ProtectedRoute nestedElement={<UploadBook />} />,
			},
			{
				path: 'manual',
				element: (
					<ProtectedRoute
						nestedElement={<AddBookForm flag={Flags.Add} />}
					/>
				),
			},
		],
	},
	{
		path: 'add/bookseries',
		element: (
			<ProtectedRoute nestedElement={<AddBookSeries flag={Flags.Add} />} />
		),
	},
	{
		path: 'add/genre',
		element: (
			<ProtectedRoute nestedElement={<AddGenreForm flag={Flags.Add} />} />
		),
	},
	{
		path: 'add/publisher',
		element: (
			<ProtectedRoute
				nestedElement={<AddPublisherForm flag={Flags.Add} />}
			/>
		),
	},
	{
		path: 'add/translator',
		element: (
			<ProtectedRoute
				nestedElement={<AddTranslatorForm flag={Flags.Add} />}
			/>
		),
	},
	{
		path: 'user/profile',
		element: <Profile />,
		children: [
			{
				path: 'library',
				element: <UserLibrary />,
			},
		],
	},
	{
		path: 'user/login',
		element: <LogIn />,
	},
	{
		path: 'user/signup',
		element: <SignUp />,
	},
];
