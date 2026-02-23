import styles from './AboutMe.module.scss';
import my_face from '../../../../assets/images/my_face.jpg';
export default function AboutMe() {
	return (
		<section id='about'>
			<h2 className={styles.visuallyHidden}>About me</h2>
			<div className={styles.inner}>
				<figure className={styles.imageWrapper}>
					<div className={styles.imageFrame}>
						<img
							src={my_face}
							alt='Kamil Jakóbczak'
						/>
					</div>
				</figure>
				<div className={styles.contentWrapper}>
					<div className={styles.story}>
						<p>
							My journey into development started in the late 90s with my
							first PC, where I wrote my first lines of code 20 years
							ago. Life took me down different paths, but a few years
							back, I realized that not pursuing programming would be a
							lifelong regret. Sometimes the best decisions come later in
							life.
						</p>
					</div>

					<div className={styles.personal}>
						<h3>Beyond the Code</h3>
						<p>
							When I'm not crafting web experiences, I'm usually with my
							small family (2 humans + 3 very opinionated cats who
							supervise my coding sessions). I love diving into books,
							strategic board games, and my latest obsession – 3D
							printing custom solutions and hardware fixes.
						</p>
					</div>

					<div className={styles.approach}>
						<h3>What Drives Me</h3>
						<p>
							There's something magical about seeing clean code transform
							into seamless user experiences. I'm passionate about the
							intersection of creativity and functionality – whether
							that's building an intuitive React component or designing a
							custom 3D-printed solution to a real problem.
						</p>
						<p>
							I believe great development comes from continuous learning
							and genuine curiosity. Every project teaches me something
							new, and I'm always excited about the next challenge.
						</p>
					</div>

					<div className={styles.connect}>
						<p>
							Want to see what I've been building or discuss a potential
							collaboration? Check out my work below or let's start a
							conversation!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
