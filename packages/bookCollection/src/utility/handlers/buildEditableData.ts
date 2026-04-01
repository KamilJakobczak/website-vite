import { imageApi } from '../../../server';
import { idParser } from './idParser';
import { RecordType } from '../../types';

export const buildEditableData = (
	recordType: RecordType,
	data: Record<string, any>,
	coverSize: string,
) => {
	switch (recordType) {
		case 'author': {
			const {
				id,
				firstName,
				secondName,
				thirdName,
				lastName,
				nationality,
				birthYear,
				bioPages,
			} = data.author;
			return {
				id,
				firstName,
				secondName,
				thirdName,
				lastName,
				nationality,
				birthYear,
				wiki: bioPages?.wiki,
				goodreads: bioPages?.goodreads,
				lubimyczytac: bioPages?.lubimyczytac,
			};
		}
		case 'book': {
			const {
				id,
				firstEdition,
				isbn,
				title,
				language,
				pages,
				authors,
				bookGenres,
				publisher,
				translators,
				titleEnglish,
				titleOriginal,
			} = data.book;
			return {
				id,
				firstEdition,
				isbn,
				title,
				language,
				pages,
				authors: idParser(authors),
				bookGenres: idParser(bookGenres),
				publisher,
				translators: idParser(translators),
				titleEnglish,
				titleOriginal,
				cover: `${imageApi}/covers/${id}/${coverSize}`,
			};
		}
		case 'publisher': {
			const {
				id,
				name,
				books,
				website,
				address: { country, zipCode, city, street, buildingNr, placeNr },
			} = data.publisher;
			return {
				id,
				name,
				books,
				website,
				country,
				zipCode,
				city,
				street,
				buildingNr,
				placeNr,
			};
		}
		case 'genre': {
			const { id, name, namePolish } = data.genre;
			return { id, name, namePolish };
		}
		case 'translator': {
			const { id, firstName, lastName } = data.translator;
			return { id, firstName, lastName };
		}
		case 'bookSeries': {
			const { id, name, booksInBookSeries } = data.singleBookSeries;
			return { id, name, books: booksInBookSeries };
		}
		default:
			return null;
	}
};
