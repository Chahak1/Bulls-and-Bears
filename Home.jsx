import React,{useEffect} from 'react'
import './home.css'
import img from '../../pictures/main.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <section id='home'className='home'>
      <div className='overlay'></div>
      <img src={img} alt=""/>

      <div data-aos='fade-up' className='homeContent Container'>
        <div data-aos='fade-up' className='textDiv'>
        <h1 data-aos='fade-up' className='homeTitle'>
            BULLS AND BEARS
          </h1>
          <span data-aos='fade-up' className='smallText'>
            FINANCE. INVEST. PROSPER.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Home
