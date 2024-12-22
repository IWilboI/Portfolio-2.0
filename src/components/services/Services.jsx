import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>My services and expertise</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience in creating intuitive and visually appealing user interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Passion for graphic design,typography, color theory, and layout principles.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Love for creating designs that are both functional and aesthetically pleasing.</p>
            </li>
            <li>
              {/*<BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>*/}
            </li>
            <li>
              {/*<BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>*/}
            </li>
            <li>
             {/*} <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>*/}
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Software product and application development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Software platforms engineering.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating a unique visual aesthetic and layout that aligns with a brand's identity.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating websites that adapt seamlessly to different screen sizes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building interactive web applications with advanced features and functionalities.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ongoing updates, bug fixes, and technical assistance after website launch.</p>
            </li>
            <li>
              {/*<BiCheck className='service__list-icon' />
              <p></p>*/}
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visualizing data and complex information through engaging infographics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Writing engaging and persuasive content for websites, landing pages, ads, and other marketing materials.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating content specifically for social media platforms to engage audiences and build brand awareness.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visualizing data and complex information through engaging infographics.</p>
            </li>
            <li>
              {/*<BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>*/}
            </li>
            <li>
              {/*<BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>*/}
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services