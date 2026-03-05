import { useState, useEffect } from 'react';
import { resizeHelper } from '../handlers/resizeHelper';

export const useCoverResize = () => {
	const [coverSize, setCoverSize] = useState('');

	useEffect(() => {
		resizeHelper(window.innerWidth, setCoverSize);

		function handleResize() {
			resizeHelper(window.innerWidth, setCoverSize);
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return { coverSize };
};
