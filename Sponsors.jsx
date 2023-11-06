import React,{useEffect} from 'react'
import './sponsors.css'
import rbal from '../../pictures/rbal.png' 
import stockgro from '../../pictures/stockgro.png' 
import varsity from '../../pictures/varsity.png' 
import linkup from '../../pictures/linkup.png'  
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
  id:1,
  imgSrc: rbal,
},

{
  id:2,
  imgSrc: stockgro,
  
},

{
  id:3,
  imgSrc: varsity,
},
{
  id:4,
  imgSrc: linkup,
},

]
const Sponsors = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <section id='sponsors'className='sponsors container section'>
      <div className='secTitle'>
        <h1 data-aos='fade-up' className='title'>
          Sponsors
        </h1>
      </div>

      <div data-aos='fade-up' className='secContent grid'>
        {
          Data.map(({id,imgSrc}) =>{
            return (
              <div key={id}  className='singleDestination'>
                <div className='imageDiv'>
                  <img src={imgSrc} alt={1}/>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Sponsors
