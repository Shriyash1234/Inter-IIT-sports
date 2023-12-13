import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import './CSS/schedule.css';
import ScheduleHelper from './schedulehelper';

const Schedule = () => {
  const [selectedSport, setselectedSport] = useState('Cricket Men');
  const [selectedDate,setSelectedDate] = useState('15th Dec')

  const dateButtonMappings = {
    "Cricket Men": 'btn-1',
    "Football Men": 'btn-2',
    "Squash Men": 'btn-3',
    "Squash Women": 'btn-4',
    "Tennis Men": 'btn-5',
    "Tennis Women": 'btn-6',
    "Athletics": 'btn-7',
    "14th Dec":"btn-8",
    "15th Dec": 'btn-9',
    "16th Dec": 'btn-10',
    "17th Dec": 'btn-11',
    "18th Dec": 'btn-12',
    "19th Dec": 'btn-13',
    "20th Dec": 'btn-14',
    "21st Dec": 'btn-15',
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
  function setDateColor(btn) {
    const dateButtons = document.getElementsByClassName('date-button-2');
    const activeButton = document.getElementsByClassName(btn)[0];
    for (let i = 0; i < dateButtons.length; i++) {
      dateButtons[i].style.color = "#41c5eb";
      dateButtons[i].style.backgroundColor = "#fff";
    }
    activeButton.style.color = "#fff";
    activeButton.style.backgroundColor = "#41c5eb";
    
  }
  window.onload = () => {
    setColor('btn-1');
    setColor('btn-8')
  }

  const handleSportsButtonClick = (date) => {
    const buttonClass = dateButtonMappings[date];
    if (buttonClass) {
      setColor(buttonClass);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setselectedSport(date);
  };
  const handleDateButtonClick = (date) => {
    const buttonClass = dateButtonMappings[date];
    if (buttonClass) {
      setDateColor(buttonClass);
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
  const renderEventsForDate = (date) => {
    return (
      <div key={date} className='event-divs'>
        <p>Morning Session: 08:00 AM | <span>Evening Session: 04:00 PM </span> </p>
        {athleticsMatches[date].length !== 0 ? (
          athleticsMatches[date].map((match, index) => (
            <div key={index} className='event-div'>
              {match.Session === "Morning" ? <div className='vertical-line-blue'></div> : <div className='vertical-line-orange'></div>}
              <p className='event-timing'>{match.Session}</p>
              <div className='vertical-line-grey'></div>
              <img src={iconsPath[match.Event]} className='event-icon' alt={match.Event}></img>
              <p className='event-timing'>{match.Gender}</p>
              <p className='event-timing'>{match.Event}</p>
              <p className='event-timing' style={{ color: '#7f848c', textAlign: 'left' }}>{match.Round}</p>
            </div>
          ))
        ) : (
          <p className='no-matches-block'>No Matches</p>
        )}
      </div>
    );
  };
  return (
    <section className='schedule-page'>
      <Header color='white' />
      <div className='buttons-container'id="style-2" >
        <button className='date-button btn-1' onClick={() => handleSportsButtonClick('Cricket Men')}>Cricket Men</button>
        <button className='date-button btn-2' onClick={() => handleSportsButtonClick('Football Men')}>Football Men</button>
        <button className='date-button btn-3' onClick={() => handleSportsButtonClick('Squash Men')}>Squash Men</button>
        <button className='date-button btn-4' onClick={() => handleSportsButtonClick('Squash Women')}>Squash Women</button>
        <button className='date-button btn-5' onClick={() => handleSportsButtonClick('Tennis Men')}>Tennis Men</button>
        <button className='date-button btn-6' onClick={() => handleSportsButtonClick('Tennis Women')}>Tennis Women</button>
        <button className='date-button btn-7' onClick={() => handleSportsButtonClick('Athletics')}>Athletics</button>
      </div>
      <div className='buttons-container-2' id="style-2">
        <p className='Dates-text'>Dates</p>
        <button className='btn-8 date-button-2' onClick={() => handleDateButtonClick('14th Dec')}>14th Dec</button>
        <button className='btn-9 date-button-2' onClick={() => handleDateButtonClick('15th Dec')}>15th Dec</button>
        <button className='btn-10 date-button-2' onClick={() => handleDateButtonClick('16th Dec')}>16th Dec</button>
        <button className='btn-11 date-button-2' onClick={() => handleDateButtonClick('17th Dec')}>17th Dec</button>
        <button className='btn-12 date-button-2' onClick={() => handleDateButtonClick('18th Dec')}>18th Dec</button>
        <button className='btn-13 date-button-2' onClick={() => handleDateButtonClick('19th Dec')}>19th Dec</button>
        <button className='btn-14 date-button-2' onClick={() => handleDateButtonClick('20th Dec')}>20th Dec</button>
        <button className='btn-15 date-button-2' onClick={() => handleDateButtonClick('21st Dec')}>21st Dec</button>
      </div>

      <div className='schedule-div'>
        <div className='date-day'>
          <p>{selectedSport}</p>
        </div>
        {selectedSport ==="Athletics"?renderEventsForDate(selectedDate):""}
        </div>
        {selectedSport != "Athletics"?<ScheduleHelper matches={sportsMatches[selectedSport]} date={selectedDate}/>:""}
        <Footer />
    </section>
  );
};

const sportsMatches = {
  "Football Men": 
    [
        {
          "id": 1,
          "date": "15.12.2023",
          "time": "12:15 PM",
          "pool": "C",
          "ground":"G-1",
          "home_team": "IIT Patna",
          "away_team": "IIT Mandi",
          "logo_home_team":  require('./Assests/IITs/IITP.jpg'),
          "logo_away_team": require('./Assests/IITs/IITMD.jpg')
          // home_score:'7',
          // away_score:'3',
          // statement:"IIT Patna won by 4 goals."
        },
        {
          "id": 2,
          "date": "15.12.2023",
          "time": "08:30 AM",
          "pool": "F",
          "ground":"G-2",
          "home_team": "IIT Tirupati",
          "away_team": "IIT Dharwad",
          "logo_home_team": require('./Assests/IITs/IITT.jpg'),
          "logo_away_team": require('././Assests/IITs/IITDH.jpg')
        },
        {
          "id": 3,
          "date": "15.12.2023",
          "time": "10:30 AM",
          "pool": "G",
          "ground":"G-2",
          "home_team": "IIT Hyderbad",
          "away_team": "IIT Varanasi",
          "logo_home_team": require('./Assests/IITs/IITDH.jpg'),
          "logo_away_team": require('./Assests/IITs/IITBHU.jpg')
        },
        {
          "id": 4,
          "date": "15.12.2023",
          "time": "06:30 PM",
          "pool": "E",
          "ground":"G-1",
          "home_team": "IIT Bhubaneshwar",
          "away_team": "IIT Delhi",
          "logo_home_team": require("./Assests/IITs/IITBBS.jpg"),
          "logo_away_team": require('./Assests/IITs/IITD.jpg')
        },
        {
          "id": 5,
          "date": "15.12.2023",
          "time": "12:30 PM",
          "pool": "D",
          "ground":"G-2",
          "home_team": "IIT Bombay",
          "away_team": "IIT Kharagpur",
          "logo_home_team": require('./Assests/IITs/IITB.jpg'),
          "logo_away_team": require('./Assests/IITs/IITKGP.jpg')
        },
        {
          "id": 6,
          "date": "15.12.2023",
          "time": "03:30 PM",
          "pool": "A",
          "ground":"G-2",
          "home_team": "IIT Dhanbad",
          "away_team": "IIT Madras",
          "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
          "logo_away_team": require('./Assests/IITs/IITM.jpg')
        },
        {
          "id": 7,
          "date": "16.12.2023",
          "time": "10:30 AM",
          "pool": "E",
          "ground":"G-1",
          "home_team": "IIT Ropar",
          "away_team": "IIT Delhi",
          "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
          "logo_away_team": require('./Assests/IITs/IITD.jpg')
        },
        {
          "id": 8,
          "date": "16.12.2023",
          "time": "12:15 PM",
          "pool": "C",
          "ground":"G-1",
          "home_team": "IIT Kanpur",
          "away_team": "IIT Mandi",
          "logo_home_team": require('./Assests/IITs/IITK.jpg'),
          "logo_away_team":require('./Assests/IITs/IITMD.jpg')
        },
        {
          "id": 9,
          "date": "16.12.2023",
          "time": "08:30 AM",
          "pool": "F",
          "ground":"G-2",
          "home_team": "IIT Bhilai",
          "away_team": "IIT Dharwad",
          "logo_home_team": require('./Assests/IITs/IITBH.jpg'),
          "logo_away_team": require('./Assests/IITs/IITDH.jpg')
        },
        {
          "id": 10,
          "date": "16.12.2023",
          "time": "10:30 AM",
          "pool": "G",
          "ground":"G-2",
          "home_team": "IIT Guwahati",
          "away_team": "IIT Varanasi",
          "logo_home_team": require('./Assests/IITs/IITG.jpg'),
          "logo_away_team": require('./Assests/IITs/IITBHU.jpg')
        },
        {
          "id": 11,
          "date": "16.12.2023",
          "time": "06:30 PM",
          "pool": "B",
          "ground":"G-1",
          "home_team": "GANDHINAGAR (B1)",
          "away_team": "PALAKKAD (B2)",
          "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
          "logo_away_team": require('./Assests/IITs/IITPKD.jpg')
        },
        {
          "id": 12,
          "date": "16.12.2023",
          "time": "12:30 PM",
          "pool": "D",
          "ground":"G-2",
          "home_team": "IIT Indore",
          "away_team": "IIT Kharagpur",
          "logo_home_team": require('./Assests/IITs/IITI.jpg'),
          "logo_away_team": require('./Assests/IITs/IITKGP.jpg')
        },
        {
          "id": 13,
          "date": "16.12.2023",
          "time": "03:30 PM",
          "pool": "A",
          "ground":"G-2",
          "home_team": "IIT Jodhpur",
          "away_team": "IIT Madras",
          "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
          "logo_away_team": require('./Assests/IITs/IITM.jpg')
        },
        {
          "id": 14,
          "date": "17.12.2023",
          "time": "12:15 PM",
          "pool": "C",
          "ground":"G-1",
          "home_team": "IIT Patna",
          "away_team": "IIT Kanpur",
          "logo_home_team": require('./Assests/IITs/IITP.jpg'),
          "logo_away_team": require('./Assests/IITs/IITK.jpg')
        },
        {
          "id": 15,
          "date": "17.12.2023",
          "time": "08:30 AM",
          "pool": "F",
          "ground":"G-2",
          "home_team": "IIT Tirupati",
          "away_team": "IIT Bhilai",
          "logo_home_team": require('./Assests/IITs/IITT.jpg'),
          "logo_away_team": require('./Assests/IITs/IITBH.jpg')
        },
        {
          "id": 16,
          "date": "17.12.2023",
          "time": "10:30 AM",
          "pool": "G",
          "ground":"G-2",
          "home_team": "IIT Hyderbad",
          "away_team": "IIT Guwahati",
          "logo_home_team": require('./Assests/IITs/IITDH.jpg'),
          "logo_away_team": require('./Assests/IITs/IITG.jpg')
        },
        {
          "id": 17,
          "date": "17.12.2023",
          "time": "06:30 PM",
          "pool": "E",
          "ground":"G-1",
          "home_team": "IIT Bhubaneshwar",
          "away_team": "IIT Ropar",
          "logo_home_team": require("./Assests/IITs/IITBBS.jpg"),
          "logo_away_team": require('./Assests/IITs/IITRPR.jpg')
        },
        {
          "id": 18,
          "date": "17.12.2023",
          "time": "12:30 PM",
          "pool": "D",
          "ground":"G-2",
          "home_team": "IIT Bombay",
          "away_team": "IIT Indore",
          "logo_home_team": require('./Assests/IITs/IITB.jpg'),
          "logo_away_team": require('./Assests/IITs/IITI.jpg')
        },
        {
          "id": 19,
          "date": "17.12.2023",
          "time": "03:30 PM",
          "pool": "A",
          "ground":"G-2",
          "home_team": "IIT Dhanbad",
          "away_team": "IIT Jodhpur",
          "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
          "logo_away_team": require('./Assests/IITs/IITJ.jpg')
        },
        {
          "id": 20,
          "date": "17.12.2023",
          "time": "08:00 PM",
          "pool": "H",
          "ground":"G-1",
          "home_team": "IIT Roorkee",
          "away_team": "IIT Jammu",
          "logo_home_team": require('./Assests/IITs/IITR.jpg'),
          "logo_away_team": require('./Assests/IITs/IITJMU.jpg')
        },
        {
          "id": 21,
          "date": "18.12.2023",
          "time": "10:30 AM",
          "ground":"G-1",
          "stage": "PRE-QUARTER FINAL",
          "home_team": "WINNER OF POOL A - A1",
          "away_team": "RUNNER OF POOL C - C2",
          "ground": "G-1"
        },
        {
          "id": 22,
          "date": "18.12.2023",
          "time": "06:30 PM",
          "ground":"G-1",
          "stage": "PRE-QUARTER FINAL",
          "home_team": "WINNER OF POOL B - B1",
          "away_team": "RUNNER OF POOL D - D2",
          "ground": "G-1"
        },
        {
          "id": 23,
          "date": "18.12.2023",
          "time": "08:30 AM",
          "ground":"G-2",
          "stage": "PRE-QUARTER FINAL",
          "home_team": "RUNNER OF POOL A - A2",
          "away_team": "WINNER OF POOL C - C1",
          "ground": "G-2"
        },
        {
          "id": 24,
          "date": "18.12.2023",
          "time": "08:00 PM",
          "ground":"G-1",
          "stage": "PRE-QUARTER FINAL",
          "home_team": "RUNNER OF POOL B - B2",
          "away_team": "WINNER OF POOL D - D1",
          "ground": "G-1"
        },
        {
          "id": 25,
          "date": "18.12.2023",
          "time": "12:30 PM",
          "ground":"G-1",
          "stage": "PRE-QUARTER FINAL",
          "home_team": "WINNER OF POOL E - E1",
          "away_team": "RUNNER OF POOL G - G2",
          "ground": "G-1"
        },
        {
          "id": 26,
          "date": "18.12.2023",
          "time": "12:30 PM",
          "ground":"G-2",
          "stage": "PRE-QUARTER FINAL",
          "home_team": "WINNER OF POOL F - F1",
          "away_team": "RUNNER OF POOL H - H2",
          "ground": "G-2"
        },
        {
          "id": 27,
          "date": "18.12.2023",
          "time": "03:30 PM",
          "ground":"G-2",
          "stage": "PRE-QUARTER FINAL",
          "home_team": "RUNNER OF POOL E - E2",
          "away_team": "WINNER OF POOL G - G1",
          "ground": "G-2"
        },
        {
          "id": 28,
          "date": "18.12.2023",
          "time": "10:30 AM",
          "ground":"G-2",
          "stage": "PRE-QUARTER FINAL",
          "home_team": "RUNNER OF POOL F - F2",
          "away_team": "WINNER OF POOL H - H1",
          "ground": "G-2"
        },
        {
          "id": 29,
          "date": "19.12.2023",
          "time": "10:45 AM",
          "ground":"G-1",
          "stage": "QUARTER FINAL",
          "home_team": "WINNER OF PQ 1",
          "away_team": "WINNER OF PQ 6",
          "ground": "G-1"
        },
        {
          "id": 30,
          "date": "19.12.2023",
          "time": "12:15 PM",
          "ground":"G-1",
          "stage": "QUARTER FINAL",
          "home_team": "WINNER OF PQ 2",
          "away_team": "WINNER OF PQ 5",
          "ground": "G-1"
        },
        {
          "id": 31,
          "date": "19.12.2023",
          "time": "06:00 PM",
          "ground":"G-1",
          "stage": "QUARTER FINAL",
          "home_team": "WINNER OF PQ 3",
          "away_team": "WINNER OF PQ 8",
          "ground": "G-1"
        },
        {
          "id": 32,
          "date": "19.12.2023",
          "time": "07:30 PM",
          "ground":"G-1",
          "stage": "QUARTER FINAL",
          "home_team": "WINNER OF PQ 4",
          "away_team": "WINNER OF PQ 7",
          "ground": "G-1"
        },
        {
          "id": 33,
          "date": "20.12.2023",
          "time": "6:00 PM",
          "ground":"G-1",
          "stage": "SEMI FINAL",
          "home_team": "QF 1",
          "away_team": "QF 4",
          "ground": "G-1"
        },
        {
          "id": 34,
          "date": "20.12.2023",
          "time": "7:30 PM",
          "ground":"G-1",
          "stage": "SEMI FINAL",
          "home_team": "QF 2",
          "away_team": "QF 3",
          "ground": "G-1"
        },
        {
          "id": 35,
          "date": "21.12.2023",
          "time": "6:00 PM",
          "ground":"G-1",
          "stage": "3rd Place",
          "home_team": "LOSER OF SF1",
          "away_team": "LOSER OF SF2",
          "ground": "G-1"
        },
        {
          "id": 36,
          "date": "21.12.2023",
          "time": "7:30 PM",
          "ground":"G-1",
          "stage": "FINAL",
          "home_team": "WINNER OF SF1",
          "away_team": "WINNER OF SF2",
          "ground": "G-1"
        }
  ],
  "Cricket Men": 
  [
      {
        "id": 1,
        "date": "14.12.2023",
        "time": "8:30 AM",
        "pool": "B",
        "ground": "G-4",
        "home_team": "IIT Palakkad",
        "away_team": "IIT Dharwad",
        "logo_home_team": require('./Assests/IITs/IITPKD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITDH.jpg'),
      },
      {
        "id": 2,
        "date": "14.12.2023",
        "time": "8:30 AM",
        "pool": "C",
        "ground": "G-3",
        "home_team": "IIT Guwahati",
        "away_team": "IIT Goa",
        "logo_home_team": require('./Assests/IITs/IITG.jpg'),
        "logo_away_team": require('./Assests/IITs/IITGOA.jpg')
      },
      {
        "id": 3,
        "date": "14.12.2023",
        "time": "10:30 AM",
        "pool": "F",
        "ground": "G-2",
        "home_team": "IIT Indore",
        "away_team": "IIT Tirupati",
        "logo_home_team": require('./Assests/IITs/IITI.jpg'),
        "logo_away_team": require('./Assests/IITs/IITT.jpg')
      },
      {
        "id": 4,
        "date": "14.12.2023",
        "time": "10:30 AM",
        "pool": "G",
        "ground": "G-1",
        "home_team": "IIT Bhubaneswar",
        "away_team": "IIT Gandhinagar",
        "logo_home_team": require('./Assests/IITs/IITBBS.jpg'),
        "logo_away_team": require('./Assests/IITs/IITGN.jpg')
      },
      {
        "id": 5,
        "date": "14.12.2023",
        "time": "8:30 AM",
        "pool": "E",
        "ground": "G-5",
        "home_team": "IIT Hyderabad",
        "away_team": "IIT Kharagpur",
        "logo_home_team": require('./Assests/IITs/IITH.jpg'),
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg')
      },
      {
        "id": 6,
        "date": "15.12.2023",
        "time": "8:30 AM",
        "pool": "E",
        "ground": "G-4",
        "home_team": "IIT Ropar",
        "away_team": "IIT Kharagpur",
        "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg')
      },
      {
        "id": 7,
        "date": "15.12.2023",
        "time": "8:30 AM",
        "pool": "D",
        "ground": "G-3",
        "home_team": "IIT Roorkee",
        "away_team": "IIT Jodhpur",
        "logo_home_team": require('./Assests/IITs/IITR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITJ.jpg')
      },
      {
        "id": 8,
        "date": "15.12.2023",
        "time": "8:30 AM",
        "pool": "A",
        "ground": "G-2",
        "home_team": "IIT Mandi",
        "away_team": "IIT Bombay",
        "logo_home_team": require('./Assests/IITs/IITMD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITB.jpg')
      },
      {
        "id": 9,
        "date": "15.12.2023",
        "time": "8:30 AM",
        "pool": "B",
        "ground": "G-1",
        "home_team": "IIT Palakkad",
        "away_team": "IIT Dharwad",
        "logo_home_team": require('./Assests/IITs/IITPKD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITDH.jpg')
      },
      {
        "id": 10,
        "date": "15.12.2023",
        "time": "12:30 PM",
        "pool": "C",
        "ground": "G-4",
        "home_team": "IIT Kanpur",
        "away_team": "IIT Goa",
        "logo_home_team": require('./Assests/IITs/IITK.jpg'),
        "logo_away_team": require('./Assests/IITs/IITGOA.jpg')
      },
      {
        "id": 11,
        "date": "15.12.2023",
        "time": "12:30 PM",
        "pool": "F",
        "ground": "G-3",
        "home_team": "IIT BHU",
        "away_team": "IIT Tirupati",
        "logo_home_team": require('./Assests/IITs/IITBH.jpg'),
        "logo_away_team": require('./Assests/IITs/IITT.jpg')
      },
      {
        "id": 12,
        "date": "15.12.2023",
        "time": "12:30 PM",
        "pool": "G",
        "ground": "G-1",
        "home_team": "IIT Dhanbad",
        "away_team": "IIT Gandhinagar",
        "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITGN.jpg')
      },
      {
        "id": 13,
        "date": "16.12.2023",
        "time": "8:30 AM",
        "pool": "D",
        "ground": "G-3",
        "home_team": "IIT Madras",
        "away_team": "IIT Jodhpur",
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITJ.jpg')
      },
      {
        "id": 14,
        "date": "16.12.2023",
        "time": "8:30 AM",
        "pool": "A",
        "ground": "G-2",
        "home_team": "IIT Bhilai",
        "away_team": "IIT Bombay",
        "logo_home_team": require('./Assests/IITs/IITBH.jpg'),
        "logo_away_team": require('./Assests/IITs/IITB.jpg')
      },
      {
        "id": 15,
        "date": "16.12.2023",
        "time": "8:30 AM",
        "pool": "B",
        "ground": "G-1",
        "home_team": "IIT Palakkad",
        "away_team": "IIT Jammu",
        "logo_home_team": require('./Assests/IITs/IITPKD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITJMU.jpg')
      },
      {
        "id": 16,
        "date": "16.12.2023",
        "time": "12:30 PM",
        "pool": "C",
        "ground": "G-3",
        "home_team": "IIT Guwahati",
        "away_team": "IIT Kanpur",
        "logo_home_team": require('./Assests/IITs/IITG.jpg'),
        "logo_away_team": require('./Assests/IITs/IITK.jpg')
      },
      {
        "id": 17,
        "date": "16.12.2023",
        "time": "12:30 PM",
        "pool": "F",
        "ground": "G-2",
        "home_team": "IIT Indore",
        "away_team": "IIT BHU",
        "logo_home_team": require('./Assests/IITs/IITI.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBH.jpg')
      },
      {
        "id": 18,
        "date": "16.12.2023",
        "time": "12:30 PM",
        "pool": "G",
        "ground": "G-1",
        "home_team": "IIT Dhanbad",
        "away_team": "IIT Bhubaneswar",
        "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBBS.jpg')
      },
      {
        "id": 19,
        "date": "17.12.2023",
        "time": "12:30 PM",
        "pool": "E",
        "ground": "G-2",
        "home_team": "IIT Ropar",
        "away_team": "IIT Hyderabad",
        "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITH.jpg')
      },
      {
        "id": 20,
        "date": "17.12.2023",
        "time": "8:30 AM",
        "pool": "D",
        "ground": "G-2",
        "home_team": "IIT Roorkee",
        "away_team": "IIT Madras",
        "logo_home_team": require('./Assests/IITs/IITR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITM.jpg')
      },
      {
        "id": 21,
        "date": "17.12.2023",
        "time": "8:30 AM",
        "pool": "A",
        "ground": "G-1",
        "home_team": "IIT Mandi",
        "away_team": "IIT Bhilai",
        "logo_home_team": require('./Assests/IITs/IITMD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBH.jpg')
      },
      {
        "id": 22,
        "date": "17.12.2023",
        "time": "12:30 PM",
        "pool": "H",
        "ground": "G-1",
        "home_team": "IIT Delhi",
        "away_team": "IIT Patna",
        "logo_home_team": require('./Assests/IITs/IITD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITP.jpg')
      },
      {
        "id": 23,
        "date": "18.12.2023",
        "time": "8:30 AM",
        "ground": "G-2",
        "stage": "PQ1",
        "home_team": "WINNER OF POOL A - A1",
        "away_team": "RUNNER OF POOL C - C2"
      },
      {
        "id": 24,
        "date": "18.12.2023",
        "time": "8:30 AM",
        "ground": "G-4",
        "stage": "PQ2",
        "home_team": "WINNER OF POOL B - B1",
        "away_team": "RUNNER OF POOL D - D2"
      },
      {
        "id": 25,
        "date": "18.12.2023",
        "time": "8:30 AM",
        "ground": "G-1",
        "stage": "PQ3",
        "home_team": "RUNNER OF POOL A - A2",
        "away_team": "WINNER OF POOL C - C1"
      },
      {
        "id": 26,
        "date": "18.12.2023",
        "time": "8:30 AM",
        "ground": "G-3",
        "stage": "PQ4",
        "home_team": "RUNNER OF POOL B - B2",
        "away_team": "WINNER OF POOL D - D1"
      },
      {
        "id": 27,
        "date": "18.12.2023",
        "time": "12:30 PM",
        "ground": "G-2",
        "stage": "PQ5",
        "home_team": "WINNER OF POOL E - E1",
        "away_team": "RUNNER OF POOL G - G2"
      },
      {
        "id": 28,
        "date": "18.12.2023",
        "time": "12:30 PM",
        "ground": "G-4",
        "stage": "PQ6",
        "home_team": "WINNER OF POOL F - F1",
        "away_team": "RUNNER OF POOL H - H2"
      },
      {
        "id": 29,
        "date": "18.12.2023",
        "time": "12:30 PM",
        "ground": "G-1",
        "stage": "PQ7",
        "home_team": "RUNNER OF POOL E - E2",
        "away_team": "WINNER OF POOL G - G1"
      },
      {
        "id": 30,
        "date": "18.12.2023",
        "time": "12:30 PM",
        "ground": "G-3",
        "stage": "PQ8",
        "home_team": "RUNNER OF POOL F - F2",
        "away_team": "WINNER OF POOL H - H1"
      },
      {
        "id": 31,
        "date": "19.12.2023",
        "time": "8:30 AM",
        "ground": "G-2",
        "stage": "QF1",
        "home_team": "WINNER OF PQ1",
        "away_team": "WINNER OF PQ6"
      },
      {
        "id": 32,
        "date": "19.12.2023",
        "time": "8:30 AM",
        "ground": "G-1",
        "stage": "QF2",
        "home_team": "WINNER OF PQ2",
        "away_team": "WINNER OF PQ5"
      },
      {
        "id": 33,
        "date": "19.12.2023",
        "time": "12:30 PM",
        "ground": "G-1",
        "stage": "QF3",
        "home_team": "WINNER OF PQ3",
        "away_team": "WINNER OF PQ8"
      },
      {
        "id": 34,
        "date": "19.12.2023",
        "time": "12:30 PM",
        "ground": "G-2",
        "stage": "QF4",
        "home_team": "WINNER OF PQ4",
        "away_team": "WINNER OF PQ7"
      },
      {
        "id": 35,
        "date": "21.12.2023",
        "time": "8:30 AM",
        "ground": "G-1",
        "stage": "SF1",
        "home_team": "WINNER OF QF1",
        "away_team": "WINNER OF QF4"
      },
      {
        "id": 36,
        "date": "21.12.2023",
        "time": "12:30 PM",
        "ground": "G-1",
        "stage": "SF2",
        "home_team": "WINNER OF QF2",
        "away_team": "WINNER OF QF3"
      },
      {
        "id": 37,
        "date": "22.12.2023",
        "time": "8:30 AM",
        "ground": "G-2",
        "stage": "3rd Place",
        "home_team": "Loser of SF1",
        "away_team": "Loser of SF2"
      },
      {
        "id": 38,
        "date": "22.12.2023",
        "time": "8:30 AM",
        "ground": "G-1",
        "stage": "Final",
        "home_team": "Winner of SF1",
        "away_team": "Winner of SF2"
      }
  ],
  "Squash Men":
  [
    {
      "id": 1,
      "date": "15.12.2023",
      "time": "10:00 AM",
      "pool": "D",
      "ground": "C-1",
      "home_team": "IIT Madras",
      "away_team": "IIT Indore",
      "logo_home_team": require('./Assests/IITs/IITM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITI.jpg')
    },
    {
      "id": 2,
      "date": "15.12.2023",
      "time": "10:00 AM",
      "pool": "C",
      "ground": "C-2",
      "home_team": "IIT Bombay",
      "away_team": "IIT Hyderabad",
      "logo_home_team": require('./Assests/IITs/IITB.jpg'),
      "logo_away_team": require('./Assests/IITs/IITH.jpg')
    },
    {
      "id": 3,
      "date": "15.12.2023",
      "time": "11:00 PM",
      "pool": "B",
      "ground": "C-1",
      "home_team": "IIT Delhi",
      "away_team": "IIT BHU",
      "logo_home_team": require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBHU.jpg')
    },
    {
      "id": 4,
      "date": "15.12.2023",
      "time": "4:00 PM",
      "pool": "A",
      "ground": "C-1",
      "home_team": "IIT Kharagpur",
      "away_team": "IIT Guwahati",
      "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITG.jpg')
    },
    {
      "id": 5,
      "date": "15.12.2023",
      "time": "4:00 PM",
      "pool": "D",
      "ground": "C-2",
      "home_team": "IIT Dhanbad",
      "away_team": "IIT Patna",
      "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITP.jpg')
    },
    {
      "id": 6,
      "date": "15.12.2023",
      "time": "5:00 PM",
      "pool": "B",
      "ground": "C-1",
      "home_team": "IIT Kanpur",
      "away_team": "IIT Mandi",
      "logo_home_team": require('./Assests/IITs/IITK.jpg'),
      "logo_away_team": require('./Assests/IITs/IITMD.jpg')
    },
    {
      "id": 7,
      "date": "15.12.2023",
      "time": "5:00 PM",
      "pool": "C",
      "ground": "C-2",
      "home_team": "IIT Jodhpur",
      "away_team": "IIT Roorkee",
      "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
      "logo_away_team": require('./Assests/IITs/IITR.jpg')
    },
    {
      "id": 8,
      "date": "16.12.2023",
      "time": "10:00 AM",
      "ground": "C-1",
      "home_team": "IIT Madras",
      "away_team": "IIT Patna",
      "logo_home_team": require('./Assests/IITs/IITM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITP.jpg')
    },
    {
      "id": 9,
      "date": "16.12.2023",
      "time": "10:00 AM",
      "ground": "C-2",
      "home_team": "IIT Delhi",
      "away_team": "IIT Mandi",
      "logo_home_team": require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITMD.jpg')
    },
    {
      "id": 10,
      "date": "16.12.2023",
      "time": "11:00 AM",
      "ground": "C-1",
      "home_team": "IIT Bombay",
      "away_team": "IIT Roorkee",
      "logo_home_team": require('./Assests/IITs/IITB.jpg'),
      "logo_away_team": require('./Assests/IITs/IITR.jpg')
    },
    {
      "id": 11,
      "date": "16.12.2023",
      "time": "11:00 AM",
      "ground": "C-2",
      "home_team": "IIT Dhanbad",
      "away_team": "IIT Indore",
      "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITI.jpg')
    },
    {
      "id": 12,
      "date": "16.12.2023",
      "time": "4:00 PM",
      "ground": "C-1",
      "home_team": "IIT Jodhpur",
      "away_team": "IIT Hyderabad",
      "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
      "logo_away_team": require('./Assests/IITs/IITH.jpg')
    },
    {
      "id": 13,
      "date": "16.12.2023",
      "time": "4:00 PM",
      "ground": "C-2",
      "home_team": "IIT Kanpur",
      "away_team": "IIT BHU",
      "logo_home_team": require('./Assests/IITs/IITK.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBHU.jpg')
    },
    {
      "id": 14,
      "date": "16.12.2023",
      "time": "5:00 PM",
      "ground": "C-1",
      "home_team": "IIT Gandhinagar",
      "away_team": "IIT Guwahati",
      "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
      "logo_away_team": require('./Assests/IITs/IITG.jpg')
    },
    {
      "id": 15,
      "date": "17.12.2023",
      "time": "10:00 AM",
      "ground": "C-1",
      "home_team": "IIT Madras",
      "away_team": "IIT Dhanbad",
      "logo_home_team": require('./Assests/IITs/IITM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITISM.jpg')
    },
    {
      "id": 16,
      "date": "17.12.2023",
      "time": "10:00 AM",
      "ground": "C-2",
      "home_team": "IIT Bombay",
      "away_team": "IIT Jodhpur",
      "logo_home_team": require('./Assests/IITs/IITB.jpg'),
      "logo_away_team": require('./Assests/IITs/IITJ.jpg')
    },
    {
      "id": 17,
      "date": "17.12.2023",
      "time": "11:00 PM",
      "ground": "C-1",
      "home_team": "IIT Delhi",
      "away_team": "IIT Kanpur",
      "logo_home_team": require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITK.jpg')
    },
    {
      "id": 18,
      "date": "17.12.2023",
      "time": "4:00 PM",
      "ground": "C-2",
      "home_team": "IIT Kharagpur",
      "away_team": "IIT Gandhinagar",
      "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITGN.jpg')
    },
    {
      "id": 19,
      "date": "17.12.2023",
      "time": "4:00 PM",
      "ground": "C-1",
      "home_team": "IIT Indore",
      "away_team": "IIT Patna",
      "logo_home_team": require('./Assests/IITs/IITI.jpg'),
      "logo_away_team": require('./Assests/IITs/IITP.jpg')
    },
    {
      "id": 20,
      "date": "17.12.2023",
      "time": "5:00 PM",
      "ground": "C-2",
      "home_team": "IIT Varanasi",
      "away_team": "IIT Mandi",
      "logo_home_team": require('./Assests/IITs/IITBHU.jpg'),
      "logo_away_team": require('./Assests/IITs/IITMD.jpg')
    },
    {
      "id": 21,
      "date": "17.12.2023",
      "time": "5:00 PM",
      "ground": "C-1",
      "home_team": "IIT Hyderabad",
      "away_team": "IIT Roorkee",
      "logo_home_team": require('./Assests/IITs/IITH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITR.jpg')
    },
    {
      "id": 22,
      "date": "19.12.2023",
      "time": "10:00 AM",
      "stage":"QF-1",
      "ground": "C-1",
      "home_team": "WINNER OF POOL A",
      "away_team": "RUNNER OF POOL C"
    },
    {
      "id": 23,
      "date": "19.12.2023",
      "time": "10:00 AM",
      "stage":"QF-2",
      "ground": "C-2",
      "home_team": "WINNER OF POOL B",
      "away_team": "RUNNER OF POOL D"
    },
    {
      "id": 24,
      "date": "19.12.2023",
      "time": "12:00 PM",
      "stage":"QF-3",
      "ground": "C-1",
      "home_team": "RUNNER OF POOL A",
      "away_team": "WINNER OF POOL C"
    },
    {
      "id": 25,
      "date": "19.12.2023",
      "time": "12:00 PM",
      "stage":"QF-4",
      "ground": "C-2",
      "home_team": "RUNNER OF POOL B",
      "away_team": "WINNER OF POOL D"
    },
    {
      "id": 26,
      "date": "20.12.2023",
      "time": "10:00 AM",
      "stage":"SF-1",
      "ground": "C-1",
      "home_team": "QF 1",
      "away_team": "QF 4"
    },
    {
      "id": 27,
      "date": "20.12.2023",
      "time": "12:00 PM",
      "stage":"SF-2",
      "ground": "C-2",
      "home_team": "QF 2",
      "away_team": "QF 3"
    },
    {
      "id": 28,
      "date": "21.12.2023",
      "time": "10:00 AM",
      "stage":"3rd place",
      "ground": "C-1",
      "home_team": "LOSER OF SF1",
      "away_team": "LOSER OF SF2"
    },
    {
      "id": 29,
      "date": "21.12.2023",
      "time": "12:00 PM",
      "stage":"Final",
      "ground": "C-2",
      "home_team": "WINNER OF SF1",
      "away_team": "WINNER OF SF2"
    }
  ],
  "Squash Women":
    [
      {
        "id": 1,
        "date": "15.12.2023",
        "time": "9:00 AM",
        "pool": "D",
        "ground": "C-1",
        "home_team": "IIT Madras",
        "away_team": "IIT Varanasi",
        "logo_home_team":  require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBHU.jpg')
      },
      {
        "id": 2,
        "date": "15.12.2023",
        "time": "9:00 AM",
        "pool": "C",
        "ground": "C-2",
        "home_team": "IIT Roorkee",
        "away_team": "IIT Mandi",
        "logo_home_team": require('./Assests/IITs/IITR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITMD.jpg')
      },
      {
        "id": 3,
        "date": "15.12.2023",
        "time": "3:00 PM",
        "pool": "B",
        "ground": "C-1",
        "home_team": "IIT Bombay",
        "away_team": "IIT Kanpur",
        "logo_home_team": require('./Assests/IITs/IITB.jpg'),
        "logo_away_team": require('./Assests/IITs/IITK.jpg')
      },
      {
        "id": 4,
        "date": "15.12.2023",
        "time": "3:00 PM",
        "pool": "A",
        "ground": "C-2",
        "home_team": "IIT Delhi",
        "away_team": "IIT Kharagpur",
        "logo_home_team": require('./Assests/IITs/IITD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg')
      },
      {
        "id": 5,
        "date": "15.12.2023",
        "time": "6:00 PM",
        "pool": "D",
        "ground": "C-1",
        "home_team": "IIT Gandhinagar",
        "away_team": "IIT Dhanbad",
        "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
        "logo_away_team": require('./Assests/IITs/IITISM.jpg')
      },
      {
        "id": 6,
        "date": "16.12.2023",
        "time": "9:00 AM",
        "pool": "D",
        "ground": "C-1",
        "home_team": "IIT Gandhinagar",
        "away_team": "IIT Varanasi",
        "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBHU.jpg')
      },
      {
        "id": 7,
        "date": "16.12.2023",
        "time": "9:00 AM",
        "pool": "C",
        "ground": "C-2",
        "home_team": "IIT Jodhpur",
        "away_team": "IIT Mandi",
        "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
        "logo_away_team": require('./Assests/IITs/IITMD.jpg')
      },
      {
        "id": 8,
        "date": "16.12.2023",
        "time": "3:00 PM",
        "pool": "B",
        "ground": "C-1",
        "home_team": "IIT Guwahati",
        "away_team": "IIT Kanpur",
        "logo_home_team": require('./Assests/IITs/IITG.jpg'),
        "logo_away_team": require('./Assests/IITs/IITK.jpg')
      },
      {
        "id": 9,
        "date": "16.12.2023",
        "time": "3:00 PM",
        "pool": "A",
        "ground": "C-2",
        "home_team": "IIT Indore",
        "away_team": "IIT Kharagpur",
        "logo_home_team": require('./Assests/IITs/IITI.jpg'),
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg')
      },
      {
        "id": 10,
        "date": "16.12.2023",
        "time": "6:00 PM",
        "pool": "D",
        "ground": "C-1",
        "home_team": "IIT Madras",
        "away_team": "IIT Dhanbad",
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITISM.jpg')
      },
      {
        "id": 11,
        "date": "17.12.2023",
        "time": "9:00 AM",
        "pool": "D",
        "ground": "C-1",
        "home_team": "IIT Varanasi",
        "away_team": "IIT Dhanbad",
        "logo_home_team": require('./Assests/IITs/IITBHU.jpg'),
        "logo_away_team": require('./Assests/IITs/IITISM.jpg')
      },
      {
        "id": 12,
        "date": "17.12.2023",
        "time": "9:00 AM",
        "pool": "C",
        "ground": "C-2",
        "home_team": "IIT Roorkee",
        "away_team": "IIT Jodhpur",
        "logo_home_team": require('./Assests/IITs/IITR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITJ.jpg')
      },
      {
        "id": 13,
        "date": "17.12.2023",
        "time": "3:00 PM",
        "pool": "B",
        "ground": "C-1",
        "home_team": "IIT Bombay",
        "away_team": "IIT Guwahati",
        "logo_home_team": require('./Assests/IITs/IITB.jpg'),
        "logo_away_team": require('./Assests/IITs/IITG.jpg')
      },
      {
        "id": 14,
        "date": "17.12.2023",
        "time": "3:00 PM",
        "pool": "A",
        "ground": "C-2",
        "home_team": "IIT Delhi",
        "away_team": "IIT Indore",
        "logo_home_team": require('./Assests/IITs/IITD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITI.jpg')
      },
      {
        "id": 15,
        "date": "17.12.2023",
        "time": "6:00 PM",
        "pool": "D",
        "ground": "C-1",
        "home_team": "IIT Madras",
        "away_team": "IIT Gandhinagar",
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITGN.jpg')
      },
      {
        "id": 16,
        "date": "19.12.2023",
        "time": "9:00 AM",
        "ground": "C-1",
        "stage": "QF1",
        "home_team": "WINNER OF POOL A",
        "away_team": "RUNNER OF POOL C"
      },
      {
        "id": 17,
        "date": "19.12.2023",
        "time": "9:00 AM",
        "ground": "C-2",
        "stage": "QF2",
        "home_team": "WINNER OF POOL B",
        "away_team": "RUNNER OF POOL D"
      },
      {
        "id": 18,
        "date": "19.12.2023",
        "time": "3:00 PM",
        "ground": "C-1",
        "stage": "QF3",
        "home_team": "RUNNER OF POOL A",
        "away_team": "WINNER OF POOL C"
      },
      {
        "id": 19,
        "date": "19.12.2023",
        "time": "3:00 PM",
        "ground": "C-2",
        "stage": "QF4",
        "home_team": "RUNNER OF POOL B",
        "away_team": "WINNER OF POOL D"
      },
      {
        "id": 20,
        "date": "20.12.2023",
        "time": "3:00 PM",
        "ground": "C-1",
        "stage": "SF1",
        "home_team": "QF 1",
        "away_team": "QF 4"
      },
      {
        "id": 21,
        "date": "20.12.2023",
        "time": "3:00 PM",
        "ground": "C-2",
        "stage": "SF2",
        "home_team": "QF 2",
        "away_team": "QF 3"
      },
      {
        "id": 22,
        "date": "21.12.2023",
        "time": "3:00 PM",
        "ground": "C-1",
        "stage": "3rd PLACE",
        "home_team": "LOSER OF SF1",
        "away_team": "LOSER OF SF2"
      },
      {
        "id": 23,
        "date": "21.12.2023",
        "time": "3:00 PM",
        "ground": "C-2",
        "stage": "FINAL",
        "home_team": "WINNER OF SF1",
        "away_team": "WINNER OF SF2"
      }
  ],
  "Tennis Men":
  [
    {
      "id": 1,
      "date": "15.12.2023",
      "time": "4:00 PM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Roorkee",
      "away_team": "IIT Tirupati",
      "logo_home_team":  require('./Assests/IITs/IITR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITT.jpg')
    },
    {
      "id": 2,
      "date": "15.12.2023",
      "time": "4:00 PM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Delhi",
      "away_team": "IIT Dhanbad",
      "logo_home_team":  require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITISM.jpg')
    },
    {
      "id": 3,
      "date": "15.12.2023",
      "time": "5:00 PM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Madras",
      "away_team": "IIT Ropar",
      "logo_home_team":  require('./Assests/IITs/IITM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITRPR.jpg')
    },
    {
      "id": 4,
      "date": "15.12.2023",
      "time": "5:00 PM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Kharagpur",
      "away_team": "IIT Jodhpur",
      "logo_home_team":  require('./Assests/IITs/IITKGP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITJ.jpg')
    },
    {
      "id": 5,
      "date": "15.12.2023",
      "time": "6:00 PM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT BHU",
      "away_team": "IIT Goa",
      "logo_home_team":  require('./Assests/IITs/IITBHU.jpg'),
      "logo_away_team": require('./Assests/IITs/IITGOA.jpg')
    },
    {
      "id": 6,
      "date": "15.12.2023",
      "time": "6:00 PM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Kanpur",
      "away_team": "IIT Mandi",
      "logo_home_team":  require('./Assests/IITs/IITK.jpg'),
      "logo_away_team": require('./Assests/IITs/IITMD.jpg')
    },
    {
      "id": 7,
      "date": "15.12.2023",
      "time": "7:00 PM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Guwahati",
      "away_team": "IIT Bombay",
      "logo_home_team":  require('./Assests/IITs/IITG.jpg'),
      "logo_away_team": require('./Assests/IITs/IITB.jpg')
    },
    {
      "id": 8,
      "date": "15.12.2023",
      "time": "7:00 PM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Gandhinagar",
      "away_team": "IIT Indore",
      "logo_home_team":  require('./Assests/IITs/IITGN.jpg'),
      "logo_away_team": require('./Assests/IITs/IITI.jpg')
    },
    {
      "id": 9,
      "date": "16.12.2023",
      "time": "4:00 PM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Roorkee",
      "away_team": "IIT Goa",
      "logo_home_team":  require('./Assests/IITs/IITR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITGOA.jpg')
    },
    {
      "id": 10,
      "date": "16.12.2023",
      "time": "4:00 PM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Delhi",
      "away_team": "IIT Mandi",
      "logo_home_team":  require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITMD.jpg')
    },
    {
      "id": 11,
      "date": "16.12.2023",
      "time": "5:00 PM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Madras",
      "away_team": "IIT Bombay",
      "logo_home_team":  require('./Assests/IITs/IITM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITB.jpg')
    },
    {
      "id": 12,
      "date": "16.12.2023",
      "time": "5:00 PM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Kharagpur",
      "away_team": "IIT Indore",
      "logo_home_team":  require('./Assests/IITs/IITKGP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITI.jpg')
    },
    {
      "id": 13,
      "date": "16.12.2023",
      "time": "6:00 PM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT BHU",
      "away_team": "IIT Patna",
      "logo_home_team":  require('./Assests/IITs/IITBHU.jpg'),
      "logo_away_team": require('./Assests/IITs/IITP.jpg')
    },
    {
      "id": 14,
      "date": "16.12.2023",
      "time": "6:00 PM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Kanpur",
      "away_team": "IIT Bhubaneswar",
      "logo_home_team":  require('./Assests/IITs/IITK.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBBS.jpg')
    },
    {
      "id": 15,
      "date": "16.12.2023",
      "time": "7:00 PM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Guwahati",
      "away_team": "IIT Dharwad",
      "logo_home_team":  require('./Assests/IITs/IITG.jpg'),
      "logo_away_team": require('./Assests/IITs/IITDH.jpg')
    },
    {
      "id": 16,
      "date": "16.12.2023",
      "time": "7:00 PM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Gandhinagar",
      "away_team": "IIT Hyderabad",
      "logo_home_team":  require('./Assests/IITs/IITGN.jpg'),
      "logo_away_team": require('./Assests/IITs/IITH.jpg')
    },
    {
      "id": 17,
      "date": "17.12.2023",
      "time": "4:00 PM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT BHU",
      "away_team": "IIT Tirupati",
      "logo_home_team":  require('./Assests/IITs/IITBHU.jpg'),
      "logo_away_team": require('./Assests/IITs/IITT.jpg')
    },
    {
      "id": 18,
      "date": "17.12.2023",
      "time": "4:00 PM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Kanpur",
      "away_team": "IIT Dhanbad",
      "logo_home_team":  require('./Assests/IITs/IITK.jpg'),
      "logo_away_team": require('./Assests/IITs/IITISM.jpg')
    },
    {
      "id": 19,
      "date": "17.12.2023",
      "time": "5:00 PM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Guwahati",
      "away_team": "IIT Ropar",
      "logo_home_team":  require('./Assests/IITs/IITG.jpg'),
      "logo_away_team": require('./Assests/IITs/IITRPR.jpg')
    },
    {
      "id": 20,
      "date": "17.12.2023",
      "time": "5:00 PM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Gandhinagar",
      "away_team": "IIT Jodhpur",
      "logo_home_team":  require('./Assests/IITs/IITGN.jpg'),
      "logo_away_team": require('./Assests/IITs/IITJ.jpg')
    },
    {
      "id": 21,
      "date": "17.12.2023",
      "time": "6:00 PM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Goa",
      "away_team": "IIT Patna",
      "logo_home_team":  require('./Assests/IITs/IITGOA.jpg'),
      "logo_away_team": require('./Assests/IITs/IITP.jpg')
    },
    {
      "id": 22,
      "date": "17.12.2023",
      "time": "6:00 PM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Mandi",
      "away_team": "IIT Bhubaneswar",
      "logo_home_team":  require('./Assests/IITs/IITMD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBBS.jpg')
    },
    {
      "id": 23,
      "date": "17.12.2023",
      "time": "7:00 PM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Bombay",
      "away_team": "IIT Dharwad",
      "logo_home_team":  require('./Assests/IITs/IITB.jpg'),
      "logo_away_team": require('./Assests/IITs/IITDH.jpg')
    },
    {
      "id": 24,
      "date": "17.12.2023",
      "time": "7:00 PM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Indore",
      "away_team": "IIT Hyderabad",
      "logo_home_team":  require('./Assests/IITs/IITI.jpg'),
      "logo_away_team": require('./Assests/IITs/IITH.jpg')
    },
    {
      "id": 25,
      "date": "18.12.2023",
      "time": "4:00 PM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Roorkee",
      "away_team": "IIT Patna",
      "logo_home_team":  require('./Assests/IITs/IITR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITP.jpg')
    },
    {
      "id": 26,
      "date": "18.12.2023",
      "time": "4:00 PM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Delhi",
      "away_team": "IIT Bhubaneswar",
      "logo_home_team":  require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBBS.jpg')
    },
    {
      "id": 27,
      "date": "18.12.2023",
      "time": "5:00 PM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Madras",
      "away_team": "IIT Dharwad",
      "logo_home_team":  require('./Assests/IITs/IITM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITDH.jpg')
    },
    {
      "id": 28,
      "date": "18.12.2023",
      "time": "5:00 PM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Kharagpur",
      "away_team": "IIT Hyderabad",
      "logo_home_team":  require('./Assests/IITs/IITKGP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITH.jpg')
    },
    {
      "id": 29,
      "date": "18.12.2023",
      "time": "6:00 PM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Tirupati",
      "away_team": "IIT Goa",
      "logo_home_team":  require('./Assests/IITs/IITT.jpg'),
      "logo_away_team": require('./Assests/IITs/IITGOA.jpg')
    },
    {
      "id": 30,
      "date": "18.12.2023",
      "time": "6:00 PM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Dhanbad",
      "away_team": "IIT Mandi",
      "logo_home_team":  require('./Assests/IITs/IITISM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITMD.jpg')
    },
    {
      "id": 31,
      "date": "18.12.2023",
      "time": "7:00 PM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Ropar",
      "away_team": "IIT Bombay",
      "logo_home_team":  require('./Assests/IITs/IITRPR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITB.jpg')
    },
    {
      "id": 32,
      "date": "18.12.2023",
      "time": "7:00 PM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Jodhpur",
      "away_team": "IIT Indore",
      "logo_home_team":  require('./Assests/IITs/IITJ.jpg'),
      "logo_away_team": require('./Assests/IITs/IITI.jpg')
    },
    {
      "id": 33,
      "date": "19.12.2023",
      "time": "4:00 PM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Roorkee",
      "away_team": "IIT BHU",
      "logo_home_team":  require('./Assests/IITs/IITR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBHU.jpg')
    },
    {
      "id": 34,
      "date": "19.12.2023",
      "time": "4:00 PM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Delhi",
      "away_team": "IIT Kanpur",
      "logo_home_team":  require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITK.jpg')
    },
    {
      "id": 35,
      "date": "19.12.2023",
      "time": "5:00 PM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Madras",
      "away_team": "IIT Guwahati",
      "logo_home_team":  require('./Assests/IITs/IITM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITG.jpg')
    },
    {
      "id": 36,
      "date": "19.12.2023",
      "time": "5:00 PM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Kharagpur",
      "away_team": "IIT Gandhinagar",
      "logo_home_team":  require('./Assests/IITs/IITKGP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITGN.jpg')
    },
    {
      "id": 37,
      "date": "19.12.2023",
      "time": "6:00 PM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Tirupati",
      "away_team": "IIT Patna",
      "logo_home_team":  require('./Assests/IITs/IITT.jpg'),
      "logo_away_team": require('./Assests/IITs/IITP.jpg')
    },
    {
      "id": 38,
      "date": "19.12.2023",
      "time": "6:00 PM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Dhanbad",
      "away_team": "IIT Bhubaneswar",
      "logo_home_team":  require('./Assests/IITs/IITISM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBBS.jpg')
    },
    {
      "id": 39,
      "date": "19.12.2023",
      "time": "7:00 PM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Ropar",
      "away_team": "IIT Dharwad",
      "logo_home_team":  require('./Assests/IITs/IITRPR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITDH.jpg')
    },
    {
      "id": 40,
      "date": "19.12.2023",
      "time": "7:00 PM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Jodhpur",
      "away_team": "IIT Hyderabad",
      "logo_home_team":  require('./Assests/IITs/IITJ.jpg'),
      "logo_away_team": require('./Assests/IITs/IITH.jpg')
    },
    {
      "id": 41,
      "date": "20.12.2023",
      "time": "8:30 AM",
      "ground": "1",
      "stage": "SF1",
      "home_team": "WINNER OF POOL A",
      "away_team": "RUNNER OF POOL C"
    },
    {
      "id": 42,
      "date": "20.12.2023",
      "time": "8:30 AM",
      "ground": "3",
      "stage": "SF2",
      "home_team": "WINNER OF POOL B",
      "away_team": "RUNNER OF POOL D"
    },
    {
      "id": 43,
      "date": "20.12.2023",
      "time": "9:30 AM",
      "ground": "2",
      "stage": "SF3",
      "home_team": "RUNNER OF POOL A",
      "away_team": "WINNER OF POOL C"
    },
    {
      "id": 44,
      "date": "20.12.2023",
      "time": "9:30 AM",
      "ground": "4",
      "stage": "SF4",
      "home_team": "RUNNER OF POOL B",
      "away_team": "WINNER OF POOL D"
    },
    {
      "id": 45,
      "date": "21.12.2023",
      "time": "6:30 PM",
      "ground": "1",
      "stage": "F1",
      "home_team": "SF 1",
      "away_team": "SF 4"
    },
    {
      "id": 46,
      "date": "21.12.2023",
      "time": "6:30 PM",
      "ground": "3",
      "stage": "F2",
      "home_team": "SF 2",
      "away_team": "SF 3"
    },
    {
      "id": 47,
      "date": "22.12.2023",
      "time": "9:00 AM",
      "ground": "3",
      "stage": "3rd PLACE",
      "home_team": "LOSER OF F1",
      "away_team": "LOSER OF F2"
    },
    {
      "id": 48,
      "date": "22.12.2023",
      "time": "10:30 AM",
      "ground": "1",
      "stage": "FINAL",
      "home_team": "WINNER OF F1",
      "away_team": "WINNER OF F2"
    }
  ],
  "Tennis Women":
  [
    {
      "id": 1,
      "date": "15.12.2023",
      "time": "8:30 AM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Roorkee",
      "away_team": "IIT Kanpur",
      "logo_home_team":  require('./Assests/IITs/IITR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITK.jpg')
    },
    {
      "id": 2,
      "date": "15.12.2023",
      "time": "8:30 AM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Dhanbad",
      "away_team": "IIT Indore",
      "logo_home_team": require('./Assests/IITs/IITDH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITI.jpg')
    },
    {
      "id": 3,
      "date": "15.12.2023",
      "time": "9:30 AM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Delhi",
      "away_team": "IIT Patna",
      "logo_home_team": require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITP.jpg')
    },
    {
      "id": 4,
      "date": "15.12.2023",
      "time": "9:30 AM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Ropar",
      "away_team": "IIT Guwahati",
      "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITG.jpg')
    },
    {
      "id": 5,
      "date": "15.12.2023",
      "time": "10:00 AM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Hyderabad",
      "away_team": "IIT Jodhpur",
      "logo_home_team": require('./Assests/IITs/IITH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITJ.jpg')
    },
    {
      "id": 6,
      "date": "15.12.2023",
      "time": "10:00 AM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Madras",
      "away_team": "IIT Mandi",
      "logo_home_team": require('./Assests/IITs/IITM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITMD.jpg')
    },
    {
      "id": 7,
      "date": "15.12.2023",
      "time": "11:00 AM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Bhubaneswar",
      "away_team": "IIT Bombay",
      "logo_home_team": require('./Assests/IITs/IITBBS.jpg'),
      "logo_away_team": require('./Assests/IITs/IITB.jpg')
    },
    {
      "id": 8,
      "date": "15.12.2023",
      "time": "11:00 AM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Gandhinagar",
      "away_team": "IIT Kharagpur",
      "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
      "logo_away_team": require('./Assests/IITs/IITKGP.jpg')
    },
    {
      "id": 9,
      "date": "16.12.2023",
      "time": "8:30 AM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Roorkee",
      "away_team": "IIT Jodhpur",
      "logo_home_team": require('./Assests/IITs/IITR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITJ.jpg')
    },
    {
      "id": 10,
      "date": "16.12.2023",
      "time": "8:30 AM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Dhanbad",
      "away_team": "IIT Mandi",
      "logo_home_team": require('./Assests/IITs/IITDH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITMD.jpg')
    },
    {
      "id": 11,
      "date": "16.12.2023",
      "time": "9:30 AM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Delhi",
      "away_team": "IIT Bombay",
      "logo_home_team": require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITB.jpg')
    },
    {
      "id": 12,
      "date": "16.12.2023",
      "time": "9:30 AM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Ropar",
      "away_team": "IIT Kharagpur",
      "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITKGP.jpg')
    },
    {
      "id": 13,
      "date": "16.12.2023",
      "time": "10:00 AM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Hyderabad",
      "away_team": "IIT Kanpur",
      "logo_home_team": require('./Assests/IITs/IITH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITK.jpg')
    },
    {
      "id": 14,
      "date": "16.12.2023",
      "time": "10:00 AM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Madras",
      "away_team": "IIT Indore",
      "logo_home_team": require('./Assests/IITs/IITM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITI.jpg')
    },
    {
      "id": 15,
      "date": "16.12.2023",
      "time": "11:00 AM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Bhubaneswar",
      "away_team": "IIT Patna",
      "logo_home_team": require('./Assests/IITs/IITBBS.jpg'),
      "logo_away_team": require('./Assests/IITs/IITP.jpg')
    },
    {
      "id": 16,
      "date": "16.12.2023",
      "time": "11:00 AM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Gandhinagar",
      "away_team": "IIT Guwahati",
      "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
      "logo_away_team": require('./Assests/IITs/IITG.jpg')
    },
    {
      "id": 17,
      "date": "17.12.2023",
      "time": "8:30 AM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Roorkee",
      "away_team": "IIT Hyderabad",
      "logo_home_team": require('./Assests/IITs/IITR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITH.jpg')
    },
    {
      "id": 18,
      "date": "17.12.2023",
      "time": "8:30 AM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Dhanbad",
      "away_team": "IIT Madras",
      "logo_home_team": require('./Assests/IITs/IITDH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITM.jpg')
    },
    {
      "id": 19,
      "date": "17.12.2023",
      "time": "9:30 AM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Delhi",
      "away_team": "IIT Bhubaneswar",
      "logo_home_team": require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBBS.jpg')
    },
    {
      "id": 20,
      "date": "17.12.2023",
      "time": "9:30 AM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Ropar",
      "away_team": "IIT Gandhinagar",
      "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITGN.jpg')
    },
    {
      "id": 21,
      "date": "17.12.2023",
      "time": "10:00 AM",
      "pool": "D",
      "ground": "1",
      "home_team": "IIT Kanpur",
      "away_team": "IIT Jodhpur",
      "logo_home_team": require('./Assests/IITs/IITK.jpg'),
      "logo_away_team": require('./Assests/IITs/IITJ.jpg')
    },
    {
      "id": 22,
      "date": "17.12.2023",
      "time": "10:00 AM",
      "pool": "C",
      "ground": "3",
      "home_team": "IIT Indore",
      "away_team": "IIT Mandi",
      "logo_home_team": require('./Assests/IITs/IITI.jpg'),
      "logo_away_team": require('./Assests/IITs/IITMD.jpg')
    },
    {
      "id": 23,
      "date": "17.12.2023",
      "time": "11:00 AM",
      "pool": "B",
      "ground": "2",
      "home_team": "IIT Patna",
      "away_team": "IIT Bombay",
      "logo_home_team": require('./Assests/IITs/IITP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITB.jpg')
    },
    {
      "id": 24,
      "date": "17.12.2023",
      "time": "11:00 AM",
      "pool": "A",
      "ground": "4",
      "home_team": "IIT Guwahati",
      "away_team": "IIT Kharagpur",
      "logo_home_team": require('./Assests/IITs/IITG.jpg'),
      "logo_away_team": require('./Assests/IITs/IITKGP.jpg')
    },
    {
      "id": 25,
      "date": "19.12.2023",
      "time": "5:30 PM",
      "ground": "1",
      "stage": "SF1",
      "home_team": "WINNER OF POOL A",
      "away_team": "RUNNER OF POOL C"
    },
    {
      "id": 26,
      "date": "19.12.2023",
      "time": "5:30 PM",
      "ground": "3",
      "stage": "SF2",
      "home_team": "WINNER OF POOL B",
      "away_team": "RUNNER OF POOL D"
    },
    {
      "id": 27,
      "date": "19.12.2023",
      "time": "7:00 PM",
      "ground": "2",
      "stage": "SF3",
      "home_team": "RUNNER OF POOL A",
      "away_team": "WINNER OF POOL C"
    },
    {
      "id": 28,
      "date": "19.12.2023",
      "time": "7:00 PM",
      "ground": "4",
      "stage": "SF4",
      "home_team": "RUNNER OF POOL B",
      "away_team": "WINNER OF POOL D"
    },
    {
      "id": 29,
      "date": "20.12.2023",
      "time": "9:00 AM",
      "ground": "1",
      "stage": "F1",
      "home_team": "SF 1",
      "away_team": "SF 4"
    },
    {
      "id": 30,
      "date": "20.12.2023",
      "time": "9:00 AM",
      "ground": "3",
      "stage": "F2",
      "home_team": "SF 2",
      "away_team": "SF 3"
    },
    {
      "id": 31,
      "date": "21.12.2023",
      "time": "5:30 PM",
      "ground": "2",
      "stage": "3rd PLACE",
      "home_team": "LOSER OF F1",
      "away_team": "LOSER OF F2"
    },
    {
      "id": 32,
      "date": "21.12.2023",
      "time": "5:00 PM",
      "ground": "4",
      "stage": "FINAL",
      "home_team": "WINNER OF F1",
      "away_team": "WINNER OF F2"
    }
  ]          
};

const athleticsMatches = {
  "14th Dec": [

  ],
  "15th Dec": [
    {
      Session: "Morning",
      EventNo: "101",
      Event: "1500M",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "102",
      Event: "400M",
      Gender: "Men",
      Round: "Heats",
    },
    {
      Session: "Morning",
      EventNo: "103",
      Event: "400M",
      Gender: "Women",
      Round: "Heats",
    },
    {
      Session: "Morning",
      EventNo: "104",
      Event: "110M Hurdles",
      Gender: "Men",
      Round: "Heats",
    },
    {
      Session: "Morning",
      EventNo: "105",
      Event: "Hammer Throw",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "106",
      Event: "400M",
      Gender: "Men",
      Round: "Semi-Final",
    },
    {
      Session: "Evening",
      EventNo: "107",
      Event: "400M",
      Gender: "Women",
      Round: "Semi-Final",
    },
    {
      Session: "Evening",
      EventNo: "108",
      Event: "Discus Throw",
      Gender: "Women",
      Round: "Final",
    },
  ],
  "16th Dec": [
    {
      Session: "Morning",
      EventNo: "201",
      Event: "800M",
      Gender: "Women",
      Round: "Heats",
    },
    {
      Session: "Morning",
      EventNo: "202",
      Event: "800M",
      Gender: "Men",
      Round: "Heats",
    },
    {
      Session: "Morning",
      EventNo: "203",
      Event: "100M",
      Gender: "Women",
      Round: "Heats",
    },
    {
      Session: "Morning",
      EventNo: "204",
      Event: "100M",
      Gender: "Men",
      Round: "Heats",
    },
    {
      Session: "Morning",
      EventNo: "205",
      Event: "Pole Vault",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "206",
      Event: "Shot Put",
      Gender: "Women",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "207",
      Event: "Triple Jump",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "208",
      Event: "100M",
      Gender: "Women",
      Round: "Semi-Final",
    },
    {
      Session: "Evening",
      EventNo: "209",
      Event: "100M",
      Gender: "Men",
      Round: "Semi-Final",
    },
  ],
  "17th Dec": [
    {
      Session: "Morning",
      EventNo: "301",
      Event: "200M",
      Gender: "Men",
      Round: "Heats",
    },
    {
      Session: "Morning",
      EventNo: "302",
      Event: "200M",
      Gender: "Women",
      Round: "Heats",
    },
    {
      Session: "Morning",
      EventNo: "303",
      Event: "Javelin Throw",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "304",
      Event: "High Jump",
      Gender: "Women",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "305",
      Event: "Long Jump",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "306",
      Event: "110M Hurdles",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "307",
      Event: "400M",
      Gender: "Women",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "308",
      Event: "400M",
      Gender: "Men",
      Round: "Final",
    },
  ],
  "18th Dec": [
    {
      Session: "Morning",
      EventNo: "401",
      Event: "800M",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "402",
      Event: "800M",
      Gender: "Women",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "403",
      Event: "100M",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "404",
      Event: "100M",
      Gender: "Women",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "405",
      Event: "Discus Throw",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "406",
      Event: "4x100M",
      Gender: "Men",
      Round: "Heats",
    },
    {
      Session: "Evening",
      EventNo: "407",
      Event: "4x100M",
      Gender: "Women",
      Round: "Heats",
    },
  ],
  "19th Dec": [
    {
      Session: "Morning",
      EventNo: "501",
      Event: "400M Hurdles",
      Gender: "Men",
      Round: "Heats",
    },
    {
      Session: "Morning",
      EventNo: "502",
      Event: "High Jump",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "503",
      Event: "4x100M",
      Gender: "Women",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "504",
      Event: "4x100M",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "505",
      Event: "Shot Put",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "506",
      Event: "200M",
      Gender: "Women",
      Round: "Semi-Final",
    },
    {
      Session: "Evening",
      EventNo: "507",
      Event: "200M",
      Gender: "Men",
      Round: "Semi-Final",
    },
    {
      Session: "Evening",
      EventNo: "508",
      Event: "1500M",
      Gender: "Women",
      Round: "Final",
    },
  ],
  "20th Dec": [
    {
      Session: "Morning",
      EventNo: "601",
      Event: "5000M",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "602",
      Event: "200M",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "603",
      Event: "200M",
      Gender: "Women",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "604",
      Event: "4x400M",
      Gender: "Women",
      Round: "Heats",
    },
    {
      Session: "Evening",
      EventNo: "605",
      Event: "4x400M",
      Gender: "Men",
      Round: "Heats",
    },
  ],
  "21st Dec": [
    {
      Session: "Morning",
      EventNo: "701",
      Event: "400M Hurdles",
      Gender: "Men",
      Round: "Final",
    },
    {
      Session: "Morning",
      EventNo: "702",
      Event: "Javelin Throw",
      Gender: "Women",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "801",
      Event: "Long Jump",
      Gender: "Women",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "802",
      Event: "4x400M",
      Gender: "Women",
      Round: "Final",
    },
    {
      Session: "Evening",
      EventNo: "803",
      Event: "4x400M",
      Gender: "Men",
      Round: "Final",
    },
  ],
};

const iconsPath = {
  "100M": require("./Assests/icons/400m.png"),
  "400M": require("./Assests/icons/400m.png"),
  "200M": require("./Assests/icons/800m.png"),
  "800M": require("./Assests/icons/800m.png"),
  "1500M": require("./Assests/icons/1500m.png"),
  "5000M": require("./Assests/icons/5000m.png"),
  "4x100M": require("./Assests/icons/relay400m.png"),
  "4x400M": require("./Assests/icons/relay400m.png"),
  "110M Hurdles": require("./Assests/icons/hurdles.png"),
  "400M Hurdles": require("./Assests/icons/hurdles.png"),
  "Hammer Throw": require("./Assests/icons/hammerthrow.png"),
  "Javelin Throw": require("./Assests/icons/javelinthrow.png"),
  "Discus Throw": require("./Assests/icons/discusthrow.png"),
  "Shot Put": require("./Assests/icons/shotput.png"),
  "Triple Jump": require("./Assests/icons/triplejump.png"),
  "Pole Vault": require("./Assests/icons/polevault.png"),
  "High Jump": require("./Assests/icons/highjump.png"),
  "Long Jump": require("./Assests/icons/longjump.png"),
};



export default Schedule;
