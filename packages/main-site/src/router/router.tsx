import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import ProjectsLayout from '../components/projects/ProjectsLayout';
import JapaneseProject from '../components/projects/JapaneseProject';
import PlaygroundProject from '../components/projects/PlaygroundProject';
import CsvParserProject from '../components/projects/CsvParserProject';
import BookCollectionProject from '../components/projects/BookCollectionProject';
import { bookCollectionRoutes } from '@portfolio/book-collection/router';

export const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{
		path: '/projects',
		element: <ProjectsLayout />,
		children: [
			{ path: 'japanese', element: <JapaneseProject /> },
			{ path: 'csv-parser', element: <CsvParserProject /> },
			{ path: 'playground', element: <PlaygroundProject /> },
		],
	},
	{
		path: 'collection',
		element: <BookCollectionProject />,
		children: bookCollectionRoutes,
	},
]);
