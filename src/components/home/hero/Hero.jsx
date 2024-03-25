import React from "react"
import Heading from "../../common/heading/Heading"
import "./hero.css"
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO Shiksha Hub' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries India, there live the blind texts.</p>
            <div className='button'>
            
              <button className='primary-btn'>
                
                <Link className='nav-link' to ="" >GET STARTED WITH US </Link>
                <i className='fa fa-long-arrow-alt-right'></i>
              </button>
             
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero