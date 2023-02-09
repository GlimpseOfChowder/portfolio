import React from 'react'
import './header.css'
import ME from '../../assets/me11.png'

const Header = () => {
  return (
    <header>
		<div class="container header-container">
			<h5>Hello I'm</h5>
			<h1>Marc Russell Guico</h1>
			<h5 class="text-light">Fullstack Developer</h5>
			
			<div class="cta">
				<a href="../assets/cv.pdf" download class="btn">Download CV</a>
				<a href="#contact" class="btn btn-primary">Let's Talk</a>
			</div>
			
			<div class="me">
				<img src={ME} alt="me" />
			</div>
			
			<a href="#contact" class="scroll-down">Scroll Down</a>
			
			<div class="header-socials">
				<a href="https://www.linkedin.com/in/marc-russell-guico-1a3901213/" target="_blank"><i class="bi bi-linkedin"></i></a>
				<a href="https://www.instagram.com/russellguico/" target="_blank"><i class="bi bi-instagram"></i></a>
				<a href="https://www.facebook.com/Ruz27" target="_blank"><i class="bi bi-facebook"></i></a>
			</div>
			
		</div>
	</header>
  )
}

export default Header