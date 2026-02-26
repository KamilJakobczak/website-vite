import type { CardLink } from '../../../ui/card/Card';
import placeholder from '../../../../assets/images/dreams.jpg';
import japanese from '../../../../assets/images/projects/learning_japanese.jpg';
import bookCollection from '../../../../assets/images/projects/book_collection.jpg';
import codingPlayground from '../../../../assets/images/projects/coding_playground.jpg';

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
				url: 'https://github.com/KamilJakobczak/website-vite',
				label: 'GitHub',
			},
			{ url: '', label: 'You are there!' },
		],
	},
	{
		id: 'collection',
		image: bookCollection,
		imageAlt: 'Screenshot of Book Collection App',
		title: 'Book Collection App',
		description:
			'Fullstack web app to organize a multilingual family book collection with an EPUB parser for metadata extraction, authentication, and an admin panel to manage and search books.',
		tags: [
			'React',
			'TypeScript',
			'Node.js',
			'Express',
			'Apollo',
			'GraphQL',
			'Prisma',
			'MongoDB',
		],
		links: [
			{
				url: 'https://github.com/KamilJakobczak/',
				label: 'GitHub',
			},
			{ url: '', label: 'Live Demo' },
		],
	},
	{
		id: 'japanese',
		image: japanese,
		imageAlt: 'Screenshot of japanese alphabet game',
		title: 'Japanese Alphabet Learning Game',
		description:
			'A full-stack task management application with drag-and-drop, real-time updates, and collaborative features.',
		tags: ['JavaScript', 'TypeScript', 'OOP'],
		links: [
			{
				url: 'https://github.com/KamilJakobczak/learning-japanese',
				label: 'GitHub',
			},
			{
				url: '/projects/japanese',
				label: 'Live Demo',
			},
		],
	},

	{
		id: 'csv-parser',
		image: placeholder,
		imageAlt: 'Screenshot of CSV Data Parser and Viewer',
		title: 'CSV Data Parser and Viewer',
		description:
			'Web app to import CSV datasets, parse their content and render sortable tables with sorting and grouping options for flexible data exploration.',
		tags: ['Vue.js', 'JavaScript', 'HTML', 'CSS'],
		links: [
			{
				url: 'https://kamiljakobczak.github.io/recruitment-task-in-vue/',
				label: 'Live Demo',
			},
		],
	},
	{
		id: 'playground',
		image: codingPlayground,
		imageAlt: 'Screenshot of Coding Playground app',
		title: 'Coding Playground',
		description:
			'In-browser transpiler and bundler app that enables writing and running JavaScript code directly in the browser.',
		tags: ['React', 'Redux', 'Node.js'],
		links: [
			{
				url: '',
				label: '',
			},
		],
	},
];
