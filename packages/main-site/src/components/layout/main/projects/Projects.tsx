import styles from './Projects.module.scss';
import CardList from '../../../ui/card-list/CardList';
import Card from '../../../ui/card/Card';
import { projects } from './projectsData';

export default function Projects() {
	return (
		<section id='projects'>
			<div className={styles.inner}>
				<h2 className={styles.heading}>Projects</h2>
				<CardList variant='projects'>
					{projects.map(project => (
						<Card
							key={project.id}
							image={project.image}
							imageAlt={project.imageAlt}
							title={project.title}
							description={project.description}
							tags={project.tags}
							links={project.links}
							variant='project'
						/>
					))}
				</CardList>
			</div>
		</section>
	);
}
