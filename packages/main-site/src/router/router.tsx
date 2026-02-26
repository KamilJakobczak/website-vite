import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import ProjectsLayout from '../components/projects/ProjectsLayout';
import JapaneseProject from '../components/projects/JapaneseProject';
import PlaygroundProject from '../components/projects/PlaygroundProject';

export const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{
		path: '/projects',
		element: <ProjectsLayout />,
		children: [
			{ path: 'collection', element: '' },
			{ path: 'japanese', element: <JapaneseProject /> },
			{ path: 'csv-parser', element: '' },
			{ path: 'playground', element: <PlaygroundProject /> },
		],
	},
]);
