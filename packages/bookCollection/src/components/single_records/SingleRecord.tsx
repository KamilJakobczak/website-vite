// ─── Libraries & Hooks ───────────────────────────────────────────────────────
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { DocumentNode } from 'graphql';

// ─── Internal Hooks ──────────────────────────────────────────────────────────
import { useStatus } from '../../main';
import { useCoverResize } from '../../utility/hooks/useCoverResize';

// ─── GraphQL ─────────────────────────────────────────────────────────────────
import { LOAD_USER_BOOK_DETAILS } from '../../GraphQL/queries';
import { DELETE_RECORD } from '../../GraphQL/mutations';

// ─── Record Components ───────────────────────────────────────────────────────
import Author from './Author';
import Book from './Book';
import BookSeries from './BookSeries';
import Genre from './Genre';
import Publisher from './Publisher';
import Translator from './Translator';

// ─── General Purpose Components ──────────────────────────────────────────────
import CustomError from '../general-purpose/CustomError';
import DeleteButton from '../general-purpose/DeleteButton';
import EditButton from '../general-purpose/EditButton';
import LoadingSpinner from '../general-purpose/LoadingSpinner';
import Popup from '../general-purpose/PopUp';
import SuccessMessage from '../general-purpose/SuccessMessage';

// ─── User Components ─────────────────────────────────────────────────────────
import UserActions from '../user/UserActions';
import UserBookDetails from '../user/UserBookDetails';

// ─── Utilities & Types ───────────────────────────────────────────────────────
import { buildEditableData } from '../../utility/handlers/buildEditableData';
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

	// ─── State ────────────────────────────────────────────────────────────────
	const [userError, setUserError] = useState('');
	const [popupActive, setPopupActive] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');

	// ─── Derived Values ───────────────────────────────────────────────────────
	const { loggedIn } = useStatus();
	const { coverSize } = useCoverResize();
	const id = location.state?.id;
	const shouldRefetch = location.state?.refetch;

	// ─── Queries ──────────────────────────────────────────────────────────────
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

	// ─── Mutations ────────────────────────────────────────────────────────────
	const [deleteRecord] = useMutation(DELETE_RECORD, {
		onCompleted() {
			onCompletedDel();
		},
		onError(err) {
			console.error('Deletion error', err);
			setUserError('An error occured while deleting the record');
		},
	});

	// ─── Effects ──────────────────────────────────────────────────────────────
	useEffect(() => {
		if (shouldRefetch) {
			refetch();
			refetchUserBookDetails();
		}
	}, [shouldRefetch, refetch, refetchUserBookDetails]);

	// ─── Record Type Resolution ───────────────────────────────────────────────
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

	const editableData =
		!loading && recordType && data
			? buildEditableData(recordType, data, coverSize)
			: null;

	// ─── Rendered Record Element ──────────────────────────────────────────────
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

	// ─── Handlers ─────────────────────────────────────────────────────────────
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

	// ─── Render ───────────────────────────────────────────────────────────────
	return (
		<div className={styles.singleRecord}>
			<div className={styles.container}>
				{/* Main record content */}
				{!id ? (
					<p>No record selected.</p>
				) : loading ? (
					<LoadingSpinner />
				) : renderedElement ? (
					renderedElement
				) : (
					<p>No data found.</p>
				)}

				{/* Edit & delete actions */}
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

				{/* Post-deletion success message */}
				{successMessage ? (
					<SuccessMessage
						item=''
						successMessage={successMessage}
					/>
				) : null}
			</div>

			{/* User book actions (add to library) */}
			{data?.book &&
				!loading &&
				!loadingUserBookDetails &&
				!details &&
				loggedIn === true && <UserActions recordId={id!} />}

			{/* User book details (rating, status, etc.) */}
			{data?.book && !loadingUserBookDetails && details && (
				<UserBookDetails details={details} />
			)}

			{showErrors()}

			{/* Delete confirmation popup */}
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
