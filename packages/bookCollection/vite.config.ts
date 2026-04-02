import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/collection/',
	resolve: {
		alias: {
			react: path.resolve(__dirname, '../../node_modules/react'),
			'react-dom': path.resolve(__dirname, '../../node_modules/react-dom'),
		},
	},
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
	],
	build: {
		outDir: '../main-site/public/collection',
		emptyOutDir: true,
	},
});
