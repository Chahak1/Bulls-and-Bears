import React,{useEffect} from 'react'
import './about.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {
    useEffect(() => {
    Aos.init({duration: 2000})
    }, [])
    return (
    <section id='about' data-aos='fade-up' className='about'>
        <div className='aboutContent Container'>
        <div  className='textDiv'>
        <h1 data-aos='fade-up' className='aboutTitle'>
            About Us
          </h1>
          <span data-aos='fade-up' className='smallText'>
          Bulls and bears, a Finance Club of VIT promotes finance related activities and careers through the VIT community. The main objective of this club is to spread awareness in the domain of finance, in particular investment banking, stocks and trading, private wealth management and many more. The club provides a constructive platform for helping the finance aspirants apply theoretical concepts they have learnt in real life.
          </span>
        </div>
      </div>
    </section>
  )
}

export default About