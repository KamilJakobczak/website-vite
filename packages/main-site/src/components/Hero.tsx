import styles from './Hero.module.scss';
import heroImg from '../assets/images/dreams.jpg';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroWrapper}>
				<h1>
					Hello, I'm <span>Kamil Jakóbczak</span>
				</h1>
				<p>Frontend Developer & 3D Printing Enthusiast</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consequatur, molestiae?
				</p>
				<div className={styles.buttons}>
					<button>View My Work</button>
					<button>Get in Touch</button>
				</div>
			</div>
			<div className={styles.imageWrapper}>
				<img
					src={heroImg}
					alt='image of book and waterfall'
				/>
				{/* <div></div> */}
			</div>
		</section>
	);
}
