import { useEffect, useMemo, useState } from 'react';
import { DocumentNode } from 'graphql';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { useStatus } from '../../main';
import { imageApi } from '../../../server';
import { idParser } from '../../utility/handlers/idParser';
import { useCoverResize } from '../../utility/hooks/useCoverResize';
import { LOAD_USER_BOOK_DETAILS } from '../../GraphQL/queries';
import { DELETE_RECORD } from '../../GraphQL/mutations';
import Author from './Author';
import Book from './Book';
import Publisher from './Publisher';
import Genre from './Genre';
import Translator from './Translator';
import BookSeries from './BookSeries';
import CustomError from '../general-purpose/CustomError';
import DeleteButton from '../general-purpose/DeleteButton';
import EditButton from '../general-purpose/EditButton';
import LoadingSpinner from '../general-purpose/LoadingSpinner';
import Popup from '../general-purpose/PopUp';
import UserActions from '../user/UserActions';
import UserBookDetails from '../user/UserBookDetails';
import SuccessMessage from '../general-purpose/SuccessMessage';
import { RecordType } from '../../types';
import styles from './SingleRecord.module.scss';

interface SingleRecordProps {
	query: DocumentNode;
}

const SingleRecord: React.FC<SingleRecordProps> = ({ query }) => {
	const navigate = useNavigate();
	const location = useLocation() as {
		state?: { id?: string; refetch?: boolean };
	};
	const [userError, setUserError] = useState('');
	const [popupActive, setPopupActive] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	const { loggedIn } = useStatus();
	const { coverSize } = useCoverResize();
	const id = location.state?.id;
	const shouldRefetch = location.state?.refetch;

	const { loading, error, data, refetch } = useQuery(query, {
		variables: { id },
		skip: !id,
	});

	const {
		loading: loadingUserBookDetails,
		error: errorUserBookDetails,
		data: dataUserBookDetails,
		refetch: refetchUserBookDetails,
	} = useQuery(LOAD_USER_BOOK_DETAILS, {
		variables: { bookId: id },
		skip: !id,
	});

	const details = dataUserBookDetails?.userBookDetails.userBookDetails;

	const [deleteRecord] = useMutation(DELETE_RECORD, {
		onCompleted() {
			onCompletedDel();
		},
		onError(err) {
			console.error('Deletion error', err);
			setUserError('An error occured while deleting the record');
		},
	});

	useEffect(() => {
		if (shouldRefetch) {
			refetch();
			refetchUserBookDetails();
		}
	}, [shouldRefetch, refetch, refetchUserBookDetails]);

	const record = (): RecordType => {
		if (!data) return undefined;
		if (data.author) return 'author';
		if (data.book) return 'book';
		if (data.publisher) return 'publisher';
		if (data.genre) return 'genre';
		if (data.translator) return 'translator';
		if (data.singleBookSeries) return 'bookSeries';
		return undefined;
	};
	const recordType: RecordType = !loading ? record() : undefined;

	const buildEditableData = () => {
		if (!data || !recordType) return null;
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

	const renderedElement = useMemo(() => {
		if (!data) return null;
		switch (recordType) {
			case 'author':
				return <Author data={data.author} />;
			case 'book':
				return <Book data={data.book} />;
			case 'publisher':
				return <Publisher data={data.publisher} />;
			case 'genre':
				return <Genre data={data.genre} />;
			case 'translator':
				return <Translator data={data.translator} />;
			case 'bookSeries':
				return <BookSeries data={data.singleBookSeries} />;
			default:
				return null;
		}
	}, [recordType, data]);

	const handleDelete = () => {
		try {
			if (!recordType) {
				setUserError('Record type is undefined');
				return;
			}
			if (!id) {
				setUserError('Record id is undefined');
				return;
			}
			deleteRecord({ variables: { model: recordType, id } });
		} catch (error: unknown) {
			console.error(
				'Error:',
				error instanceof Error ? error.message : error,
			);
			setUserError('An error occured while trying to delete the record');
		}
	};

	const onCompletedDel = () => {
		const recordTypeLower = recordType?.toLowerCase() ?? '';
		const linkRedirect = `/collection/${recordTypeLower}`;
		const cappedRecordType =
			recordType && recordType.charAt(0).toUpperCase() + recordType.slice(1);
		setPopupActive(false);
		setSuccessMessage(`Deletion of ${cappedRecordType} done!`);
		setTimeout(() => {
			setSuccessMessage('');
			navigate(linkRedirect, { state: { refetch: true } });
		}, 3000);
	};

	const showErrors = () => {
		if (error) return <CustomError text={error.message} />;
		if (errorUserBookDetails)
			return <CustomError text={errorUserBookDetails.message} />;
		if (userError) return <CustomError text={userError} />;
		return null;
	};
	const editableData = buildEditableData();
	return (
		<div className={styles.singleRecord}>
			<div className={styles.container}>
				{!id ? (
					<p>No record selected.</p>
				) : loading ? (
					<LoadingSpinner />
				) : renderedElement ? (
					renderedElement
				) : (
					<p>No data found.</p>
				)}
				{!loading && id && loggedIn && (
					<>
						{editableData && (
							<EditButton
								data={editableData}
								className={styles.editBtn}
							/>
						)}
						<DeleteButton
							id={id}
							className={styles.deleteBtn}
							popupToggle={setPopupActive}
							popupState={popupActive}
						/>
					</>
				)}
				{successMessage ? (
					<SuccessMessage
						item=''
						successMessage={successMessage}
					/>
				) : null}
			</div>
			{data?.book &&
				!loading &&
				!loadingUserBookDetails &&
				!details &&
				loggedIn === true && <UserActions recordId={id!} />}
			{data?.book && !loadingUserBookDetails && details && (
				<UserBookDetails details={details} />
			)}
			{showErrors()}
			{popupActive && (
				<Popup
					popupToggle={setPopupActive}
					handleDelete={handleDelete}
				/>
			)}
		</div>
	);
};

export default SingleRecord;
