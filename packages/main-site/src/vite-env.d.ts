/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare namespace JSX {
	type Element = import('react').JSX.Element;
	type IntrinsicElements = import('react').JSX.IntrinsicElements;
}

declare module 'monaco-jsx-highlighter';
