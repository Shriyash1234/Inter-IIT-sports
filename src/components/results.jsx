import React, { useEffect, useState } from 'react'
import Header from './header'
import { ChevronDown } from 'lucide-react'
import JsonToTable from './jsontotable'
import tableData from './Assests/Data/Inter-IIT-table.json'
import data from './Assests/Data/Results/400m.json'
import './CSS/results.css'
import './CSS/schedule.css'
import Footer from './footer';

const Results = () => {

  const [isVisible, setIsVisible] = useState(Array(100).fill(false));

  useEffect(() => {
    const elementHeight = document.getElementById('result-table').offsetHeight;
    document.getElementsByClassName('result-divs1')[0].style.marginTop = elementHeight * 1.1 + 'px';
    console.log(elementHeight);
  }, []);

  const toggleVisibility = (index) => {
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
              <div className='event-div results-event-div' onClick={() => toggleVisibility(0)} >
                <div className='vertical-line-blue'></div>
                <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>400M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c', textAlign: 'left' }}>Heats/Time Trials</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[0]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(1)}>
                <div className='vertical-line-blue'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[1]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(2)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[2]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(3)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[3]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(4)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/relay.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>4 X 100M Medley Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Time Trials</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[4]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(5)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" />(C1) BOMBAY vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />(C2) KANPUR
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown'/>
                <div className={isVisible[5]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(6)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing' >Men</p>
                <p className='event-timing' >Water Polo</p>
                <p className='event-timing league-matches' >
                  <img src={require('./Assests/IITs/IITM.jpg')} className="IIT-icon" />(D1) MADRAS vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITGN.jpg')} className="IIT-icon" />(D2) GANDHINAGAR
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown'/>
                {/* <div className={isVisible[6]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Evening Events  */}
            <div className='event-divs result-divs'>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(7)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>400M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[7]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(8)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[8]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(9)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[9]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(10)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[10]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(11)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img src={require('./Assests/IITs/IITKGP.jpg')} className="IIT-icon" />(A1) KHARAGPUR vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITDH.jpg')} className="IIT-icon" />(A2) DHANBAD
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown'/>
                <div className={isVisible[11]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(12)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing' >Men</p>
                <p className='event-timing' >Water Polo</p>
                <p className='event-timing league-matches' >
                  <img src={require('./Assests/IITs/IITD.jpg')} className="IIT-icon" />(B1) DELHI vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITG.jpg')} className="IIT-icon" />(B3) GUWAHATI
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown'/>
                <div className={isVisible[5]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        );

      case 'Thursday 5th October':
        return (
          <div>
            {/* Morning events */}
            <div className='event-divs result-divs'>
              {/* Morning Session */}
              <div className='event-div results-event-div' onClick={() => toggleVisibility(13)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[13]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(14)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[14]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(15)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Individual Medley</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[15]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(16)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[16]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(17)}>
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
                <ChevronDown className='dropdown'/>
                <div className={isVisible[17]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(18)}>
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
                <ChevronDown className='dropdown'/>
                <div className={isVisible[18]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
              {/* Add more event-div results-event-div components for the morning session */}
            </div>

            <div className='event-divs result-divs'>
              {/* Evening Session */}
              <div className='event-div results-event-div' onClick={() => toggleVisibility(19)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[19]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(20)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[20]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(21)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Individual Medley</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[21]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(22)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[22]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(23)}>
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
                <ChevronDown className='dropdown'/>
                <div className={isVisible[23]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(24)}>
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
                <ChevronDown className='dropdown'/>
                <div className={isVisible[24]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

      case 'Friday 6th October':
        return (
          <div>
            <div className='event-divs result-divs'>
              {/* Morning Session */}
              <div className='event-div results-event-div' onClick={() => toggleVisibility(25)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[25]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(26)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[26]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(27)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[27]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(28)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[28]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(29)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>4 x 50M Freestyle Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Time Trials</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[29]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(30)}>
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
                <ChevronDown className='dropdown'/>
                <div className={isVisible[30]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
              {/* Add more event-div results-event-div components for the morning session */}
            </div>
            <div className='event-divs result-divs'>
              {/* Evening Session */}
              <div className='event-div results-event-div' onClick={() => toggleVisibility(31)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[31]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(32)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[32]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(33)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[33]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(34)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[34]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(35)}>
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
                <ChevronDown className='dropdown'/>
                <div className={isVisible[35]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Saturday 7th October':
        return (
          <div>
            <div className='event-divs result-divs'>
              {/* Morning Session */}
              <div className='event-div results-event-div' onClick={() => toggleVisibility(36)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[36]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(37)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[37]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(38)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[38]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(39)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[39]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(40)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>4 x 100M Freestyle Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Time Trials</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[40]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(41)}>
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
              </div>
              {/* Add more event-div results-event-div components for the morning session */}
            </div>
            <div className='event-divs result-divs'>
              {/* Evening Session */}
              <div className='event-div results-event-div' onClick={() => toggleVisibility(42)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[42]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(43)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[43]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(44)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[44]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(45)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[45]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(46)}>
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
                <ChevronDown className='dropdown'/>
                <div className={isVisible[46]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        );

      case 'Sunday 8th October':
        return (
          <div>
            <div className='event-divs result-divs'>
              {/* Morning Session */}
              <div className='event-div results-event-div' onClick={() => toggleVisibility(47)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>1500M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Time Trials</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[47]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(48)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[48]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(49)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[49]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(50)}>
                <div className='vertical-line-blue'></div>
                
                
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>4 x 50M Medley Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Time Trials</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[50]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(51)}>
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
                <ChevronDown className='dropdown'/>
                <div className={isVisible[51]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
              {/* Add more event-div results-event-div components for the morning session */}
            </div>
            <div className='event-divs result-divs'>
              {/* Evening Session */}
              <div className='event-div results-event-div' onClick={() => toggleVisibility(52)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[52]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(53)}>
                <div className='vertical-line-orange'></div>
                
                
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[53]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibilityLeague(54)}>
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
                <ChevronDown className='dropdown'/>
                <div className={isVisible[5]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );


      default:
        return (
          <div>
            {/* Morning events */}
            <div className='event-divs result-divs'>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(55)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>400M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c', textAlign: 'left' }}>Heats/Time Trials</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[55]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(56)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[56]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(57)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[57]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(58)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[58]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(59)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/relay.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>4 X 100M Medley Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Time Trials</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[59]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(60)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" />(C1) BOMBAY vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />(C2) KANPUR
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(61)}>
                <div className='vertical-line-blue'></div>
                
                
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing' >Men</p>
                <p className='event-timing' >Water Polo</p>
                <p className='event-timing league-matches' >
                  <img src={require('./Assests/IITs/IITM.jpg')} className="IIT-icon" />(D1) MADRAS vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITGN.jpg')} className="IIT-icon" />(D2) GANDHINAGAR
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown'/>
                <div className={isVisible[61]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Evening Events  */}
            <div className='event-divs result-divs'>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(62)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>400M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[62]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(63)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[63]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(64)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[64]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(65)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
                <ChevronDown className='dropdown'/>
                <JsonToTable visiblity={isVisible[65]? "visible":"not-visible"} />
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(66)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>Water Polo</p>
                <p className='event-timing league-matches'>
                  <img src={require('./Assests/IITs/IITKGP.jpg')} className="IIT-icon" />(A1) KHARAGPUR vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITDH.jpg')} className="IIT-icon" />(A2) DHANBAD
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown'/>
                <div className={isVisible[66]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
              <div className='event-div results-event-div' onClick={() => toggleVisibility(67)}>
                <div className='vertical-line-orange'></div>
                
                
                <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
                <p className='event-timing' >Men</p>
                <p className='event-timing' >Water Polo</p>
                <p className='event-timing league-matches' >
                  <img src={require('./Assests/IITs/IITD.jpg')} className="IIT-icon" />(B1) DELHI vs&nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITG.jpg')} className="IIT-icon" />(B3) GUWAHATI
                </p>
                <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
                <ChevronDown className='dropdown'/>
                <div className={isVisible[67]?'event-div versus-div':'not-visible'}>
                  <p className='versus-div-score-text'>BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                  <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR</p>
                  <div>
                  <p>(1:3, 1:3, 1:4, 2:3)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className='Results'>
      <Header color='black' />
      <div className='Results-div'>
        <p className='results-heading'>Overall Results</p>
        <JsonToTable jsonData={tableData} table="resultTable" />
      </div>
      <div className='event-divs result-divs1'>
        <p className='results-heading' style={{marginLeft:"14vw"}}>Results</p>
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
      </section>
      </div>
      <Footer />
    </section>
  );
};

export default Results;
