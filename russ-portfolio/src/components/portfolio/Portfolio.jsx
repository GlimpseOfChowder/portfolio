import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/jshoppe11.png'
import IMG2 from '../../assets/royale.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Jess Shoppe',
    link: 'https://github.com/GlimpseOfChowder/JessShoppe',
    demo: 'https://jessshoppe.com/JessShoppe/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Royale Business Club',
    link: 'https://wordpress.com/',
    demo: 'https://www.royalebusinessclub.com/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
        {
          data.map(({id, image, title, link, demo}) => {
            return (
              <article key={id} className='portfolio-item'>
                <div className='portfolio-item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio-item-cta'>
                  <a href={link} className='btn'>Source</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio