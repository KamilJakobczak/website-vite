import React from 'react';
import { Link } from 'react-router-dom';
import { imageApi } from '../../../server';
import { useCoverResize } from '../../utility/hooks/useCoverResize';
import styles from './Book.module.scss';
import { useTranslation } from 'react-i18next';

interface BookProps {
	data: {
		id: string;
		title: string;
		titleEnglish: string;
		titleOriginal: string;
		language: string;
		authors: {
			id: string;
			firstName: string;
			lastName: string;
		}[];
		translators: {
			id: string;
			firstName: string;
			lastName: string;
		}[];
		bookGenres: {
			id: string;
			name: string;
			namePolish: string;
		}[];
		pages: number;
		publisher: {
			id: string;
			name: string;
		};
		isbn: string;
		firstEdition: number;
		bookSeries: {
			id: string;
			name: string;
			booksInBookSeries: {
				tome: string;
				bookId: string;
			};
		};
	};
}

const Book: React.FC<BookProps> = ({ data }) => {
	const { t } = useTranslation();
	const {
		id,
		title,
		firstEdition,
		isbn,
		language,
		pages,
		authors,
		bookGenres,
		publisher,
		translators,
		titleEnglish,
		titleOriginal,
	} = data;

	const { coverSize } = useCoverResize();

	const showAuthors = () => {
		return authors.map((author, i) => {
			const pathId = author.id.slice(-10);
			return (
				<span key={author.id}>
					<Link
						to={`../authors/${pathId}`}
						state={{ id: author.id }}>
						{author.firstName.concat(' ', author.lastName)}
					</Link>
				</span>
			);
		});
	};

	const showGenres = () => {
		console.log(bookGenres);
		return bookGenres.map((genre, i) => {
			const lastEntry = bookGenres.length - 1;
			return (
				<span key={genre.name}>
					{i === lastEntry ? genre.name : genre.name.concat(',')}
				</span>
			);
		});
	};

	const showPublisher = () => {
		const { id, name } = publisher;
		const pathId = id.slice(-10);
		return (
			<span>
				<Link
					to={`../publishers/${pathId}`}
					state={{ id }}>
					{name}
				</Link>
			</span>
		);
	};

	const showTranslators = () => {
		return translators.map(translator => {
			const pathId = translator.id.slice(-10);
			return (
				<span key={translator.id}>
					<Link
						to={`../translators/${pathId}`}
						state={{ id: translator.id }}>
						{translator.firstName.concat(' ', translator.lastName)}
					</Link>
				</span>
			);
		});
	};

	return (
		<div className={styles.book}>
			<div className={styles.title}>
				<h4>{title}</h4>
			</div>
			<div className={styles.cover}>
				<img
					src={`${imageApi}/covers/${id}/${coverSize}`}
					alt='book_cover'
				/>
			</div>
			<div className={styles.data}>
				<div>
					<p>{authors.length === 1 ? t('author') : t('authors')}</p>
					<span>❖</span>
					<span>{showAuthors()}</span>
				</div>
				<div>
					<p>{bookGenres.length === 1 ? t('genre') : t('genres')}</p>
					<span>❖</span>
					<span>{showGenres()}</span>
				</div>
				<div>
					<p>{t('pages')}</p>
					<span>❖</span>
					<span>{pages}</span>
				</div>
				<div>
					<p>{t('language')}</p>
					<span>❖</span>
					<span>{language}</span>
				</div>
				<div>
					<p>{t('publisher')}</p>
					<span>❖</span>
					<span>{showPublisher()}</span>
				</div>
				<div>
					<p>{t('firstEdition')}</p>
					<span>❖</span>
					<span>{firstEdition}</span>
				</div>
				<div>
					<p>ISBN</p>
					<span>❖</span>
					<span>{isbn}</span>
				</div>
				{translators.length ? (
					<div>
						<p>
							{translators.length === 1
								? t('translator')
								: t('translators')}
						</p>
						<span>❖</span>
						<span>{showTranslators()}</span>
					</div>
				) : null}
				{titleEnglish ? (
					<div>
						<p>{t('englishTitle')}</p>
						<span>❖</span>
						<span>{titleEnglish}</span>
					</div>
				) : null}
				{titleOriginal ? (
					<div>
						<p>{t('originalTitle')}</p>
						<span>❖</span>
						<span>{titleOriginal}</span>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Book;
