import React, {useEffect} from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {FaLinkedin} from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section id='contact'className='footer'>
      <div className='secContent container'>
        <div data-aos='fade-up' className='contactDiv flex'>
          <div className='text'>
            <h1> Contact Us </h1>
            </div>
        </div>
        <div data-aos='fade-up' className='footerCard flex'>
        <div data-aos='fade-up' className='footerIntro flex'>
            <li className='footerParagraph'>
              K Abhimanyu Nair<br/>
              Vice Chair Person<br/>
              +91 8376052125<br/>
              </li>
              <li className='footerParagraph'>
              Ansh Agarwal <br/>
              Finace Head <br/>
              +91 8320084747<br/>           
              </li>
              <div className='footerSocials flex'>
              <a href="https://twitter.com/bnbvit?lang=en"><BsTwitter className='icon'/></a>
              < a href="mailto:bbc@vit.ac.in"><BiLogoGmail className='icon'/></a>
                <a href="https://www.instagram.com/bullsandbears_vit/?hl=en"><BiLogoInstagramAlt className='icon'/></a>
                <a href="https://www.linkedin.com/company/bnbvit/"><FaLinkedin className='icon'/></a>
                </div>
                </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
