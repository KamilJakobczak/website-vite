import styles from './Contact.module.scss';

export default function Contact() {
	return (
		<section id='contact'>
			<div className={styles.inner}>
				<h2>Get in Touch</h2>
				<p>Let's connect and collaborate.</p>
				{/* <div className={styles.layout}>
					<div>
						<section aria-labelledby='contact-information-heading'>
							<h3>Contact Information</h3>
							<ul>
								<li>
									<strong>Email:</strong>
									<a href='mailto:k_j1@vp.pl'>k_j1@vp.pl</a>
								</li>
								<li>
									<strong>GitHub:</strong>
									<a href='https://github.com/yourusername'>
										github.com/yourusername
									</a>
								</li>
								<li>
									<strong>LinkedIn:</strong>
									<a href='https://linkedin.com/in/yourprofile'>
										linkedin.com/in/yourprofile
									</a>
								</li>
							</ul>
						</section>

						<section aria-labelledby='work-together-heading'>
							<h3 id='work-together-heading'>Let's Work Together</h3>
							<p>
								I'm always interested in hearing about new projects and
								opportunities. Whether you have a question or just want
								to say hi, feel free to reach out!
							</p>
							<p>
								<a href='mailto:k_j1@vp.pl'>Get in touch via email</a>
							</p>
						</section>
					</div>

					<aside
						className='contact-aside'
						aria-labelledby='skills-heading'>
						<h3 id='skills-heading'>Skills &amp; Technologies</h3>
						<ul>
							<li>React</li>
							<li>TypeScript</li>
							<li>JavaScript</li>
							<li>HTML &amp; CSS</li>
							<li>Git</li>
							<li>3D Printing</li>
							<li>CAD Design</li>
						</ul>
					</aside>
				</div> */}
			</div>
		</section>
	);
}
