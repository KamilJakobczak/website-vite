import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import ProjectsLayout from '../components/projects/ProjectsLayout';
import JapaneseProject from '../components/projects/JapaneseProject';
import PlaygroundProject from '../components/projects/PlaygroundProject';
import CsvParserProject from '../components/projects/CsvParserProject';

export const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{
		path: '/projects',
		element: <ProjectsLayout />,
		children: [
			{ path: 'collection', element: '' },
			{ path: 'japanese', element: <JapaneseProject /> },
			{ path: 'csv-parser', element: <CsvParserProject /> },
			{ path: 'playground', element: <PlaygroundProject /> },
		],
	},
]);
