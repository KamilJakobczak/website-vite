import styles from './Card.module.scss';

export interface CardLink {
	url: string;
	label: string;
}

interface CardProps {
	image: string;
	imageAlt: string;
	title: string;
	description?: string;
	tags?: string[];
	links?: CardLink[];
	overlay?: string;
	variant?: 'project' | 'gallery';
}

export default function Card({
	image,
	imageAlt,
	title,
	description,
	tags,
	links,
	overlay,
	variant = 'project',
}: CardProps) {
	return (
		<article className={`${styles.card} ${styles[variant]}`}>
			<div className={styles.imageWrapper}>
				<img
					src={image}
					alt={imageAlt}
					loading='lazy'
				/>
				{overlay && (
					<div className={styles.overlay}>
						<span>{overlay}</span>
					</div>
				)}
			</div>
			<div className={styles.content}>
				<h3>{title}</h3>
				{description && <p>{description}</p>}
				{tags && tags.length > 0 && (
					<ul className={styles.tags}>
						{tags.map(tag => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
				)}
				{links && links.length > 0 && (
					<div className={styles.links}>
						{links.map(link => (
							<a
								key={link.url}
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'>
								{link.label}
							</a>
						))}
					</div>
				)}
			</div>
		</article>
	);
}
