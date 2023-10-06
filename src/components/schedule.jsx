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
              <p>Morning Session: 08:00 AM | <span>Evening Session: 04:00 PM </span> </p>
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
              <p>Morning Session: 08:00 AM | <span>Evening Session: 04:00 PM </span> </p>

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
              <p>Morning Session: 08:00 AM | <span>Evening Session: 04:00 PM </span> </p>

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
              <p>Morning Session: 08:00 AM | <span>Evening Session: 04:00 PM </span> </p>

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
              <p>Morning Session: 08:00 AM | <span>Evening Session: 04:00 PM </span> </p>

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
              <p>Morning Session: 08:00 AM | <span>Evening Session: 04:00 PM </span> </p>

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
      <Water_Polo matches={waterPoloMatches[selectedDate]} />
      <Footer />
    </section>
  );
};

const waterPoloMatches = {
  "Wednesday 4th October": [
    {
      id: 1,
      date: 'Oct 4 2023',
      time: 'Morning',
      pool: 'C',
      home_team: 'IIT BOMBAY',
      away_team: 'IIT KANPUR',
      logo_home_team: require('./Assests/IITs/IITB.jpg'),
      logo_away_team: require('./Assests/IITs/IITK.jpg'),
    },
    {
      id: 2,
      date: 'Oct 4 2023',
      time: 'Morning',
      pool: 'D',
      home_team: 'IIT MADRAS',
      away_team: 'IIT GANDHINAGAR',
      logo_home_team: require('./Assests/IITs/IITM.jpg'),
      logo_away_team: require('./Assests/IITs/IITGN.jpg'),
    },
    {
      id: 3,
      date: 'Oct 4 2023',
      time: 'Evening',
      pool: 'A',
      home_team: 'IIT KHARAGPUR',
      away_team: 'IIT DHANBAD',
      logo_home_team: require('./Assests/IITs/IITKGP.jpg'),
      logo_away_team: require('./Assests/IITs/IITDH.jpg'),
    },
    {
      id: 4,
      date: 'Oct 4 2023',
      time: 'Evening',
      pool: 'B',
      home_team: 'IIT DELHI',
      away_team: 'IIT GUWAHATI',
      logo_home_team: require('./Assests/IITs/IITD.jpg'),
      logo_away_team: require('./Assests/IITs/IITG.jpg'),
    },
  ],
  "Thursday 5th October": [
    {
      id: 5,
      date: 'Oct 5 2023',
      time: 'Morning',
      pool: 'C',
      home_team: 'IIT BOMBAY',
      away_team: 'IIT ROORKEE',
      logo_home_team: require('./Assests/IITs/IITB.jpg'),
      logo_away_team: require('./Assests/IITs/IITR.jpg'),
    },
    {
      id: 6,
      date: 'Oct 5 2023',
      time: 'Morning',
      pool: 'B',
      home_team: 'IIT DELHI',
      away_team: 'IIT BHU',
      logo_home_team: require('./Assests/IITs/IITD.jpg'),
      logo_away_team: require('./Assests/IITs/IITBHU.jpg'),
    },
    {
      id: 7,
      date: 'Oct 5 2023',
      time: 'Evening',
      pool: 'C',
      home_team: 'IIT ROORKEE',
      away_team: 'IIT KANPUR',
      logo_home_team: require('./Assests/IITs/IITR.jpg'),
      logo_away_team: require('./Assests/IITs/IITK.jpg'),
    },
    {
      id: 8,
      date: 'Oct 5 2023',
      time: 'Evening',
      pool: 'B',
      home_team: 'IIT BHU',
      away_team: 'IIT GUWAHATI',
      logo_home_team: require('./Assests/IITs/IITBHU.jpg'),
      logo_away_team: require('./Assests/IITs/IITG.jpg'),
    },

  ],
  "Friday 6th October": [{
    id: 9,
    date: 'Oct 6 2023',
    time: 'Morning',
    pool: 'Quarter Final',
    home_team: 'Winner of Pool A',
    away_team: 'Runner of Pool C',
    logo_home_team: require('./Assests/IITs/temp.jpg'),
    logo_away_team: require('./Assests/IITs/temp.jpg'),
  },
  {
    id: 10,
    date: 'Oct 6 2023',
    time: 'Morning',
    pool: 'Quarter Final',
    home_team: 'Winner of Pool B',
    away_team: 'Runner of Pool D',
    logo_home_team: require('./Assests/IITs/temp.jpg'),
    logo_away_team: require('./Assests/IITs/temp.jpg'),
  },
  {
    id: 11,
    date: 'Oct 6 2023',
    time: 'Evening',
    pool: 'Semi Final',
    home_team: 'Runner of Pool A',
    away_team: 'Winner of Pool C',
    logo_home_team: require('./Assests/IITs/temp.jpg'),
    logo_away_team: require('./Assests/IITs/temp.jpg'),
  },
  {
    id: 12,
    date: 'Oct 6 2023',
    time: 'Evening',
    pool: 'Semi Final',
    home_team: 'Runner of Pool B',
    away_team: 'Winner of Pool D',
    logo_home_team: require('./Assests/IITs/temp.jpg'),
    logo_away_team: require('./Assests/IITs/temp.jpg'),
  },
  ],
  "Saturday 7th October": [{
    id: 13,
    date: 'Oct 7 2023',
    time: 'Morning',
    pool: 'Final',
    home_team: 'SF 1',
    away_team: 'SF 4',
    logo_home_team: require('./Assests/IITs/temp.jpg'),
    logo_away_team: require('./Assests/IITs/temp.jpg'),
  },
  {
    id: 14,
    date: 'Oct 7 2023',
    time: 'Evening',
    pool: 'Final',
    home_team: 'SF 2',
    away_team: 'SF 3',
    logo_home_team: require('./Assests/IITs/temp.jpg'),
    logo_away_team: require('./Assests/IITs/temp.jpg'),
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
  },
  ],
};


export default Schedule;
