import { useEffect, useState } from 'react';
import Header from './header/Header';
import Hero from './Hero';
import styles from './App.module.scss';

export type Theme = 'light' | 'dark';

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
			<main>
				<Hero />
				<section id='projects'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
					soluta quam voluptate nihil vel consequuntur optio consectetur
					incidunt iusto harum, similique, veritatis maxime perspiciatis
					laudantium libero ipsum asperiores! Nobis aspernatur ex explicabo
					pariatur officia alias excepturi nemo, nulla consequatur quisquam
					consequuntur maiores est amet deserunt voluptatibus assumenda
					animi. Consequuntur adipisci quaerat eum deserunt. Ipsa accusamus
					consequuntur earum! Consequatur reiciendis voluptatibus iusto
					iure esse laborum, nulla provident rerum laudantium. Quasi porro
					ad veniam dolore molestias eveniet debitis, saepe, voluptatum
					dolorum ipsum reprehenderit necessitatibus labore placeat
					temporibus ullam quos iure ut quibusdam. Magni obcaecati quo in,
					dolore quae accusantium veniam ipsa iste.
				</section>
				<section id='3d-printing'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
					impedit nisi laborum expedita eveniet praesentium. Dolorum sint
					qui corrupti reprehenderit hic. Autem minus assumenda
					exercitationem cupiditate? Quasi dolorem ea eaque illo nobis
					adipisci quos dolorum quae dicta laboriosam natus quis, rem
					commodi obcaecati! Ab explicabo voluptate cupiditate mollitia
					minima quo velit fugiat animi harum. Tempore deserunt quo
					suscipit assumenda fuga odio voluptatem voluptas cumque tempora
					quos commodi, aliquid modi quod quam odit adipisci veritatis
					dolor aut consequatur sunt. Quos excepturi ipsam necessitatibus
					voluptatum. Commodi, quas ratione dignissimos, quaerat
					aspernatur, omnis impedit dolorum unde sed tempore asperiores
					suscipit ad sapiente voluptate.
				</section>
				<section id='contact'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
					vitae incidunt eligendi alias architecto iure dolorem at
					recusandae eaque laboriosam fuga a non, quos veritatis beatae
					praesentium fugit minima, quas, repellat debitis soluta
					blanditiis. Atque, ipsum modi, repellendus doloremque nulla fuga
					eligendi voluptatem similique, ipsam quos ut nisi blanditiis
					voluptatum?
				</section>
			</main>
			<footer>Kamil Jakóbczak 2026</footer>
		</>
	);
}
