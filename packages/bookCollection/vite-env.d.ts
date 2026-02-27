/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_API_URL: string;
	// Add other VITE_* vars here for intellisense
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
