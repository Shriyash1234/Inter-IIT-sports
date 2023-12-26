import React, { useState, useEffect } from 'react'
import Header from './header'
import About from './about'
import Cards from './cards'
import Sports from './sports'
import Sponsers from './sponsers'
import Footer from './footer'
import './CSS/home.css'
import Caraousel from './caraousel'
import { CalendarDays } from 'lucide-react'
import bgvideo from './Assests/video/bg-video.mp4'
import { InstagramEmbed } from 'react-social-media-embed';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className='home'>
      <Header color={'white'} />
      <section className='home'>
        <div className='image-section'>
          <video autoPlay muted loop id="myVideo" >
            <source src={bgvideo} type="video/mp4" />
          </video>
        </div>
        <img src={require('./Assests/Inter-IIT-logo.jpg')} className='homapage-logo'></img>

        <div className="blue-section">
          <h2 className="centered-heading">56th Inter IIT Sports Meet
            <div className='name-place'>
              {/* <img src={require('./Assests/IITs/IITGN.jpg')} className='IITGN-icon'></img> */}
              &nbsp; IIT Gandhinagar&nbsp;&nbsp;
              <span className='home-date'> <CalendarDays /> 14 Dec - 22 Dec 2023</span>
            </div>
          </h2>
        </div>
      </section>
      <p className='Latest-stories'>Latest Stories</p>
      <div className='Instagram-posts laptop-stories'>
        <InstagramEmbed className="instagramPost" url="https://www.instagram.com/p/C1MVuclAifJ" />
        <InstagramEmbed className="instagramPost" url="https://www.instagram.com/p/C1MJzyzAlAM" />
        <InstagramEmbed className="instagramPost" url="https://www.instagram.com/reel/C1IAxxXIQAQ" />
      </div>
      <Carousel className='mobile-stories' autoPlay="true" infiniteLoop="true">
        <div>
          <InstagramEmbed className="instagramPost" url="https://www.instagram.com/reel/C0oPK6Ugiwp" />
        </div>
        <div>
          <InstagramEmbed className="instagramPost" url="https://www.instagram.com/reel/C0mLM04oELT" />
        </div>
        <div>
          <InstagramEmbed className="instagramPost" url="https://www.instagram.com/reel/C0jkxMConm9" />
        </div>
      </Carousel>


      <About />
      <Cards />
      <Caraousel />
      <Sports />
      <Sponsers/>
      <Footer />
    </section>

  )
}

export default Home
