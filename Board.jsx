import React,{useEffect} from 'react'
import './board.css'
import imag from '../../pictures/imag.png' 
import imag2 from '../../pictures/imag2.png' 
import imag3 from '../../pictures/imag3.png' 
import imag4 from '../../pictures/imag4.png' 
import imag5 from '../../pictures/imag5.png' 
import imag6 from '../../pictures/imag6.png' 
import imag7 from '../../pictures/imag7.png' 
import imag8 from '../../pictures/imag8.png' 
import imag9 from '../../pictures/imag9.png' 
import imag10 from '../../pictures/imag10.png' 
import imag11 from '../../pictures/imag11.png' 
import imag12 from '../../pictures/imag12.png' 
import imag13 from '../../pictures/imag13.png' 
import imag14 from '../../pictures/imag14.png' 
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
{
    id:1,
    imgSrc: imag,
    description: "Excited to lead the charge again as Chairperson of Bulls and Bears, let's make this year more successful than previous! Cheers to life."
},

{
    id:2,
    imgSrc: imag2,
    description: 'Grateful for the opportunity bestowed upon me. Ready to make a difference and inspire more people to take control of their financial future!'

},

{
    id:3,
    imgSrc: imag3,
    description: "Everyone's favorite board member is back for a 2nd term!"
},
{
    id:4,
    imgSrc: imag4,
    description: "Confidence is when you check your bank account and don't flinch. It's ironic how money can't buy happiness, yet it's a lot easier to be happy when you're not broke."
},
{
    id:5,
    imgSrc: imag5,
    description: "I'm not sure what's more unpredictable - the stock market or my investing strategy?"
},
{
    id:6,
    imgSrc: imag6,
    description: "Feisty, stubborn, sarcastic, outspoken, blunt: Hmmm ... are these my good qualities or bad? Who knows!? Who cares!? It's still gonna be me!"
},
{
    id:7,
    imgSrc: imag7,
    description: "'You miss 100% of the shots you don't take -Wayne Gretzky'- MICHAEL SCOTT Dozing off and still managing everything on stilts is my special ability. We're here to help you make great memories with our exciting events!"
},
{
    id:8,
    imgSrc: imag8,
    description: "Always here to guide, help out and approach."
},
{
    id:9,
    imgSrc: imag9,
    description: "So I heard the ladies like bad boys. Lucky for them, I'm bad at everything. Here to lead the way in the creative aspects of the club."
},
{
    id:10,
    imgSrc: imag10,
    description: "Life is what happens when you're busy making other plans."
},
{
    id:11,
    imgSrc: imag11,
    description: "Embrace the journey, the destination is just one step of many."
},
{
    id:12,
    imgSrc: imag12,
    description: "The idea is to die young . . . as late as possible."
},
{
    id:13,
    imgSrc: imag13,
    description: "You'll find out soon ,but for now she's sunshine with a little hurricane."
},
{
    id:14,
    imgSrc: imag14,
    description: "Trading stocks is a lot like dating - you win some, you lose some, and you hope your portfolio is better than your ex."
},
]
const Board = () => {
    useEffect(() => {
    Aos.init({duration: 2000})
    }, [])
    return (
    <section id='board'className='board container section'>
        <div className='secTitle'>
        <h1 data-aos='fade-up' className='title'>
            Board Members
        </h1>
        <h3 data-aos='fade-up' className='subtitle'>
        Meet the faces behind our club's success
            </h3>
        </div>


        <div data-aos='fade-up' className='secContent grid'>
        {
            Data.map(({id,imgSrc,description}) =>{
            return (
                <div key={id}  className='singleDestination'>
                <div className='imageDiv'>
                    <img src={imgSrc} alt={description}/>
                </div>
                <div data-aos='fade-up' className='cardInfo'>
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

export default Board
