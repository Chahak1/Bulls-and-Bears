import React,{useEffect} from 'react'
import './main.css'
import img from '../../pictures/cashflow.jpg' 
import img2 from '../../pictures/fintalk.jpg' 
import img3 from '../../pictures/img3.png' 
import event1 from '../../pictures/event1.jpeg' 
import img5 from '../../pictures/img5.png' 
import img6 from '../../pictures/img6.png' 
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
  id:1,
  imgSrc: img,
  destTitle: 'CASHFLOW 2.0',
  description: 'At the 2023 VIT Tech Fest “Gravitas”, participants enjoyed a mini Indian version of Cashflow, gaining financial insights through interactive game play.'
  
},

{
  id:2,
  imgSrc: img2,
  destTitle: 'FINTALK',
  description: 'This session focused on equipping college students with vital financial management skills, covering budgeting, investing, and achieving financial goals, led by Ms. Bhagyashree Thakkar.'

},

{
  id:3,
  imgSrc: img3,
  destTitle: 'HACKSTORY',
  description: 'Hackstory was one of its kind hackathon where the topics of the problem statement covered niches belonging to social issues and financial tracks.'
},
{
  id:4,
  imgSrc: event1,
  destTitle: 'TRADERS ELITE',
  description: 'A trading contest where traders discovered their true potential in the thrilling 6-Hour Real-Time Stock Trading challenge and honed their skills using virtual money.'
},
{
  id:5,
  imgSrc: img5,
  destTitle: 'CASINOVA',
  description: 'Casinova offers Bear Pong with enigmatic cups, Jeopardy with themed questions, Marble Run for fun and the intense Split or Steal finale.'
},
{
  id:6,
  imgSrc: img6,
  destTitle: 'ZERODHA',
  description: 'A webinar brought in collaboration with Zerodha Varsity to stimulate financial literacy among college students with VP Karthik Rangappa.'
},

]
const Main = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <section id='main'className='main container section'>
      <div className='secTitle'>
        <h1 data-aos='fade-up' className='title'>
          Events
        </h1>
      </div>

      <div data-aos='fade-up' className='secContent grid'>
        {
          Data.map(({id,imgSrc,destTitle,description}) =>{
            return (
              <div key={id}  className='singleDestination'>
                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle}/>
                </div>
                <div data-aos='fade-up' className='cardInfo'>
                  <h4 className='destTitle'> {destTitle} </h4>
                  <div className='desc'>
                    <p>{description}</p>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
