import { useEffect, useState } from 'react';
import Header from './layout/header/Header';
import Hero from './layout/main/hero/Hero';
import type { Theme } from './theme';
import styles from './App.module.scss';
import Contact from './layout/main/contact/Contact';
import Footer from './layout/footer/Footer';

export default function App() {
	const [theme, setTheme] = useState<Theme>('dark');

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<>
			<Header
				theme={theme}
				setTheme={setTheme}
			/>
			<main className={styles.main}>
				<Hero />
				<section id='projects'>
					<div className={styles.inner}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Eveniet soluta quam voluptate nihil vel consequuntur optio
						consectetur incidunt iusto harum, similique, veritatis maxime
						perspiciatis laudantium libero ipsum asperiores! Nobis
						aspernatur ex explicabo pariatur officia alias excepturi nemo,
						nulla consequatur quisquam consequuntur maiores est amet
						deserunt voluptatibus assumenda animi. Consequuntur adipisci
						quaerat eum deserunt. Ipsa accusamus consequuntur earum!
						Consequatur reiciendis voluptatibus iusto iure esse laborum,
						nulla provident rerum laudantium. Quasi porro ad veniam dolore
						molestias eveniet debitis, saepe, voluptatum dolorum ipsum
						reprehenderit necessitatibus labore placeat temporibus ullam
						quos iure ut quibusdam. Magni obcaecati quo in, dolore quae
						accusantium veniam ipsa iste.
					</div>
				</section>
				<section id='3d-printing'>
					<div className={styles.inner}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Eveniet soluta quam voluptate nihil vel consequuntur optio
						consectetur incidunt iusto harum, similique, veritatis maxime
						perspiciatis laudantium libero ipsum asperiores! Nobis
						aspernatur ex explicabo pariatur officia alias excepturi nemo,
						nulla consequatur quisquam consequuntur maiores est amet
						deserunt voluptatibus assumenda animi. Consequuntur adipisci
						quaerat eum deserunt. Ipsa accusamus consequuntur earum!
						Consequatur reiciendis voluptatibus iusto iure esse laborum,
						nulla provident rerum laudantium. Quasi porro ad veniam dolore
						molestias eveniet debitis, saepe, voluptatum dolorum ipsum
						reprehenderit necessitatibus labore placeat temporibus ullam
						quos iure ut quibusdam. Magni obcaecati quo in, dolore quae
						accusantium veniam ipsa iste.
					</div>
				</section>
				<Contact />
			</main>
			<Footer />
		</>
	);
}
