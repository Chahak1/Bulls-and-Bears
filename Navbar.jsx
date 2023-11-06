import React, {useState} from 'react'
import './navbar.css'
import {AiOutlineClose} from 'react-icons/ai'
import {BsThreeDotsVertical} from 'react-icons/bs'
import img from '../../pictures/ogo1.png'
const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () =>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar = () =>{
    setActive('navBar')

  }
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href='#home' className='logo flex'>
          <img src={img} alt=""/>

          </a>
        </div>
        <div className={active}>
          <ul onClick={removeNavbar}className='navLists flex'>
            <li className='navItem'>
              <a href='#home' className='navLink'>
                HOME
              </a>
            </li>
            <li className='navItem'>
              <a href='#about' className='navLink'>
                ABOUT
              </a>
            </li>
            <li className='navItem'>
              <a href='#main' className='navLink'>
                EVENTS
              </a>
            </li>
            <li className='navItem'>
              <a href='#sponsors' className='navLink'>
                SPONSORS
              </a>
            </li>
            <li className='navItem'>
              <a href='#board' className='navLink'>
                BOARD
              </a>
            </li>
            <li className='navItem'>
              <a href='#contact' className='navLink'>
                CONTACT US
              </a>
            </li>
          </ul>
          <div onClick={removeNavbar} className='closeNavbar'>
            <AiOutlineClose className='icon'/>

          </div>

        </div>
        <div onClick={showNav} className='toggleNavbar'>
          <BsThreeDotsVertical className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default Navbar
