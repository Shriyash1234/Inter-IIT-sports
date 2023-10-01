import React, { useState, useEffect } from 'react'
import Header from './header'
import About from './about'
import Cards from './cards'
import Sports from './sports'
import Footer from './footer'
import './CSS/home.css'
import Caraousel from './caraousel'
const Home = () => {

  return (
    <section className='home'>
      <Header color={'white'} />
      <section className='home'>
        <div className='image-section'>
          <img src={require('./Assests/Swimming-pool.jpg')}></img>
        </div>
        <img src={require('./Assests/Inter-IIT-logo-new.jpg')} className='homapage-logo'></img>

        <div className="blue-section">
          <h2 className="centered-heading">37th Inter IIT Aquatics Meet<br />IIT Gandhinagar <br/> 04 Oct - 08 Oct 2023</h2>
        </div>
      </section>


      <About />
      <Cards />
      <Caraousel />
      <Sports />
      <Footer />
    </section>

  )
}

export default Home
