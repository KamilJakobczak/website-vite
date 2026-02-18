export type Theme = 'light' | 'dark';

export type WithTheme = {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};
