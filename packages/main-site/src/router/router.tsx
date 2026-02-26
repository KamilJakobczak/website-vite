import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import JapaneseProject from '../components/projects/JapaneseProject';

export const router = createBrowserRouter([
	{ path: '/', element: <App /> },
	{ path: '/projects/collection', element: '' },
	{ path: '/projects/japanese', element: <JapaneseProject /> },
	{ path: '/projects/csv-parser', element: '' },
	{ path: '/projects/playground', element: '' },
]);
