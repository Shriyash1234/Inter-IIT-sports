import React,{useState,useEffect} from 'react'
import Header from './header'
import About from './about'
import Cards from './cards'
import Sports from './sports'
import Footer from './footer'
import './CSS/home.css'
import Caraousel from './caraousel'
const Home = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetDate = new Date('2023-10-04T00:00:00');
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        ).toString().padStart(2, '0'); // Add padStart to format minutes with leading zero
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000).toString().padStart(2, '0'); // Add padStart to format seconds with leading zero

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className='home'>
        <Header color={'white'}/>
        <section className='homepage-image'>
          <img className='bg-image' src={require('./Assests/Swimming-pool.jpg')}></img>
          {/* <p className='heading'>Inter IIT Sports<br/> Meet 2023</p> */}
          <img src={require('./Assests/Inter-IIT-logo.jpg')} className='homapge-logo'></img>
          {/* <div className='remaining-time-div'>
            <p className='time-for-event'>Time for the event</p>
            <p className='time'>
              <div className='time-and-duration'>
                <div className='real-time'> {countdown.days} </div>
                <div className='duration'>Days</div>
              </div>
              <div className='time-and-duration'>
                <div className='real-time'>: {countdown.hours}&nbsp;</div>
                <div className='duration'>&nbsp;&nbsp;Hours</div>
              </div>
              <div className='time-and-duration'>
                <div className='real-time'>: {countdown.minutes}&nbsp;</div>
                <div className='duration'>&nbsp;&nbsp;Minutes</div>
              </div>
              <div className='time-and-duration'>
                <div className='real-time'>: {countdown.seconds}&nbsp;</div>
                <div className='duration'>&nbsp;&nbsp;Seconds</div>
              </div>
            </p>
          </div> */}
          <div className='time-div'>
            <div className='name-of-event'>
              <p>INTER IIT SPORTS MEET 2023</p>
            </div>
            <div className='name-of-event'>
              <p>4 OCT - 9 OCT </p>
            </div>
            <div className='name-of-event'>
              <p>IIT Gandhinagar </p>
            </div>
            <div className='name-of-event'>
              <p>Days Remaining: {countdown.days}</p>
            </div>
          </div>
        </section>
        <About/>
        <Cards/>
        <Caraousel/>
        <Sports/>
        <Footer/>
    </section>
  )
}

export default Home