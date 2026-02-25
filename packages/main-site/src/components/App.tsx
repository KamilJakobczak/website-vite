import { useEffect, useState } from 'react';
import Header from './layout/header/Header';
import Hero from './layout/main/hero/Hero';
import type { Theme } from './theme';
import styles from './App.module.scss';
import Contact from './layout/main/contact/Contact';
import Footer from './layout/footer/Footer';
import AboutMe from './layout/main/about/AboutMe';
import Projects from './layout/main/projects/Projects';
import Printing from './layout/main/printing/Printing';

export default function App() {
	const [theme, setTheme] = useState<Theme>(() => {
		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored === 'light' || stored === 'dark') return stored;
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	});

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<>
			<Header
				theme={theme}
				setTheme={setTheme}
			/>
			<main className={styles.main}>
				<Hero />
				<AboutMe />
				<Projects />
				<Printing />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
