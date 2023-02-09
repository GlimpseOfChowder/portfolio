import React from 'react'
import './about.css'
import ME1 from '../../assets/maru.png'

const About = () => {
  return (
    <section id="about">
		<h5>Get To Know</h5>
		<h2>About Me</h2>
		
		<div class="container about-container">
			<div class="about-me">
				<div class="about-me-image">
					<img src={ME1} alt="about image" />
				</div>
			</div>
			
			<div class="about-content">
				<div class="about-cards">
					<article class="about-card">
						<i class="bi bi-award about-icon"></i>
						<h5>Experience</h5>
						<small>Intermediate</small>
					</article>
					
					<article class="about-card">
						<i class="bi bi-people about-icon"></i>
						<h5>Clients</h5>
						<small>2</small>
					</article>
					
					<article class="about-card">
						<i class="bi bi-window-plus about-icon"></i>
						<h5>Projects</h5>
						<small>2</small>
					</article>
				</div>
				
				<p>
				I am a graduate of STI College with a degree on Bachelor of Science in Information Technology. My degree is a vast spectrum of digital possibilities, but for now, I am focusing my skills on Web-based programming. With all the tools at my disposal, I always strive to develop, improve and expand my skill set. I see myself as an explorer. No matter how challenging the obstacle is, I will see it through and overcome it—no matter the odds.
				</p>
				
				<a href="#contact" class="btn btn-primary">Let's Talk</a>
			</div>
		</div>
	</section>
  )
}

export default About