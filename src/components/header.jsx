import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './headerLoader'
import './CSS/header.css'
function Header(props) {
  const Navigate = useNavigate();
  const [headerBackground, setHeaderBackground] = useState('transparent');
  const color = props.color;
  const anticolor = color === 'white' ? 'black' : 'white'
  const [linkbg, setLinkbg] = useState(color);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setHeaderBackground("#fff");
  //       color === 'white' ? setLinkbg(anticolor) : setLinkbg(color)
  //     } else {
  //       color === 'white' ? setHeaderBackground('transparent') : setHeaderBackground('#fff');
  //       setLinkbg(color)
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  const handleAboutLink = () => {
    const element = document.getElementsByClassName('about-container')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('about-container')[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  const handleFooterLink = () => {
    const element = document.getElementsByClassName('footer-div')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('footer-div')[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  return (
    <section className='header'>
      <div className='logos'>
        <Link to='/'> <img className='comapny-logo' src={require('./Assests/logo-1.png')}/></Link>
      </div>
      <div className="cm-header-wrap" style={{ backgroundColor: headerBackground }}>
        <div className="cm-menu-wrap">
          <div className="cm-menu-btn fa fa-bars"></div>
          <div className="cm-menu-inner">
            <ul className="menu-ul clear-all" >
              <li className="has-child">
                <Link className='about-link links' style={{ color: linkbg }}><Link to="/" className='links' style={{ color: linkbg }}>Home</Link></Link>
              </li>
              <li className="has-child">
                <div onClick={handleAboutLink} className='about-link links' style={{ color: linkbg }}><Link to="/" className='links' style={{ color: linkbg }}>About</Link></div>
              </li>
              <li className="has-child">
                <Link to="/Schedule" className='link1 links' style={{ color: linkbg }}>Schedule</Link>
              </li>
              <li className="has-child">
                <Link to="/Results" className='link1 links' style={{ color: linkbg }}>Results</Link>
              </li>
              <li className="has-child">
                <div onClick={handleFooterLink} className='link1 links' style={{ color: linkbg,fontSize:"1.4rem" }}>Contact us</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;