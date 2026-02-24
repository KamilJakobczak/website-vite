import styles from './AboutMe.module.scss';

import my_face from '../../../../assets/images/my_face.jpg';

export default function AboutMe() {
	return (
		<section id='about'>
			<h2 className={styles.visuallyHidden}>About me</h2>
			<div className={styles.inner}>
				<figure className={styles.imageWrapper}>
					<div className={styles.imageFrame}>
						<span className={styles.cornerTL} />
						<span className={styles.cornerBR} />
						<img
							src={my_face}
							alt='Kamil Jakóbczak'
							loading='lazy'
						/>
					</div>
				</figure>
				<div className={styles.contentWrapper}>
					<div className={styles.story}>
						<p>
							My first PC in the late 90s sparked a curiosity that never
							really went away. Life took me through a culinary career
							and a few other detours, but a few years ago I made the
							call I should've made much earlier — to finally build the
							thing I'd always wanted to build. No bootcamp, no
							shortcuts: just documentation, projects, and a lot of
							deliberate practice. React, TypeScript, Node.js, GraphQL —
							I learned by shipping real apps, not toy examples.
						</p>
					</div>

					<div className={styles.personal}>
						<h3>Beyond the Code</h3>
						<p>
							When the laptop closes, I'm usually either with my small
							family (2 humans, 2 cats with strong opinions about
							keyboard placement) or at the printer. My main obsession
							right now is designing custom board game inserts and
							accessories — the kind of work where a 0.2mm tolerance
							matters and a well-fitting insert genuinely changes how a
							game feels to set up. I use an Artillery Sidewinder X2,
							model in TinkerCAD and OpenSCAD, and yes, I do my own
							calibration. Strategic board games, books, and the
							occasional hardware repair round out the rest.
						</p>
					</div>

					<div className={styles.approach}>
						<h3>How I Work</h3>
						<p>
							I'm drawn to problems that sit at the edge of what I
							currently know — the kind that require actually
							understanding something, not just copying a pattern. I use
							AI tools the same way I'd use good documentation: to
							explore, debug and clarify, while keeping full ownership of
							the architecture and decisions. The code that ships is
							mine.
						</p>
						<p>
							I'm looking for a frontend or fullstack JavaScript role
							where I can keep growing, contribute meaningfully from day
							one, and work with people who care about their craft.
						</p>
					</div>

					<div className={styles.connect}>
						<p>
							Take a look at what I've been building below, or skip
							straight to a conversation — either works for me.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
