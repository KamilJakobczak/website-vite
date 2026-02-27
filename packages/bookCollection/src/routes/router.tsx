import { createBrowserRouter, redirect } from 'react-router-dom';
import BookCollection from '../main';

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

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <BookCollection />,
			children: [
				{
					index: true,
					element: (
						<div className='bookCollection__welcome'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Illo consequatur accusamus, perferendis, nemo magni illum
							quis voluptas sed exercitationem beatae odit temporibus
							sunt, vel eligendi asperiores voluptates deserunt excepturi
							porro vero! Suscipit illum praesentium quidem pariatur
							obcaecati alias ullam, fugit quibusdam! Iste ipsam
							similique commodi soluta possimus voluptates amet quisquam
							deserunt dolorum molestias distinctio, dolor eos
							consequatur odio! Tenetur fugit dolor in, ullam ab
							temporibus, reiciendis dicta iusto quam quaerat odio?
							Necessitatibus corrupti doloremque sit deserunt. Maxime
							explicabo, et laborum ipsa non vero corrupti voluptatem!
							Perferendis officia sunt incidunt aliquid assumenda saepe
							dolorum sapiente! Repellendus inventore vel ipsam corrupti
							ipsum!
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
						<ProtectedRoute
							nestedElement={<AddBookForm flag={Flags.Edit} />}
						/>
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
						<ProtectedRoute
							nestedElement={
								<AddAuthorForm
									className='bookCollection__editAuthor'
									flag={Flags.Edit}
								/>
							}
						/>
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
						<ProtectedRoute
							nestedElement={
								<AddBookSeries
									className='bookCollection__editBookSeries'
									flag={Flags.Edit}
								/>
							}
						/>
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
						<ProtectedRoute
							nestedElement={
								<AddGenreForm
									className='bookCollection__editGenre'
									flag={Flags.Edit}
								/>
							}
						/>
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
							nestedElement={
								<AddPublisherForm
									className='bookCollection__editPublisher'
									flag={Flags.Edit}
								/>
							}
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
							nestedElement={
								<AddTranslatorForm
									className='bookCollection__editTranslator'
									flag={Flags.Edit}
								/>
							}
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
						<ProtectedRoute
							nestedElement={
								<AddAuthorForm
									className='bookCollection__addAuthor'
									flag={Flags.Add}
								/>
							}
						/>
					),
				},
				{
					path: 'add/book',
					element: <ProtectedRoute nestedElement={<AddBook />} />,
					children: [
						{
							index: true,
							element: (
								<ProtectedRoute nestedElement={<AddBookOptions />} />
							),
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
						<ProtectedRoute
							nestedElement={
								<AddBookSeries
									className='bookCollection__addBookSeries'
									flag={Flags.Add}
								/>
							}
						/>
					),
				},
				{
					path: 'add/genre',
					element: (
						<ProtectedRoute
							nestedElement={
								<AddGenreForm
									className='bookCollection__addGenre'
									flag={Flags.Add}
								/>
							}
						/>
					),
				},
				{
					path: 'add/publisher',
					element: (
						<ProtectedRoute
							nestedElement={
								<AddPublisherForm
									className='bookCollection__addPublisher'
									flag={Flags.Add}
								/>
							}
						/>
					),
				},
				{
					path: 'add/translator',
					element: (
						<ProtectedRoute
							nestedElement={
								<AddTranslatorForm
									className='bookCollection__addTranslator'
									flag={Flags.Add}
								/>
							}
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
					path: 'user/logout',
					loader: () => {
						return redirect('/');
					},
				},
				{
					path: 'user/signup',
					element: <SignUp />,
				},
			],
		},
	],
	{
		basename: '/collection',
	},
);
