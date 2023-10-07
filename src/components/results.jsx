import React, { useEffect, useState } from 'react'
import Header from './header'
import { ChevronDown } from 'lucide-react'
import JsonToTable from './jsontotable'
import tableData from './Assests/Data/Inter-IIT-table.json'
import data from './Assests/Data/Results/400m.json'


import Day1MorRelay from './Assests/Data/Results/Day1-Result/Morning/4-100m-M-Medley.json'
import Day1Mor400Freestyle from './Assests/Data/Results/Day1-Result/Morning/400m.json'
import Day1Eve50WBackStroke from './Assests/Data/Results/Day1-Result/Evening/50W-Backstroke.json'
import Day1Eve100MBackStroke from './Assests/Data/Results/Day1-Result/Evening/100M-Backstroke.json'
import Day1Eve200MBreastStroke from './Assests/Data/Results/Day1-Result/Evening/200M-Breaststroke.json'


import Day2Mor200MMedly from './Assests/Data/Results/Day2-Result/Morning/200-M-Medly.json'
import Day2Eve50MBackStroke from './Assests/Data/Results/Day2-Result/Evening/50-M-BackStroke.json'
import Day2Eve50WButterfly from './Assests/Data/Results/Day2-Result/Evening/50-W-Butterfly.json'
import Day2Eve200MFreeStyle from './Assests/Data/Results/Day2-Result/Evening/200-M-FreeStyle.json'

import Day3FreeStyle50M from './Assests/Data/Results/Day3-Result/50M-FreeStyle.json'
import Day3FreeStyle50W from './Assests/Data/Results/Day3-Result/50W-FreeStyle.json'
import Day3Butterfly100M from './Assests/Data/Results/Day3-Result/100M-Butterfly.json'
import Day3BackStroke200M from './Assests/Data/Results/Day3-Result/200M-BackStroke.json'
import Day3FreeStyleRelay50W from './Assests/Data/Results/Day3-Result/4-50W-FreeStyleRelay.json'

import Day4BreastStroke50M from './Assests/Data/Results/Day4-Result/50M-BreastStroke.json'
import Day4Butterfly50M from './Assests/Data/Results/Day4-Result/50M-Butterfly.json'
import Day4FreeStyle100M from './Assests/Data/Results/Day4-Result/100M-FreeStyle.json'
import Day4Relay100M from './Assests/Data/Results/Day4-Result/100M-Relay.json'
import Day4FreeStyle100W from './Assests/Data/Results/Day4-Result/100W-FreeStyle.json'



import './CSS/results.css'
import './CSS/schedule.css'
import Water_Polo_Result from './waterpolo_result'
import Footer from './footer'
// import Footer from './footer';

const Results = () => {

  const [isVisible, setIsVisible] = useState(Array(100).fill(false));


  useEffect(() => {
    const handleWindowLoad = () => {
      const elementHeight = document.getElementById('result-table').offsetHeight;

      document.getElementsByClassName('result-divs1')[0].style.marginTop = elementHeight * 1.1 + 'px';
    };
    window.addEventListener('load', handleWindowLoad);
    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const toggleVisibility = (index, sindex) => {
    const newVisibility = isVisible.map((value, i) => (i === index ? !value : false));
    setIsVisible(newVisibility);
    const eventDivs = document.getElementsByClassName("results-event-div");
    const targetDiv = eventDivs[index - sindex];
    const element = document.getElementById("normal-table");
    const elementHeight = element.offsetHeight;

    if (newVisibility[index]) {
      for (let i = index - sindex; i < eventDivs.length; i++) {
        eventDivs[i].style.transform = `translateY(${elementHeight * 1.4}px)`;
      }
      // document.getElementsByClassName('footer-div')[0].style.marginTop = `${elementHeight * 1.4}px`;
      // console.log(document.getElementsByClassName('schedule-div')[0])
      targetDiv.style.transform = "translateY(0)";
    } else {
      for (let i = index - sindex; i < eventDivs.length; i++) {
        eventDivs[i].style.transform = "translateY(0)";
      }
    }
  };
  const toggleVisibilityLeague = (index) => {
    return;
    const newVisibility = isVisible.map((value, i) => (i === index ? !value : false));
    setIsVisible(newVisibility);
    const eventDivs = document.getElementsByClassName("results-event-div");
    const targetDiv = eventDivs[index];

    const element = document.getElementById("normal-table");
    const elementHeight = element.offsetHeight;

    console.log('height', elementHeight)
    if (newVisibility[index]) {
      for (let i = index; i < eventDivs.length; i++) {
        eventDivs[i].style.transform = `translateY(${elementHeight * 1.1}px)`;
      }
      targetDiv.style.transform = "translateY(0)";
    } else {
      for (let i = index; i < eventDivs.length; i++) {
        eventDivs[i].style.transform = "translateY(0)";
      }
    }
  };

  const [selectedDate, setSelectedDate] = useState('Wednesday 4th October');

  const dateButtonMappings = {
    "Wednesday 4th October": 'btn-1',
    "Thursday 5th October": 'btn-2',
    "Friday 6th October": 'btn-3',
    "Saturday 7th October": 'btn-4',
    "Sunday 8th October": 'btn-5',
  };
  function setColor(btn) {
    const buttons = document.getElementsByClassName('date-button');
    const activeButton = document.getElementsByClassName(btn)[0];
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.color = "#41c5eb";
      buttons[i].style.backgroundColor = "#fff";
    }
    activeButton.style.color = "#fff";
    activeButton.style.backgroundColor = "#41c5eb";
  }
  window.onload = () => {
    setColor('btn-1');
  }

  const handleDateButtonClick = (date) => {
    const buttonClass = dateButtonMappings[date];
    const eventDivs = document.getElementsByClassName("results-event-div");
    for (let i = 0; i < eventDivs.length; i++) {
      eventDivs[i].style.transform = `translateY(${0}px)`;
    }
    if (buttonClass) {
      setColor(buttonClass);
    }
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });
    setSelectedDate(date);
  };


  const renderSchedule = () => {
    switch (selectedDate) {
      case 'Wednesday 4th October':
        return (
          <div>
            {/* Morning events */}
            <div className='event-divs result-divs'>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(0, 0)} >
                <div className='vertical-line-blue'></div>
                <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>400M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c', textAlign: 'left' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day1Mor400Freestyle} visiblity={isVisible[0] ? "visible" : "not-visible"} />
              </div>

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(1,0)}>
                <div className='vertical-line-blue'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day1Mor50WBackStroke} visiblity={isVisible[1] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(2,0)}>
                <div className='vertical-line-blue'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M BackStroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day1Mor100BackStroke} visiblity={isVisible[2] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(3,0)}>
                <div className='vertical-line-blue'></div>
                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day1Mor200BreastStroke} visiblity={isVisible[3] ? "visible" : "not-visible"} />
              </div> */}

              <div className='event-div results-event-div' onClick={() => toggleVisibility(1, 0)}>
                <div className='vertical-line-blue'></div>
                <img src={require('./Assests/icons/relay.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>4 X 100M Medley Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day1MorRelay} visiblity={isVisible[1] ? "visible" : "not-visible"} />
              </div>

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(5)}>
                <div className='vertical-line-blue'></div>
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" />(C1) BOMBAY vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />(C2) KANPUR
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[5] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(6)}>
                <div className='vertical-line-blue'></div>
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing' >Men</p>
                <p className='event-timing' >Water Polo</p>
                <p className='event-timing league-matches' >
                  <img src={require('./Assests/IITs/IITM.jpg')} className="IIT-icon" />(D1) MADRAS vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITGN.jpg')} className="IIT-icon" />(D2) GANDHINAGAR
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown' />
              </div> */}
            </div>

            {/* Evening Events  */}
            <div className='event-divs result-divs'>

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(7)}>
                <div className='vertical-line-orange'></div>


                <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>400M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[7] ? "visible" : "not-visible"} />
              </div> */}

              <div className='event-div results-event-div' onClick={() => toggleVisibility(2, 0)}>
                <div className='vertical-line-orange'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day1Eve50WBackStroke} visiblity={isVisible[2] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(3, 0)}>
                <div className='vertical-line-orange'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day1Eve100MBackStroke} visiblity={isVisible[3] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(4, 0)}>
                <div className='vertical-line-orange'></div>
                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day1Eve200MBreastStroke} visiblity={isVisible[4] ? "visible" : "not-visible"} />
              </div>

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(10)}>
                <div className='vertical-line-orange'></div>
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img src={require('./Assests/IITs/IITKGP.jpg')} className="IIT-icon" />(A1) KHARAGPUR vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITDH.jpg')} className="IIT-icon" />(A2) DHANBAD
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[10] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(11)}>
                <div className='vertical-line-orange'></div>
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing' >Men</p>
                <p className='event-timing' >Water Polo</p>
                <p className='event-timing league-matches' >
                  <img src={require('./Assests/IITs/IITD.jpg')} className="IIT-icon" />(B1) DELHI vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITG.jpg')} className="IIT-icon" />(B3) GUWAHATI
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[11] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}

            </div>

          </div>
        );

      case 'Thursday 5th October':
        return (
          <div>
            {/* Morning events */}
            <div className='event-divs result-divs'>
              {/* Morning Session */}
              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(8,8)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[8] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(9,8)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[9] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(10,8)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Individual Medley</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[10] ? "visible" : "not-visible"} />
              </div> */}


              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(11,8)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[11] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(17)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/water-polo.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img
                    src={require('./Assests/IITs/IITB.jpg')}
                    className='IIT-icon'
                    alt='IIT Logo'
                  />
                  (C1) BOMBAY vs&nbsp;&nbsp;
                  <img
                    src={require('./Assests/IITs/IITK.jpg')}
                    className='IIT-icon'
                    alt='IIT Logo'
                  />
                  (D2) KANPUR
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  League Matches
                </p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[17] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}


              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(18)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/water-polo.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img
                    src={require('./Assests/IITs/IITM.jpg')}
                    className='IIT-icon'
                    alt='IIT Logo'
                  />
                  (D1) MADRAS vs&nbsp;&nbsp;
                  <img
                    src={require('./Assests/IITs/IITR.jpg')}
                    className='IIT-icon'
                    alt='IIT Logo'
                  />
                  (C2) ROORKEE
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  League Matches
                </p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[18] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}

              {/* Add more event-div results-event-div components for the morning session */}
            </div>

            <div className='event-divs result-divs'>
              {/* Evening Session */}
              <div className='event-div results-event-div' onClick={() => toggleVisibility(5, 5)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day2Eve200MFreeStyle} visiblity={isVisible[5] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(6, 5)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day2Eve50WButterfly} visiblity={isVisible[6] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(7, 5)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Individual Medley</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day2Mor200MMedly} visiblity={isVisible[7] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(8, 5)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day2Eve50MBackStroke} visiblity={isVisible[8] ? "visible" : "not-visible"} />
              </div>


              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(23)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/water-polo.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img
                    src={require('./Assests/IITs/IITR.jpg')}
                    className='IIT-icon'
                    alt='IIT Logo'
                  />
                  (C2) ROORKEE  vs&nbsp;&nbsp;
                  <img
                    src={require('./Assests/IITs/IITK.jpg')}
                    className='IIT-icon'
                    alt='IIT Logo'
                  />
                  (C3) KANPUR
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  League Matches
                </p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[23] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}


              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(24)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/water-polo.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img
                    src={require('./Assests/IITs/IITBHU.jpg')}
                    className='IIT-icon'
                    alt='IIT Logo'
                  />
                  (B2) BHU vs&nbsp;&nbsp;
                  <img
                    src={require('./Assests/IITs/IITG.jpg')}
                    className='IIT-icon'
                    alt='IIT Logo'
                  />
                  (B3) GUWAHATI
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  League Matches
                </p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[24] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        );

      case 'Friday 6th October':
        return (
          <div>
            <div className='event-divs result-divs'>
              {/* Morning Session */}
              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(16)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[16] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(17)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[17] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(18)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[18] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(19)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[19] ? "visible" : "not-visible"} />
              </div> */}




              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(30)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/water-polo.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  Match-09: WINNER OF POOL A vs RUNNER OF POOL C
                </p>
                <p className='event-timing league-matches'>
                  Match-10: WINNER OF POOL B vs RUNNER OF POOL D
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Matches
                </p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[30] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}


              {/* Add more event-div results-event-div components for the morning session */}
            </div>
            <div className='event-divs result-divs'>
              {/* Evening Session */}

              <div className='event-div results-event-div' onClick={() => toggleVisibility(9, 9)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day3BackStroke200M} visiblity={isVisible[9] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(10, 9)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>4 x 50M Freestyle Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day3FreeStyleRelay50W} visiblity={isVisible[10] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(11, 9)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day3Butterfly100M} visiblity={isVisible[11] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(12, 9)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day3FreeStyle50W} visiblity={isVisible[12] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(13, 9)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day3FreeStyle50M} visiblity={isVisible[13] ? "visible" : "not-visible"} />
              </div>

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(35)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/water-polo.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  Match-11: RUNNER OF POOL A vs WINNER OF POOL C
                </p>
                <p className='event-timing league-matches'>
                  Match-12: RUNNER OF POOL B vs WINNER OF POOL D
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Matches
                </p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[35] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}


            </div>


          </div>
        );

      case 'Saturday 7th October':
        return (
          <div>
            <div className='event-divs result-divs'>
              {/* Morning Session */}
              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(25)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[25] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(26)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[26] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(27)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[27] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(28)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[28] ? "visible" : "not-visible"} />
              </div> */}



              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(41)}>
                <div className='vertical-line-blue'></div>


                <img
                  src={require('./Assests/icons/water-polo.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  Match-13: SF 1 vs SF 4
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Semi Final 1
                </p>
              </div> */}

              {/* Add more event-div results-event-div components for the morning session */}
            </div>
            <div className='event-divs result-divs'>
              {/* Evening Session */}
              <div className='event-div results-event-div' onClick={() => toggleVisibility(14, 14)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day4FreeStyle100M} visiblity={isVisible[14] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(15, 14)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>4 x 100M Freestyle Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day4Relay100M} visiblity={isVisible[15] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(16, 14)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day4FreeStyle100W} visiblity={isVisible[16] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(17, 14)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day4Butterfly50M} visiblity={isVisible[17] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(18, 14)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable jsonData={Day4BreastStroke50M} visiblity={isVisible[18] ? "visible" : "not-visible"} />
              </div>

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(46)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/water-polo.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  Match-14: SF 2 vs SF 3
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Semi Final 2
                </p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[46] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}

            </div>
          </div>

        );

      case 'Sunday 8th October':
        return (
          <div>
            <div className='event-divs result-divs'>
              {/* Morning Session */}
              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(34)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>1500M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Time Trials</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[34] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(35)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[35] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(36)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[36] ? "visible" : "not-visible"} />
              </div> */}

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(37)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>4 x 50M Medley Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Time Trials</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[37] ? "visible" : "not-visible"} />
              </div> */}


              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(51)}>
                <div className='vertical-line-blue'></div>
                <img
                  src={require('./Assests/icons/water-polo.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  Rest
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Matches
                </p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[51] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}

              {/* Add more event-div results-event-div components for the morning session */}
            </div>
            <div className='event-divs result-divs'>
              {/* Evening Session */}
              <div className='event-div results-event-div' onClick={() => toggleVisibility(17, 17)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[17] ? "visible" : "not-visible"} />
              </div>

              <div className='event-div results-event-div' onClick={() => toggleVisibility(18, 17)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[18] ? "visible" : "not-visible"} />
              </div>


              {/* <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(54)}>
                <div className='vertical-line-orange'></div>
                <img
                  src={require('./Assests/icons/water-polo.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  Match-15: LOSER OF F1 vs LOSER OF F2
                </p>
                <p className='event-timing league-matches'>
                  Match-16: WINNER OF F1 vs WINNER OF F2
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  3rd Place Match
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final Match
                </p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[5] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        );


      default:
        return (
          <div>
            {/* Morning events */}
            <div className='event-divs result-divs'>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(40)}>
                <div className='vertical-line-blue'></div>


                <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>400M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c', textAlign: 'left' }}>Heats/Time Trials</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[40] ? "visible" : "not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(41)}>
                <div className='vertical-line-blue'></div>


                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[41] ? "visible" : "not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(42)}>
                <div className='vertical-line-blue'></div>


                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[42] ? "visible" : "not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(43)}>
                <div className='vertical-line-blue'></div>


                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[43] ? "visible" : "not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(44)}>
                <div className='vertical-line-blue'></div>


                <img src={require('./Assests/icons/relay.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>4 X 100M Medley Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Time Trials</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[44] ? "visible" : "not-visible"} />
              </div>

              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(60)}>
                <div className='vertical-line-blue'></div>
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" />(C1) BOMBAY vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />(C2) KANPUR
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
              </div> */}
              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(61)}>
                <div className='vertical-line-blue'></div>
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing' >Men</p>
                <p className='event-timing' >Water Polo</p>
                <p className='event-timing league-matches' >
                  <img src={require('./Assests/IITs/IITM.jpg')} className="IIT-icon" />(D1) MADRAS vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITGN.jpg')} className="IIT-icon" />(D2) GANDHINAGAR
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[61] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Evening Events  */}
            <div className='event-divs result-divs'>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(45)}>
                <div className='vertical-line-orange'></div>


                <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>400M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[45] ? "visible" : "not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(46)}>
                <div className='vertical-line-orange'></div>


                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[46] ? "visible" : "not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(47)}>
                <div className='vertical-line-orange'></div>


                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[47] ? "visible" : "not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(48)}>
                <div className='vertical-line-orange'></div>


                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown' />
                <JsonToTable visiblity={isVisible[48] ? "visible" : "not-visible"} />
              </div>
              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(66)}>
                <div className='vertical-line-orange'></div>


                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img src={require('./Assests/IITs/IITKGP.jpg')} className="IIT-icon" />(A1) KHARAGPUR vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITDH.jpg')} className="IIT-icon" />(A2) DHANBAD
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[66] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}
              {/* <div className='event-div results-event-div' onClick={() => toggleVisibility(67)}>
                <div className='vertical-line-orange'></div>


                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing' >Men</p>
                <p className='event-timing' >Water Polo</p>
                <p className='event-timing league-matches' >
                  <img src={require('./Assests/IITs/IITD.jpg')} className="IIT-icon" />(B1) DELHI vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITG.jpg')} className="IIT-icon" />(B3) GUWAHATI
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown' />
                <div className={isVisible[67] ? 'event-div versus-div' : 'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                    <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                    <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        );
    }
  };

  return (
    <section className='Results'>
      <Header color='white' />
      <div className='Results-div'>
        <p className='results-heading'>Medal Tally</p>
        <JsonToTable jsonData={tableData} table="resultTable" />
      </div>
      <div className='event-divs result-divs1'>
        <p className='results-heading' style={{ marginLeft: "14vw" }}>Results</p>
        <div className='buttons-container'>
          <button className='date-button btn-1' onClick={() => handleDateButtonClick('Wednesday 4th October')}>4th Oct</button>
          <button className='date-button btn-2' onClick={() => handleDateButtonClick('Thursday 5th October')}>5th Oct</button>
          <button className='date-button btn-3' onClick={() => handleDateButtonClick('Friday 6th October')}>6th Oct</button>
          <button className='date-button btn-4' onClick={() => handleDateButtonClick('Saturday 7th October')}>7th Oct</button>
          <button className='date-button btn-5' onClick={() => handleDateButtonClick('Sunday 8th October')}>8th Oct</button>
        </div>
        <section className='Results'>
          <div className='schedule-div'>
            <div className='date-day'>
              <p>{selectedDate}</p>
            </div>
            {renderSchedule()}
          </div>
          <Water_Polo_Result matches={waterPoloMatches[selectedDate]} />
          <Footer />
        </section>
      </div>
    </section>
  );
};


const waterPoloMatches = {
  "Wednesday 4th October": [
    {
      id: 1,
      date: 'Oct 4 2023',
      time: 'Morning',
      pool: 'Pool - C',
      home_team: 'IIT BOMBAY',
      away_team: 'IIT KANPUR',
      logo_home_team: require('./Assests/IITs/IITB.jpg'),
      logo_away_team: require('./Assests/IITs/IITK.jpg'),
      home_score:'10',
      away_score:'7',
    },
    {
      id: 2,
      date: 'Oct 4 2023',
      time: 'Morning',
      pool: 'Pool - D',
      home_team: 'IIT MADRAS',
      away_team: 'IIT GANDHINAGAR',
      logo_home_team: require('./Assests/IITs/IITM.jpg'),
      logo_away_team: require('./Assests/IITs/IITGN.jpg'),
      home_score:'12',
      away_score:'2',
    },
    {
      id: 3,
      date: 'Oct 4 2023',
      time: 'Evening',
      pool: 'Pool - A',
      home_team: 'IIT DHANBAD',
      away_team: 'IIT KHARAGPUR',
      logo_home_team: require('./Assests/IITs/IITDH.jpg'),
      logo_away_team: require('./Assests/IITs/IITKGP.jpg'),
      home_score:'4',
      away_score:'10',
    },
    {
      id: 4,
      date: 'Oct 4 2023',
      time: 'Evening',
      pool: 'Pool - B',
      home_team: 'IIT DELHI',
      away_team: 'IIT GUWAHATI',
      logo_home_team: require('./Assests/IITs/IITD.jpg'),
      logo_away_team: require('./Assests/IITs/IITG.jpg'),
      home_score:'11',
      away_score:'3',
    },
  ],
  "Thursday 5th October": [
    {
      id: 5,
      date: 'Oct 5 2023',
      time: 'Morning',
      pool: 'Pool - C',
      home_team: 'IIT BOMBAY',
      away_team: 'IIT ROORKEE',
      logo_home_team: require('./Assests/IITs/IITB.jpg'),
      logo_away_team: require('./Assests/IITs/IITR.jpg'),
      home_score:'7',
      away_score:'3',
    },
    {
      id: 6,
      date: 'Oct 5 2023',
      time: 'Morning',
      pool: 'Pool - B',
      home_team: 'IIT DELHI',
      away_team: 'IIT BHU',
      logo_home_team: require('./Assests/IITs/IITD.jpg'),
      logo_away_team: require('./Assests/IITs/IITBHU.jpg'),
      home_score:'14',
      away_score:'3',
    },
    {
      id: 7,
      date: 'Oct 5 2023',
      time: 'Evening',
      pool: 'Pool - C',
      home_team: 'IIT ROORKEE',
      away_team: 'IIT KANPUR',
      logo_home_team: require('./Assests/IITs/IITR.jpg'),
      logo_away_team: require('./Assests/IITs/IITK.jpg'),
      home_score:'10',
      away_score:'4',
    },
    {
      id: 8,
      date: 'Oct 5 2023',
      time: 'Evening',
      pool: 'Pool - B',
      home_team: 'IIT BHU',
      away_team: 'IIT GUWAHATI',
      logo_home_team: require('./Assests/IITs/IITBHU.jpg'),
      logo_away_team: require('./Assests/IITs/IITG.jpg'),
      home_score:'3',
      away_score:'11',
    },

  ],
  "Friday 6th October": [{
    id: 9,
    date: 'Oct 6 2023',
    time: 'Morning',
    pool: 'Quarter Final',
    home_team: 'IIT KHARAGPUR',
    away_team: 'IIT ROORKEE',
    logo_home_team: require('./Assests/IITs/IITKGP.jpg'),
    logo_away_team: require('./Assests/IITs/IITR.jpg'),
      home_score:'5',
      home_p:' ( 3 ) ',
      away_score:'5',
      away_p:' ( 2 ) ',
  },
  {
    id: 10,
    date: 'Oct 6 2023',
    time: 'Morning',
    pool: 'Quarter Final',
    home_team: 'IIT DELHI',
    away_team: 'IIT GANDHINAGAR',
    logo_home_team: require('./Assests/IITs/IITD.jpg'),
    logo_away_team: require('./Assests/IITs/IITGN.jpg'),
      home_score:'6',
      home_p:' ( 4 ) ',
      away_score:'6',
      away_p:' ( 2 ) ',
  },
  {
    id: 11,
    date: 'Oct 6 2023',
    time: 'Evening',
    pool: 'Quarter Final',
    home_team: 'IIT DHANBAD',
    away_team: 'IIT BOMBAY',
    logo_home_team: require('./Assests/IITs/IITISM.jpg'),
    logo_away_team: require('./Assests/IITs/IITB.jpg'),
      home_score:'8',
      away_score:'26',
  },
  {
    id: 12,
    date: 'Oct 6 2023',
    time: 'Evening',
    pool: 'Quarter Final',
    home_team: 'IIT GUWAHATI',
    away_team: 'IIT MADRAS',
    logo_home_team: require('./Assests/IITs/IITG.jpg'),
    logo_away_team: require('./Assests/IITs/IITM.jpg'),
      home_score:'0',
      away_score:'13',
  },
  ],
  "Saturday 7th October": [{
    id: 13,
    date: 'Oct 7 2023',
    time: 'Evening',
    pool: 'Semi Final',
    home_team: 'IIT KHARAGPUR',
    away_team: 'IIT MADRAS',
    logo_home_team: require('./Assests/IITs/IITKGP.jpg'),
    logo_away_team: require('./Assests/IITs/IITM.jpg'),
      home_score:'6',
      away_score:'4',
  },
  {
    id: 14,
    date: 'Oct 7 2023',
    time: 'Evening',
    pool: 'Semi Final',
    home_team: 'IIT DELHI',
    away_team: 'IIT BOMBAY',
    logo_home_team: require('./Assests/IITs/IITD.jpg'),
    logo_away_team: require('./Assests/IITs/IITB.jpg'),
      home_score:'3',
      away_score:'12',
  },
  ],
  "Sunday 8th October": [{
    id: 15,
    date: 'Oct 8 2023',
    time: 'Evening',
    pool: '3rd Place',
    home_team: 'Loser of F1',
    away_team: 'Loser of F2',
    logo_home_team: require('./Assests/IITs/temp.jpg'),
    logo_away_team: require('./Assests/IITs/temp.jpg'),
      home_score:'',
      away_score:'',
  },
  {
    id: 16,
    date: 'Oct 8 2023',
    time: 'Evening',
    pool: 'Final',
    home_team: 'Winner of F1',
    away_team: 'Winner of F2',
    logo_home_team: require('./Assests/IITs/temp.jpg'),
    logo_away_team: require('./Assests/IITs/temp.jpg'),
      home_score:'',
      away_score:'',
  },
  ],
};

export default Results;
