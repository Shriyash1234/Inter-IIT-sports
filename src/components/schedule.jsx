import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import './CSS/schedule.css';
import Water_Polo from './waterpolo';

const Schedule = () => {
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setSelectedDate(date);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const renderSchedule = () => {
    switch (selectedDate) {
      case 'Wednesday 4th October':
        return (
          <div>
            {/* Morning events */}
            <div className='event-divs'>
              <p>Morning Session: 07.00 AM | <span>Evening Session: 03.30 PM </span> </p>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>400M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c', textAlign: 'left' }}>Heats/Time Trials</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/relay.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>4 X 100M Medley Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Time Trials</p>
              </div>
            </div>

            {/* Evening Events  */}
            <div className='event-divs'>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
              </div>
            </div>

          </div>
        );

      case 'Thursday 5th October':
        return (
          <div>
            {/* Morning events */}
            <div className='event-divs'>
              <p>Morning Session: 07.00 AM | <span>Evening Session: 03.30 PM </span> </p>
              
              {/* Morning Session */}
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Individual Medley</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
            </div>

            <div className='event-divs'>
              {/* Evening Session */}
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
            </div>
          </div>
        );

      case 'Friday 6th October':
        return (
          <div>
            <div className='event-divs'>
              <p>Morning Session: 07.00 AM | <span>Evening Session: 03.30 PM </span> </p>
              
              {/* Morning Session */}
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>4 x 50M Freestyle Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Time Trials
                </p>
              </div>
            </div>
            <div className='event-divs'>
              {/* Evening Session */}
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Back Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
            </div>
          </div>
        );

      case 'Saturday 7th October':
        return (
          <div>
            <div className='event-divs'>
              <p>Morning Session: 07.00 AM | <span>Evening Session: 03.30 PM </span> </p>
              
              {/* Morning Session */}
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>4 x 100M Freestyle Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Time Trials
                </p>
              </div>
            </div>

            <div className='event-divs'>
              {/* Evening Session */}
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Butterfly</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>50M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
            </div>
          </div>

        );

      case 'Sunday 8th October':
        return (
          <div>
            <div className='event-divs'>
              <p>Morning Session: 07.00 AM | <span>Evening Session: 03.30 PM </span> </p>
              
              {/* Morning Session */}
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/freesyle.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>1500M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Time Trials
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Heats
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/relay.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>4 x 50M Medley Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Time Trials
                </p>
              </div>
            </div>

            <div className='event-divs'>
              {/* Evening Session */}
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img
                  src={require('./Assests/icons/backstroke.png')}
                  className='event-icon'
                  alt='Event Icon'
                />
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>
                  Final
                </p>
              </div>
            </div>
          </div>
        );


      default:
        return (
          <div>
            {/* Morning events */}
            <div className='event-divs'>
              <p>Morning Session: 07.00 AM | <span>Evening Session: 03.30 PM </span> </p>
              
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>400M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c', textAlign: 'left' }}>Heats/Time Trials</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Heats</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-blue'></div>
                <p className='event-timing'>Morning</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/relay.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>4 X 100M Medley Relay</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Time Trials</p>
              </div>
            </div>

            {/* Evening Events  */}
            <div className='event-divs'>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Women</p>
                <p className='event-timing'>50M Backstroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/backstroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>100M Freestyle</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
              </div>
              <div className='event-div'>
                <div className='vertical-line-orange'></div>
                <p className='event-timing'>Evening</p>
                <div className='vertical-line-grey'></div>
                <img src={require('./Assests/icons/breaststroke.png')} className='event-icon'></img>
                <p className='event-timing'>Men</p>
                <p className='event-timing'>200M Breast Stroke</p>
                <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
              </div>
            </div>

          </div>
        );
    }
  };

  return (
    <section className='schedule-page'>
      <Header color='white' />
      {/* Add buttons for other dates */}
      <div className='buttons-container'>
        <button className='date-button btn-1' onClick={() => handleDateButtonClick('Wednesday 4th October')}>4th Oct</button>
        <button className='date-button btn-2' onClick={() => handleDateButtonClick('Thursday 5th October')}>5th Oct</button>
        <button className='date-button btn-3' onClick={() => handleDateButtonClick('Friday 6th October')}>6th Oct</button>
        <button className='date-button btn-4' onClick={() => handleDateButtonClick('Saturday 7th October')}>7th Oct</button>
        <button className='date-button btn-5' onClick={() => handleDateButtonClick('Sunday 8th October')}>8th Oct</button>
      </div>

      <div className='schedule-div'>
        <div className='date-day'>
          <p>{selectedDate}</p>
        </div>
        {renderSchedule()}
      </div>
      <Water_Polo />
      <Footer />
    </section>
  );
};

export default Schedule;
