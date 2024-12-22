import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The Java is Scripting',
    github: 'https://github.com/IWilboI/The-Java-is-Scripting',
    demo: 'https://iwilboi.github.io/The-Java-is-Scripting/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'The Blogging Blog',
    github: 'https://github.com/IWilboI/Naming-Things-Is-Hard-For-No-Reason',
    demo: 'https://iwilboi.github.io/Naming-Things-Is-Hard-For-No-Reason/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Logofy',
    github: 'https://github.com/IWilboI/Logofy',
    demo: 'https://www.youtube.com/watch?v=vHMFIU5bD2M'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Express Note Taker',
    github: 'https://github.com/IWilboI/Express-Ticket-To-Knowledge',
    demo: 'https://express-ticket-to-knowledge.onrender.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Blackjack & Coke',
    github: 'https://github.com/cbaumgart004/jackBlacknCoke',
    demo: 'https://cbaumgart004.github.io/jackBlacknCoke/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'JATE text editor',
    github: 'https://github.com/IWilboI/Edit-That-Text',
    demo: 'https://edit-that-text.onrender.com/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Some of my projects</h5>
      <h2>My apps</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
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