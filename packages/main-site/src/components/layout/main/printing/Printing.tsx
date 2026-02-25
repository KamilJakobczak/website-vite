import styles from './Printing.module.scss';
import CardList from '../../../ui/card-list/CardList';
import Card from '../../../ui/card/Card';
import { prints } from './printingData';

export default function Printing() {
	return (
		<section id='3d-printing'>
			<div className={styles.inner}>
				<h2 className={styles.heading}>3D Printing Gallery</h2>
				<CardList variant='gallery'>
					{prints.map(print => (
						<Card
							key={print.id}
							image={print.image}
							imageAlt={print.imageAlt}
							title={print.title}
							overlay={print.overlay}
							variant='gallery'
						/>
					))}
				</CardList>
			</div>
		</section>
	);
}
