import type { ReactNode } from 'react';
import styles from './CardList.module.scss';

interface CardListProps {
	children: ReactNode;
	variant: 'projects' | 'gallery';
}

export default function CardList({ children, variant }: CardListProps) {
	return (
		<div className={`${styles.grid} ${styles[variant]}`}>{children}</div>
	);
}
