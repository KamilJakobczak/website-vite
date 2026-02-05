import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
		svgr({
			svgrOptions: {
				replaceAttrValues: {
					'#1C274C': 'currentColor',
					'#000000': 'currentColor',
				},
			},
		}),
	],
});
