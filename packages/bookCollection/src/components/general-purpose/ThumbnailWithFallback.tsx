import React, { useEffect, useState } from 'react';
import FaceIcon from '../../assets/thumbnails/face.svg?react';
import BooksIcon from '../../assets/thumbnails/books.svg?react';
import BookIcon from '../../assets/thumbnails/book.svg?react';
import GenresIcon from '../../assets/thumbnails/genres.svg?react';
import CompanyIcon from '../../assets/thumbnails/company.svg?react';

import { CollectionsClasses, RecordTypes } from '../../utility/enums';
import styles from './ThumbnailWithFallback.module.scss';

interface ThumbnailWithFallbackProps {
	url?: string;
	recordType: RecordTypes;
	listClass?: CollectionsClasses;
	alt?: string;
}

const FALLBACK_ICONS: Record<
	RecordTypes,
	React.FC<React.SVGProps<SVGSVGElement>>
> = {
	[RecordTypes.Author]: FaceIcon,
	[RecordTypes.Book]: BookIcon,
	[RecordTypes.Genre]: GenresIcon,
	[RecordTypes.Publisher]: CompanyIcon,
	[RecordTypes.Translator]: FaceIcon,
	[RecordTypes.BookSeries]: BooksIcon,
};

const ThumbnailWithFallback: React.FC<ThumbnailWithFallbackProps> = ({
	url,
	recordType,
	listClass,
	alt = 'thumbnail',
}) => {
	const [hasLoadError, setHasLoadError] = useState(false);

	// Reset error state whenever a new cover URL is passed in
	useEffect(() => {
		setHasLoadError(false);
	}, [url]);

	const showBookCover =
		recordType === RecordTypes.Book && Boolean(url) && !hasLoadError;

	const FallbackIcon = FALLBACK_ICONS[recordType] ?? BookIcon;

	return (
		<div
			className={`${styles.thumbnail} ${
				listClass === CollectionsClasses.Books ? styles.thumbnailBooks : ''
			}`}>
			{showBookCover ? (
				<img
					src={url}
					alt={alt}
					loading='lazy'
					onError={() => setHasLoadError(true)}
				/>
			) : (
				<FallbackIcon
					className={styles.svgThumbnail}
					aria-label={alt}
				/>
			)}
		</div>
	);
};

export default ThumbnailWithFallback;
