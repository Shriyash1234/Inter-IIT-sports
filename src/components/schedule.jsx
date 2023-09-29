import React from 'react'
import Header from './header'
import Footer from './footer'
import './CSS/schedule.css'
const Schedule = () => {
  return (
    <section className='schedule-page'>
      <Header color="black" />
      <div className='schedule-div'>
        <div className='date-day'>
          <p>Wednesday 4th October</p>
        </div>
        <div className='event-divs'>
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
          <div className='event-div'>
            <div className='vertical-line-blue'></div>
            <p className='event-timing'>Morning</p>
            <div className='vertical-line-grey'></div>
            <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
            <p className='event-timing'>Men</p>
            <p className='event-timing'>Water Polo</p>
            <p className='event-timing league-matches'>
              <img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" />(C1) BOMBAY vs&nbsp;&nbsp;
              <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />(C2) KANPUR
            </p>
            <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
          </div>
          <div className='event-div'>
            <div className='vertical-line-blue'></div>
            <p className='event-timing'>Morning</p>
            <div className='vertical-line-grey'></div>
            <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
            <p className='event-timing' >Men</p>
            <p className='event-timing' >Water Polo</p>
            <p className='event-timing league-matches' >
              <img src={require('./Assests/IITs/IITM.jpg')} className="IIT-icon" />(D1) MADRAS vs&nbsp;&nbsp;
              <img src={require('./Assests/IITs/IITGN.jpg')} className="IIT-icon" />(D2) GANDHINAGAR
            </p>
            <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
          </div>
        </div>
        <div className='event-divs'>
          <div className='event-div'>
            <div className='vertical-line-orange'></div>
            <p className='event-timing'>Evening</p>
            <div className='vertical-line-grey'></div>
            <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
            <p className='event-timing'>Men</p>
            <p className='event-timing'>400M Freestyle</p>
            <p className='event-timing' style={{ color: '#7f848c' }}>Final</p>
          </div>
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
          <div className='event-div'>
            <div className='vertical-line-orange'></div>
            <p className='event-timing'>Evening</p>
            <div className='vertical-line-grey'></div>
            <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
            <p className='event-timing'>Men</p>
            <p className='event-timing'>Water Polo</p>
            <p className='event-timing league-matches'>
              <img src={require('./Assests/IITs/IITKGP.jpg')} className="IIT-icon" />(A1) KHARAGPUR vs&nbsp;&nbsp;
              <img src={require('./Assests/IITs/IITDH.jpg')} className="IIT-icon" />(A2) DHANBAD
            </p>
            <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
          </div>
          <div className='event-div'>
            <div className='vertical-line-orange'></div>
            <p className='event-timing'>Evening</p>
            <div className='vertical-line-grey'></div>
            <img src={require('./Assests/icons/water-polo.png')} className='event-icon'></img>
            <p className='event-timing' >Men</p>
            <p className='event-timing' >Water Polo</p>
            <p className='event-timing league-matches' >
              <img src={require('./Assests/IITs/IITD.jpg')} className="IIT-icon" />(B1) DELHI vs&nbsp;&nbsp;
              <img src={require('./Assests/IITs/IITG.jpg')} className="IIT-icon" />(B3) GUWAHATI
            </p>
            <p className='event-timing' style={{ color: '#7f848c' }}>League Matches</p>
          </div>
        </div>
      </div>
      <div className='schedule-div'>
        <div className='date-day'>
          <p>Thursday 5th October</p>
        </div>
        <div className='event-divs'>
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
          <div className='event-div'>
            <div className='vertical-line-blue'></div>
            <p className='event-timing'>Morning</p>
            <div className='vertical-line-grey'></div>
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
          </div>
          <div className='event-div'>
            <div className='vertical-line-blue'></div>
            <p className='event-timing'>Morning</p>
            <div className='vertical-line-grey'></div>
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
          </div>
          {/* Add more event-div components for the morning session */}
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
              src={require('./Assests/icons/relay.png')}
              className='event-icon'
              alt='Event Icon'
            />
            <p className='event-timing'>Men</p>
            <p className='event-timing'>200M Individual Medley</p>
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
          <div className='event-div'>
            <div className='vertical-line-orange'></div>
            <p className='event-timing'>Evening</p>
            <div className='vertical-line-grey'></div>
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
          </div>
          <div className='event-div'>
            <div className='vertical-line-orange'></div>
            <p className='event-timing'>Evening</p>
            <div className='vertical-line-grey'></div>
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
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Schedule
