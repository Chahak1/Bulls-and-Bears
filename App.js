import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Main from './components/Main/Main'
import Sponsors from './components/Sponsors/Sponsors'
import Board from './components/Board/Board'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Main/>
      <Sponsors/>
      <Board/>
      <Footer/>

    </>
  )
}

export default App
