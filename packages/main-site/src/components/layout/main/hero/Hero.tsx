import styles from './Hero.module.scss';
import heroImg from '../../../../assets/images/dreams.jpg';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.imageWrapper}>
				<img
					src={heroImg}
					alt='image of a book and waterfall'
					fetchPriority='high'
				/>
			</div>
			<div className={styles.heroWrapper}>
				<h1>
					Hi, I'm <span>Kamil Jakóbczak</span>
				</h1>
				<p>Frontend Developer & 3D Printing Enthusiast</p>
				<p>
					I create beautiful web experiences and bring ideas to life
					through code and 3D printing. Welcome to my digital space where
					creativity meets technology.
				</p>
				<div className={styles.buttons}>
					<a
						href='#projects'
						className={styles.btnPrimary}>
						View My Work
					</a>
					<a
						href='#contact'
						className={styles.btnSecondary}>
						Get in Touch
					</a>
				</div>
			</div>
		</section>
	);
}
