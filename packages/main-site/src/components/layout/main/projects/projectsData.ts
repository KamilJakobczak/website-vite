import type { CardLink } from '../../../ui/card/Card';
import placeholder from '../../../../assets/images/dreams.jpg';

interface ProjectItem {
	id: string;
	image: string;
	imageAlt: string;
	title: string;
	description: string;
	tags: string[];
	links: CardLink[];
}

export const projects: ProjectItem[] = [
	{
		id: 'portfolio-site',
		image: placeholder,
		imageAlt: 'Screenshot of portfolio website',
		title: 'Portfolio Website',
		description:
			'Personal portfolio site built with React, TypeScript, and Vite. Features dark mode, responsive design, and SCSS modules.',
		tags: ['React', 'TypeScript', 'Vite', 'SCSS'],
		links: [
			{
				url: 'https://github.com/username/portfolio',
				label: 'GitHub',
			},
			{ url: 'https://example.com', label: 'Live Demo' },
		],
	},
	{
		id: 'project-2',
		image: placeholder,
		imageAlt: 'Screenshot of task manager app',
		title: 'Task Manager App',
		description:
			'A full-stack task management application with drag-and-drop, real-time updates, and collaborative features.',
		tags: ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
		links: [
			{
				url: 'https://github.com/username/tasks',
				label: 'GitHub',
			},
		],
	},
	{
		id: 'project-3',
		image: placeholder,
		imageAlt: 'Screenshot of weather dashboard',
		title: 'Weather Dashboard',
		description:
			'Real-time weather dashboard with interactive maps, forecast charts, and location-based alerts.',
		tags: ['TypeScript', 'D3.js', 'REST API'],
		links: [
			{
				url: 'https://github.com/username/weather',
				label: 'GitHub',
			},
			{ url: 'https://example.com', label: 'Live Demo' },
		],
	},
	{
		id: 'project-4',
		image: placeholder,
		imageAlt: 'Screenshot of e-commerce platform',
		title: 'E-Commerce Platform',
		description:
			'Headless e-commerce storefront with server-side rendering, cart management, and payment integration.',
		tags: ['Next.js', 'Stripe', 'Tailwind', 'Prisma'],
		links: [
			{
				url: 'https://github.com/username/shop',
				label: 'GitHub',
			},
		],
	},
];
