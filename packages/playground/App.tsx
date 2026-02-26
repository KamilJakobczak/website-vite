import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import { store } from './src/state/store';
import CellList from './src/components/CellList';
import { useEffect } from 'react';
import { setupBundler } from './src/bundler';
import CodingGuide from './src/components/CodingGuide';

const CodePlayground: React.FC = () => {
	useEffect(() => {
		setupBundler();
	}, []);

	return (
		<Provider store={store}>
			<CodingGuide />
			<CellList />
		</Provider>
	);
};

export default CodePlayground;
