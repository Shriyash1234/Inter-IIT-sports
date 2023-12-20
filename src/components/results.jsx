import React, { useState, useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import JsonToTable from './jsontotable'
import { ChevronDown } from 'lucide-react'
import tableData from './Assests/Data/MedalTally.json'
import ScheduleHelper from './schedulehelper';

import Day1Morning1500mMen from "./Assests/Data/Results/sportsMeet/Day1-Result/Morning/Day1Morning1500mMen.json"
import Day1MorningHammerMen from "./Assests/Data/Results/sportsMeet/Day1-Result/Morning/Day1MorningHammerMen.json"
import Day1EveningDiscusWomen from "./Assests/Data/Results/sportsMeet/Day1-Result/Evening/Day1EveningDiscusWomen.json"
import Day1MorningHurdlesMen from "./Assests/Data/Results/sportsMeet/Day1-Result/Morning/Day1MorningHurdlesMen.json"
import Day1Evening400mMen from "./Assests/Data/Results/sportsMeet/Day1-Result/Evening/Day1Evening400mMen.json"
import Day1Evening400mWomen from "./Assests/Data/Results/sportsMeet/Day1-Result/Evening/Day1Evening400mWomen.json"

import Day2MorningPoleMen from "./Assests/Data/Results/sportsMeet/Day2-Result/Morning/Day2MorningPoleMen.json"
import Day2MorningShotWomen from "./Assests/Data/Results/sportsMeet/Day2-Result/Morning/Day2MorningShotWomen.json"
import Day2Evening100mMen from "./Assests/Data/Results/sportsMeet/Day2-Result/Evening/Day2Evening100mMen.json"
import Day2Evening100mWomen from "./Assests/Data/Results/sportsMeet/Day2-Result/Evening/Day2Evening100mWomen.json"
import Day2EveningTripleJumpMenFinal from "./Assests/Data/Results/sportsMeet/Day2-Result/Evening/Day2EveningTripleJumpMenFinal.json"

import Day3MorningLongMen from "./Assests/Data/Results/sportsMeet/Day3-Result/Morning/Day3MorningLongMen.json"
import Day3MorningHighMen from "./Assests/Data/Results/sportsMeet/Day3-Result/Morning/Day3MorningHighMen.json"
import Day3Evening400MFinal from "./Assests/Data/Results/sportsMeet/Day3-Result/Evening/Day3Evening400MFinal.json"
import Day3Evening400WFinal from "./Assests/Data/Results/sportsMeet/Day3-Result/Evening/Day3Evening400WFinal.json"
import Day3EveningHurdlesMenfrom from "./Assests/Data/Results/sportsMeet/Day3-Result/Evening/Day3EveningHurdlesMen.json"

import Day4Morning800mMen from "./Assests/Data/Results/sportsMeet/Day4-Result/Morning/Day4Morning800Men.json"
import Day4Morning800mWomen from "./Assests/Data/Results/sportsMeet/Day4-Result/Morning/Day4Morning800Women.json"
import Day4Morning100mMen from "./Assests/Data/Results/sportsMeet/Day4-Result/Morning/Day4Morning100Men.json"
import Day4Morning100mWomen from "./Assests/Data/Results/sportsMeet/Day4-Result/Morning/Day4Morning100Women.json"
import Day4EveningDiscusMen from "./Assests/Data/Results/sportsMeet/Day4-Result/Evening/Day4EveningDiscusMen.json"

import Day5Evening200Men from "./Assests/Data/Results/sportsMeet/Day5-Result/Evening/Day5Evening200Men.json"
import Day5Evening200Women from "./Assests/Data/Results/sportsMeet/Day5-Result/Evening/Day5Evening200Women.json"
import Day5EveningShotMen from "./Assests/Data/Results/sportsMeet/Day5-Result/Evening/Day5EveningSHotMen.json"
import Day5MorningHighMen from "./Assests/Data/Results/sportsMeet/Day5-Result/Morning/Day5MorningHighMen.json"

const Results = () => {
  const [selectedSport, setselectedSport] = useState('Cricket Men');
  const [selectedDate, setSelectedDate] = useState('15th Dec')
  const [isVisible, setIsVisible] = useState(Array(100).fill(false));
  const dateButtonMappings = {
    "Cricket Men": 'btn-1',
    "Football Men": 'btn-2',
    "Squash Men": 'btn-3',
    "Squash Women": 'btn-4',
    "Tennis Men": 'btn-5',
    "Tennis Women": 'btn-6',
    "Chess":"btn-7",
    "Athletics": 'btn-8',
    "14th Dec": "btn-9",
    "15th Dec": 'btn-10',
    "16th Dec": 'btn-11',
    "17th Dec": 'btn-12',
    "18th Dec": 'btn-13',
    "19th Dec": 'btn-14',
    "20th Dec": 'btn-15',
    "21st Dec": 'btn-16',
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
    setColor('btn-9')
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
  const toggleVisibility = (index, sindex) => {
    const newVisibility = isVisible.map((value, i) => (i === index ? !value : false));
    setIsVisible(newVisibility);
    const eventDivs = document.getElementsByClassName("event-div");
    const targetDiv = eventDivs[index - sindex];

    for (let i = 0; i < eventDivs.length; i++) {
      eventDivs[i].style.transform = "translateY(0)";
    }
    if (newVisibility[index]) {
      for (let i = index + 1; i < eventDivs.length; i++) {
        eventDivs[i].style.transform = "translateY(200px)";
      }
    }
    else {
      for (let i = index + 1; i < eventDivs.length; i++) {
        eventDivs[i].style.transform = "translateY(0)";
      }
    }

  };
  const renderEventsForDate = (date) => {
    return (
      <div key={date} className='event-divs'>
        <p>Morning Session: 08:00 AM | <span>Evening Session: 04:00 PM </span> </p>
        {athleticsMatches[date].length !== 0 ? (
          athleticsMatches[date].map((match, index) => (
            <div key={index} className='event-div' onClick={() => toggleVisibility(index)}>
              {match.Session === "Morning" ? <div className='vertical-line-blue'></div> : <div className='vertical-line-orange'></div>}
              <p className='event-timing'>{match.Session}</p>
              <div className='vertical-line-grey'></div>
              <img src={iconsPath[match.Event]} className='event-icon' alt={match.Event}></img>
              <p className='event-timing'>{match.Gender}</p>
              <p className='event-timing'>{match.Event}</p>
              <p className='event-timing' style={{ color: '#7f848c', textAlign: 'left' }}>{match.Round}</p>
              <ChevronDown className='dropdown' />
              <JsonToTable jsonData={match.jsonFile} visiblity={isVisible[index] ? "visible" : "not-visible"} />
            </div>
          ))
        ) : (
          <p className='no-matches-block'>No Matches</p>
        )}
      </div>
    );
  };
  window.onload = function () {
    var toggleCheckbox = document.getElementById('toggle');

    if (toggleCheckbox) {
      toggleCheckbox.addEventListener('change', function () {
        var resultsDiv = document.querySelector('.Results-div');
        var schedulePage = document.querySelector('.schedule-page');

        if (this.checked) {
          resultsDiv.style.display = 'block';
          schedulePage.style.display = 'none';
        } else {
          resultsDiv.style.display = 'none';
          schedulePage.style.display = 'block';
        }
      });
    }
  };


  return (
    <section className='Results'>
      <Header color="white" />

      <input type="checkbox" id="toggle" class="toggleCheckbox" />
      <label for="toggle" class="toggleContainer">
        <div id="div1">Results</div>
        <div id="div2">Medal Tally</div>
      </label>

      <div className='Results-div hidden'>
        <p className='results-heading'>Medal Tally</p>
        <JsonToTable jsonData={tableData} table="resultTable" />
      </div>

      <section className='schedule-page' >
        <Header color='white' />
        <div className='buttons-container' id="style-2" >
          <button className='date-button btn-1' onClick={() => handleSportsButtonClick('Cricket Men')}>Cricket Men</button>
          <button className='date-button btn-2' onClick={() => handleSportsButtonClick('Football Men')}>Football Men</button>
          <button className='date-button btn-3' onClick={() => handleSportsButtonClick('Squash Men')}>Squash Men</button>
          <button className='date-button btn-4' onClick={() => handleSportsButtonClick('Squash Women')}>Squash Women</button>
          <button className='date-button btn-5' onClick={() => handleSportsButtonClick('Tennis Men')}>Tennis Men</button>
          <button className='date-button btn-6' onClick={() => handleSportsButtonClick('Tennis Women')}>Tennis Women</button>
          <button className='date-button btn-7' onClick={() => handleSportsButtonClick('Chess')}>Chess</button>
          <button className='date-button btn-8' onClick={() => handleSportsButtonClick('Athletics')}>Athletics</button>
        </div>
        <div className='buttons-container-2' id="style-2">
          <p className='Dates-text'>Dates</p>
          <button className='btn-9 date-button-2' onClick={() => handleDateButtonClick('14th Dec')}>14th Dec</button>
          <button className='btn-10 date-button-2' onClick={() => handleDateButtonClick('15th Dec')}>15th Dec</button>
          <button className='btn-11 date-button-2' onClick={() => handleDateButtonClick('16th Dec')}>16th Dec</button>
          <button className='btn-12 date-button-2' onClick={() => handleDateButtonClick('17th Dec')}>17th Dec</button>
          <button className='btn-13 date-button-2' onClick={() => handleDateButtonClick('18th Dec')}>18th Dec</button>
          <button className='btn-14 date-button-2' onClick={() => handleDateButtonClick('19th Dec')}>19th Dec</button>
          <button className='btn-15 date-button-2' onClick={() => handleDateButtonClick('20th Dec')}>20th Dec</button>
          <button className='btn-16 date-button-2' onClick={() => handleDateButtonClick('21st Dec')}>21st Dec</button>
        </div>

        <div className='schedule-div'>
          <div className='date-day'>
            <p>{selectedSport}</p>
          </div>
          {selectedSport === "Athletics" ? renderEventsForDate(selectedDate) : ""}
        </div>
        {selectedSport != "Athletics" ? <ScheduleHelper matches={sportsMatches[selectedSport]} date={selectedDate} /> : ""}
      </section>

    </section>
  )
}
const sportsMatches = {
  "Football Men":
    [
      {
        "id": 1,
        "date": "15.12.2023",
        "time": "12:15 PM",
        "pool": "C",
        "ground": "G-1",
        "home_team": "IIT Patna",
        "away_team": "IIT Mandi",
        "logo_home_team": require('./Assests/IITs/IITP.jpg'),
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        home_score:'0',
        away_score:'1',
        statement:"IIT Mandi won the match"
      },
      {
        "id": 2,
        "date": "15.12.2023",
        "time": "08:30 AM",
        "pool": "F",
        "ground": "G-2",
        "home_team": "IIT Tirupati",
        "away_team": "IIT Dharwad",
        "logo_home_team": require('./Assests/IITs/IITT.jpg'),
        "logo_away_team": require('././Assests/IITs/IITDH.jpg'),
        home_score:"1",
        away_score:"3",
        statement:"IIT Dharwad won the match"
      },
      {
        "id": 3,
        "date": "15.12.2023",
        "time": "10:30 AM",
        "pool": "G",
        "ground": "G-2",
        "home_team": "IIT Hyderbad",
        "away_team": "IIT Varanasi",
        "logo_home_team": require('./Assests/IITs/IITDH.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBHU.jpg'),
        home_score:"0",
        away_score:"2",
        statement:"IIt Varanasi won the match"
      },
      {
        "id": 4,
        "date": "15.12.2023",
        "time": "06:30 PM",
        "pool": "E",
        "ground": "G-1",
        "home_team": "IIT Bhubaneshwar",
        "away_team": "IIT Delhi",
        "logo_home_team": require("./Assests/IITs/IITBBS.jpg"),
        "logo_away_team": require('./Assests/IITs/IITD.jpg'),
        home_score:"1",
        away_score:"0",
        statement:"IIT Bhubaneshwar won the match"
      },
      {
        "id": 5,
        "date": "15.12.2023",
        "time": "12:30 PM",
        "pool": "D",
        "ground": "G-2",
        "home_team": "IIT Bombay",
        "away_team": "IIT Kharagpur",
        "logo_home_team": require('./Assests/IITs/IITB.jpg'),
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
        home_score:"3",
        away_score:"0",
        statement:"IIT Bombay won the match"
      },
      {
        "id": 6,
        "date": "15.12.2023",
        "time": "03:30 PM",
        "pool": "A",
        "ground": "G-2",
        "home_team": "IIT Dhanbad",
        "away_team": "IIT Madras",
        "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITM.jpg'),
        home_score:"1",
        away_score:"3",
        statement:"IIT Madras won the match"
      },
      {
        "id": 7,
        "date": "16.12.2023",
        "time": "10:30 AM",
        "pool": "E",
        "ground": "G-1",
        "home_team": "IIT Ropar",
        "away_team": "IIT Delhi",
        "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITD.jpg'),
        home_score:"1",
        away_score:"2",
        statement: "IIT Delhi won the match"
      },
      {
        "id": 8,
        "date": "16.12.2023",
        "time": "12:15 PM",
        "pool": "C",
        "ground": "G-1",
        "home_team": "IIT Kanpur",
        "away_team": "IIT Mandi",
        "logo_home_team": require('./Assests/IITs/IITK.jpg'),
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        home_score:"1",
        away_score:"1"
      },
      {
        "id": 9,
        "date": "16.12.2023",
        "time": "08:30 AM",
        "pool": "F",
        "ground": "G-2",
        "home_team": "IIT Bhilai",
        "away_team": "IIT Dharwad",
        "logo_home_team": require('./Assests/IITs/IITBH.jpg'),
        "logo_away_team": require('./Assests/IITs/IITDH.jpg'),
        home_score:"3",
        away_score:"1",
        statement: "IIT Bhilai won the match"
      },
      {
        "id": 10,
        "date": "16.12.2023",
        "time": "10:30 AM",
        "pool": "G",
        "ground": "G-2",
        "home_team": "IIT Guwahati",
        "away_team": "IIT Varanasi",
        "logo_home_team": require('./Assests/IITs/IITG.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBHU.jpg'),
        home_score:"4",
        away_score:"0",
        statement: "IIT Guwahati won the match"
      },
      {
        "id": 11,
        "date": "16.12.2023",
        "time": "06:30 PM",
        "pool": "B",
        "ground": "G-1",
        "home_team": "Gandhinagar (B1)",
        "away_team": "Palakkad (B2)",
        "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
        "logo_away_team": require('./Assests/IITs/IITPKD.jpg'),
        home_score:"1",
        away_score:"1",
        statement: "Match Tied"
      },
      {
        "id": 12,
        "date": "16.12.2023",
        "time": "12:30 PM",
        "pool": "D",
        "ground": "G-2",
        "home_team": "IIT Indore",
        "away_team": "IIT Kharagpur",
        "logo_home_team": require('./Assests/IITs/IITI.jpg'),
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
        home_score:"1",
        away_score:"5",
        statement: "IIT Kharagpur won the match"
      },
      {
        "id": 13,
        "date": "16.12.2023",
        "time": "03:30 PM",
        "pool": "A",
        "ground": "G-2",
        "home_team": "IIT Jodhpur",
        "away_team": "IIT Madras",
        "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
        "logo_away_team": require('./Assests/IITs/IITM.jpg'),
        home_score:"1",
        away_score:"1",
        statement: "IIT Madras won the match"
      },
      {
        "id": 14,
        "date": "17.12.2023",
        "time": "12:15 PM",
        "pool": "C",
        "ground": "G-1",
        "home_team": "IIT Patna",
        "away_team": "IIT Kanpur",
        "logo_home_team": require('./Assests/IITs/IITP.jpg'),
        "logo_away_team": require('./Assests/IITs/IITK.jpg'),
        home_score:"1",
        away_score:"1",
        statement: "Match Tied"
      },
      {
        "id": 15,
        "date": "17.12.2023",
        "time": "08:30 AM",
        "pool": "F",
        "ground": "G-2",
        "home_team": "IIT Tirupati",
        "away_team": "IIT Bhilai",
        "logo_home_team": require('./Assests/IITs/IITT.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBH.jpg'),
        home_score:"0",
        away_score:"1",
        statement: "IIT Bhilai won the match"
      },
      {
        "id": 16,
        "date": "17.12.2023",
        "time": "10:30 AM",
        "pool": "G",
        "ground": "G-2",
        "home_team": "IIT Hyderbad",
        "away_team": "IIT Guwahati",
        "logo_home_team": require('./Assests/IITs/IITDH.jpg'),
        "logo_away_team": require('./Assests/IITs/IITG.jpg'),
        home_score:"1",
        away_score:"2",
        statement: "IIT Guwahati won the match"
      },
      {
        "id": 17,
        "date": "17.12.2023",
        "time": "06:30 PM",
        "pool": "E",
        "ground": "G-1",
        "home_team": "IIT Bhubaneshwar",
        "away_team": "IIT Ropar",
        "logo_home_team": require("./Assests/IITs/IITBBS.jpg"),
        "logo_away_team": require('./Assests/IITs/IITRPR.jpg'),
        home_score:"1",
        away_score:"0",
        statement: "IIT Bhubaneshwar won the match"
      },
      {
        "id": 18,
        "date": "17.12.2023",
        "time": "12:30 PM",
        "pool": "D",
        "ground": "G-2",
        "home_team": "IIT Bombay",
        "away_team": "IIT Indore",
        "logo_home_team": require('./Assests/IITs/IITB.jpg'),
        "logo_away_team": require('./Assests/IITs/IITI.jpg'),
        home_score:"1",
        away_score:"0",
        statement: "IIT Bombay won the match"
      },
      {
        "id": 19,
        "date": "17.12.2023",
        "time": "03:30 PM",
        "pool": "A",
        "ground": "G-2",
        "home_team": "IIT Dhanbad",
        "away_team": "IIT Jodhpur",
        "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
        home_score:"2",
        away_score:"2",
        statement:"Match Tied"
      },
      {
        "id": 20,
        "date": "17.12.2023",
        "time": "08:00 PM",
        "pool": "H",
        "ground": "G-1",
        "home_team": "IIT Roorkee",
        "away_team": "IIT Jammu",
        "logo_home_team": require('./Assests/IITs/IITR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITJMU.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Roorkee won the match"
      },
      {
        "id": 21,
        "date": "18.12.2023",
        "time": "12:30 AM",
        "ground": "G-1",
        "stage": "PRE-QUARTER FINAL",
        "home_team": "IIT Varanasi",
        "away_team": "IIT Bhubaneshwar",
        "ground": "G-1",
        "logo_home_team": require('./Assests/IITs/IITBHU.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBBS.jpg'),
        home_score:"0",
        away_score:"1",
        statement: "IIT Bhubaneshwar won the match"
      },
      {
        "id": 22,
        "date": "18.12.2023",
        "time": "03:30 PM",
        "ground": "G-1",
        "stage": "PRE-QUARTER FINAL",
        "home_team": "IIT Guwahati",
        "away_team": "IIT Delhi",
        "ground": "G-1",
        "logo_home_team": require('./Assests/IITs/IITG.jpg'),
        "logo_away_team": require('./Assests/IITs/IITD.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Guwahati won the match"
      },
      {
        "id": 23,
        "date": "18.12.2023",
        "time": "08:30 AM",
        "ground": "G-2",
        "stage": "PRE-QUARTER FINAL",
        "home_team": "IIT Madras",
        "away_team": "IIT Kanpur",
        "ground": "G-2",
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITK.jpg'),
        home_score:"1",
        away_score:"0",
        statement: "IIT Madras won the match"
      },
      {
        "id": 24,
        "date": "18.12.2023",
        "time": "08:00 PM",
        "ground": "G-1",
        "stage": "PRE-QUARTER FINAL",
        "home_team": "IIT Jodhpur",
        "away_team": "IIT Mandi",
        "ground": "G-1",
        "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        home_score:"3",
        away_score:"1",
        statement: "IIT Jodhpur won the match"
      },
      {
        "id": 25,
        "date": "18.12.2023",
        "time": "12:30 PM",
        "ground": "G-1",
        "stage": "PRE-QUARTER FINAL",
        "home_team": "IIT Dharwad",
        "away_team": "IIT Roorkee",
        "ground": "G-1",
        "logo_home_team": require('./Assests/IITs/IITDH.jpg'),
        "logo_away_team": require('./Assests/IITs/IITR.jpg'),
        home_score:"0",
        away_score:"4",
        statement: "IIT Roorkee won the match"
      },
      {
        "id": 26,
        "date": "18.12.2023",
        "time": "12:30 PM",
        "ground": "G-2",
        "stage": "PRE-QUARTER FINAL",
        "home_team": "IIT Jammu",
        "away_team": "IIT Bhilai",
        "ground": "G-2",
        "logo_home_team": require('./Assests/IITs/IITJMU.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBH.jpg'),
        home_score:"1",
        away_score:"3",
        statement: "IIT Bhilai won the match"
      },
      {
        "id": 27,
        "date": "18.12.2023",
        "time": "03:30 PM",
        "ground": "G-2",
        "stage": "PRE-QUARTER FINAL",
        "home_team": "IIT Gandhinagar",
        "away_team": "IIT Kharagpur",
        "ground": "G-2"
      },
      {
        "id": 28,
        "date": "18.12.2023",
        "time": "10:30 AM",
        "ground": "G-2",
        "stage": "PRE-QUARTER FINAL",
        "home_team": "IIT Madras",
        "away_team": "IIT Kanpur",
        "ground": "G-2",
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITK.jpg'),
        home_score:"1",
        away_score:"0",
        statement: "IIT Madras won the match"
      },
      {
        "id": 29,
        "date": "19.12.2023",
        "time": "10:45 AM",
        "ground": "G-1",
        "stage": "QUARTER FINAL",
        "home_team": "IIT Madras",
        "away_team": "IIT Bhilai",
        "logo_home_team":require('./Assests/IITs/IITM.jpg'),
        "logo_away_team":require('./Assests/IITs/IITBH.jpg'),
        home_score:"5",
        away_score:"0",
        statement:"IIT Madras won the match"
      },
      {
        "id": 30,
        "date": "19.12.2023",
        "time": "12:15 PM",
        "ground": "G-1",
        "stage": "QUARTER FINAL",
        "home_team": "IIT Kharagpur",
        "away_team": "IIT Bhubaneshwar",
        "logo_home_team":require('./Assests/IITs/IITKGP.jpg'),
        "logo_away_team":require('./Assests/IITs/IITBBS.jpg'),
        home_score:"0(4)",
        away_score:"0(1)",
        statement:"IIT Kharagpur won the match"
      },
      {
        "id": 31,
        "date": "19.12.2023",
        "time": "06:00 PM",
        "ground": "G-1",
        "stage": "QUARTER FINAL",
        "home_team": "IIT Jodhpur",
        "away_team": "IIT Roorkee",
        "logo_home_team":require('./Assests/IITs/IITJ.jpg'),
        "logo_away_team":require('./Assests/IITs/IITR.jpg'),
        home_score:"0",
        away_score:"1",
        statement:"IIT Roorkee won the match"
      },
      {
        "id": 32,
        "date": "19.12.2023",
        "time": "07:30 PM",
        "ground": "G-1",
        "stage": "QUARTER FINAL",
        "home_team": "IIT Bomaby",
        "away_team": "IIT Guwahati",
        "logo_home_team":require('./Assests/IITs/IITB.jpg'),
        "logo_away_team":require('./Assests/IITs/IITG.jpg'),
        home_score:"1",
        away_score:"0",
        statement:"IIT Bombay won the match"
      },
      {
        "id": 33,
        "date": "20.12.2023",
        "time": "6:00 PM",
        "ground": "G-1",
        "stage": "SEMI FINAL",
        "home_team": "QF 1",
        "away_team": "QF 4",
        "ground": "G-1"
      },
      {
        "id": 34,
        "date": "20.12.2023",
        "time": "7:30 PM",
        "ground": "G-1",
        "stage": "SEMI FINAL",
        "home_team": "QF 2",
        "away_team": "QF 3",
        "ground": "G-1"
      },
      {
        "id": 35,
        "date": "21.12.2023",
        "time": "6:00 PM",
        "ground": "G-1",
        "stage": "3rd Place",
        "home_team": "LOSER OF SF1",
        "away_team": "LOSER OF SF2",
        "ground": "G-1"
      },
      {
        "id": 36,
        "date": "21.12.2023",
        "time": "7:30 PM",
        "ground": "G-1",
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
        home_score: '108 / 8 (19.4 Ov)',
        away_score: '107 / 10 (19.0 Ov)',
        statement: "IIT Palakkad won by 2 wickets"
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
        "logo_away_team": require('./Assests/IITs/IITGOA.jpg'),
        home_score: '108 / 3 (13.3 Ov)',
        away_score: '107 / 9 (20 Ov)',
        statement: "IIT GUWAHATI won by 7 wickets"
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
        "logo_away_team": require('./Assests/IITs/IITT.jpg'),
        home_score: '134 / 2 (18.5 Ov)',
        away_score: '133 / 7 (20 Ov)',
        statement: "IIT Indore won by 8 wickets"
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
        "logo_away_team": require('./Assests/IITs/IITGN.jpg'),
        home_score: '61 / 10 (13.3 Ov)',
        away_score: '62 / 1 (6.4 Ov)',
        statement: "IIT Gandhinagar won by 9 wickets"
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
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
        home_score: '158 / 7 (19.5 Ov)',
        away_score: '157 / 7 (20 Ov)',
        statement: "IIT Hyderabad won by 3 wickets"
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
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
        home_score:"91/9 (20.0 OV)",
        away_score:"92/7 (18.0 OV)",
        statement:"IIT Kharagpur won by 3 wickets"
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
        "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
        home_score:"176/4 (20 OV)",
        away_score:"65/10 (14.4 OV)",
        statement: "IIT Roorkee won by 111 runs"
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
        "home_team": "IIT Jammu",
        "away_team": "IIT Dharwad",
        "logo_home_team": require('./Assests/IITs/IITJMU.jpg'),
        "logo_away_team": require('./Assests/IITs/IITDH.jpg'),
        statement: "Match is yet to happen",
        home_score:"104/1 (14.5 OV)",
        away_score:"99/10 (19.2 OV)",
        statement:"IIT Jammu won by 9 wickets"
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
        "logo_away_team": require('./Assests/IITs/IITGOA.jpg'),
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
        "logo_away_team": require('./Assests/IITs/IITT.jpg'),
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
        "logo_away_team": require('./Assests/IITs/IITGN.jpg'),
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
        "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
        home_score:"119/4 (15.5 OV)",
        away_score:"118/10 (19.4 OV)",
        statement: "IIT Madras won by 6 wickets"
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
        "logo_away_team": require('./Assests/IITs/IITB.jpg'),
        home_score:"42/10 (14.4 OV)",
        away_score:"174/6 (20.0 OV)",
        statement: "IIT Bombay won by 132 runs"
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
        "logo_away_team": require('./Assests/IITs/IITJMU.jpg'),
        home_score:"114/6 (20.0 OV)",
        away_score:"170/4 (20.0 OV)",
        statement: "IIT Jammu won by 56 runs"
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
        "logo_away_team": require('./Assests/IITs/IITK.jpg'),
        home_score:"153/8 (19.5 OV)",
        away_score:"152/5 (20.0 OV)",
        statement: "IIT GUWAHATI won by 2 wickets"
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
        "logo_away_team": require('./Assests/IITs/IITBH.jpg'),
        home_score:"97/10 (19.4 OV)",
        away_score:"134/7 (20.0 OV)",
        statement: "IIT BHU won by 37 runs"
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
        "logo_away_team": require('./Assests/IITs/IITBBS.jpg'),
        home_score:"130/10 (19.5 OV)",
        away_score:"102/10 (19.0 OV)",
        statement: "IIT Dhanbad won by 28 runs"
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
        "logo_away_team": require('./Assests/IITs/IITH.jpg'),
        home_score:"114/9 (20.0 OV)",
        away_score:"146/9 (20.0 OV)",
        statement: "IIT Hyderabad won by 32 runs"
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
        "logo_away_team": require('./Assests/IITs/IITM.jpg'),
        home_score:"124/10 (20.0 OV)",
        away_score:"113/9 (20.0 OV)",
        statement: "IIT Roorkee won by 11 runs"
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
        "logo_away_team": require('./Assests/IITs/IITBH.jpg'),
        home_score:"228/4 (20.0 OV)",
        away_score:"50/10 (19.1 OV)", 
        statement: "IIT Mandi won by 178 runs"
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
        "logo_away_team": require('./Assests/IITs/IITP.jpg'),
        home_score:"79/0 (6.0 OV)",
        away_score:"78/10 (17.1 OV)",
        statement: "IIT Delhi won by 10 wickets"
      },
      {
        "id": 23,
        "date": "18.12.2023",
        "time": "8:30 AM",
        "ground": "G-2",
        "stage": "PQ1",
        "home_team": "IIT Mandi",
        "away_team": "IIT Kanpur",
        "logo_home_team":require('./Assests/IITs/IITMD.jpg'),
        "logo_away_team":require('./Assests/IITs/IITK.jpg'),
        home_score:"114/10 (20.0 OV)",
        away_score:"118/1 (17.4 OV)",
        statement:"IIT Kanpur won by 9 wickets"
      },
      {
        "id": 24,
        "date": "18.12.2023",
        "time": "8:30 AM",
        "ground": "G-4",
        "stage": "PQ2",
        "home_team": "IIT Jammu",
        "away_team": "IIT Madras",
        "logo_home_team":require('./Assests/IITs/IITJMU.jpg'),
        "logo_away_team":require('./Assests/IITs/IITM.jpg'),
        home_score:"136/6 (20.0 OV)",
        away_score:"62/8 (20.0 OV)",
        statement:"IIT Madras won by 74 runs"
      },
      {
        "id": 25,
        "date": "18.12.2023",
        "time": "8:30 AM",
        "ground": "G-1",
        "stage": "PQ3",
        "home_team": "IIT Bombay",
        "away_team": "IIT Guwahati",
        "logo_home_team":require('./Assests/IITs/IITB.jpg'),
        "logo_away_team":require('./Assests/IITs/IITG.jpg'),
        home_score:"129/7 (20.0 OV)",
        away_score:"130/5 (18.3 OV)",
        statement:"IIT Bombay won by 5 wickets"
      },
      {
        "id": 26,
        "date": "18.12.2023",
        "time": "8:30 AM",
        "ground": "G-3",
        "stage": "PQ4",
        "home_team": "IIT Roorkee",
        "away_team": "IIT Palakkad",
        "logo_home_team":require('./Assests/IITs/IITR.jpg'),
        "logo_away_team":require('./Assests/IITs/IITPKD.jpg'),
        home_score:"136/8 (20.0 OV)",
        away_score:"103/9 (20.0 OV)",
        statement:"IIT Roorkee won by 33 run"
      },
      {
        "id": 27,
        "date": "18.12.2023",
        "time": "12:30 PM",
        "ground": "G-2",
        "stage": "PQ5",
        "home_team": "IIT Hyderabad",
        "away_team": "IIT Gandhinagar",
        "logo_home_team":require('./Assests/IITs/IITH.jpg'),
        "logo_away_team":require('./Assests/IITs/IITGN.jpg'),
        home_score:"50/10 (16.4 OV)",
        away_score:"53/3 (9.1 OV)",
        statement:"IIT Gandhinagar won by 7 wickets"
      },
      {
        "id": 28,
        "date": "18.12.2023",
        "time": "12:30 PM",
        "ground": "G-4",
        "stage": "PQ6",
        "home_team": "IIT Patna",
        "away_team": "IIT BHU",
        "logo_home_team":require('./Assests/IITs/IITP.jpg'),
        "logo_away_team":require('./Assests/IITs/IITBHU.jpg'),
        home_score:"125/7 (20.0 OV)",
        away_score:"126/5 (17.5 OV)",
        statement:"IIT BHU won by 5 wickets"
      },
      {
        "id": 29,
        "date": "18.12.2023",
        "time": "12:30 PM",
        "ground": "G-1",
        "stage": "PQ7",
        "home_team": "IIT Kharagpur",
        "away_team": "IIT Dhanbad",
        "logo_home_team":require('./Assests/IITs/IITKGP.jpg'),
        "logo_away_team":require('./Assests/IITs/IITISM.jpg'),
        home_score:"163/4 (20.0 OV)",
        away_score:"82/10 (17.1 OV)",
        statement:"IIT Kharagpur won by 81 runs"
      },
      {
        "id": 30,
        "date": "18.12.2023",
        "time": "12:30 PM",
        "ground": "G-3",
        "stage": "PQ8",
        "home_team": "IIT Delhi",
        "away_team": "IIT Indore",
        "logo_home_team":require('./Assests/IITs/IITD.jpg'),
        "logo_away_team":require('./Assests/IITs/IITI.jpg'),
        home_score:"141/8 (20.0 OV)",
        away_score:"70/10 (17.5 OV)",
        statement:"IIT Delhi won by 71 runs"
      },
      {
        "id": 31,
        "date": "19.12.2023",
        "time": "8:30 AM",
        "ground": "G-2",
        "stage": "QF1",
        "home_team": "IIT Kanpur",
        "away_team": "IIT Bhu",
        "logo_home_team":require('./Assests/IITs/IITK.jpg'),
        "logo_away_team":require('./Assests/IITs/IITBHU.jpg'),
        home_score:"106/3 (18.0 OV)",
        away_score:"102/10 (19.3 OV)",
        statement:"IIT Kanpur won by 7 wickets"
      },
      {
        "id": 32,
        "date": "19.12.2023",
        "time": "8:30 AM",
        "ground": "G-1",
        "stage": "QF2",
        "home_team": "IIT Madras",
        "away_team": "IIT Gandhinagar",
        "logo_home_team":require('./Assests/IITs/IITM.jpg'),
        "logo_away_team":require('./Assests/IITs/IITGN.jpg'),
        home_score:"139/6 (20.0 OV)",
        away_score:"138/7 (20.0 OV)",
        statement:"IIT Madras won by 1 run"
      },
      {
        "id": 33,
        "date": "19.12.2023",
        "time": "12:30 PM",
        "ground": "G-1",
        "stage": "QF3",
        "home_team": "IIT Bombay",
        "away_team": "IIT Delhi",
        "logo_home_team":require('./Assests/IITs/IITB.jpg'),
        "logo_away_team":require('./Assests/IITs/IITD.jpg'),
        home_score:"141/7 (20.0 OV)",
        away_score:"146/8 (20.0 OV)",
        statement:"IIT Delhi won by 5 runs"
      },
      {
        "id": 34,
        "date": "19.12.2023",
        "time": "12:30 PM",
        "ground": "G-2",
        "stage": "QF4",
        "home_team": "IIT Roorkee",
        "away_team": "IIT Kharagpur",
        "logo_home_team":require('./Assests/IITs/IITR.jpg'),
        "logo_away_team":require('./Assests/IITs/IITKGP.jpg'),
        home_score:"112/9 (20.0 OV)",
        away_score:"109/10 (20.0 OV)",
        statement:"IIT Roorkee won by 3 runs"
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
        "logo_away_team": require('./Assests/IITs/IITI.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Madras won the match"
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
        "logo_away_team": require('./Assests/IITs/IITH.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Bomabay won the match"
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
        "logo_away_team": require('./Assests/IITs/IITBHU.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Delhi won the match"
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
        "logo_away_team": require('./Assests/IITs/IITG.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Kharagpur won the match"
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
        "logo_away_team": require('./Assests/IITs/IITP.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Dhanbad won the match"
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
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Kanpur won the match"
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
        "logo_away_team": require('./Assests/IITs/IITR.jpg'),
        home_score:"1",
        away_score:"2",
        statement: "IIT Roorkee won the match"
      },
      {
        "id": 8,
        "date": "16.12.2023",
        "time": "10:00 AM",
        "ground": "C-1",
        "home_team": "IIT Madras",
        "away_team": "IIT Patna",
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITP.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Madras won the match"
      },
      {
        "id": 9,
        "date": "16.12.2023",
        "time": "10:00 AM",
        "ground": "C-2",
        "home_team": "IIT Delhi",
        "away_team": "IIT Mandi",
        "logo_home_team": require('./Assests/IITs/IITD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Delhi won the match"
      },
      {
        "id": 10,
        "date": "16.12.2023",
        "time": "11:00 AM",
        "ground": "C-1",
        "home_team": "IIT Bombay",
        "away_team": "IIT Roorkee",
        "logo_home_team": require('./Assests/IITs/IITB.jpg'),
        "logo_away_team": require('./Assests/IITs/IITR.jpg'),
        home_score:"1",
        away_score:"2",
        statement: "IIT Roorkee won the match"
      },
      {
        "id": 11,
        "date": "16.12.2023",
        "time": "11:00 AM",
        "ground": "C-2",
        "home_team": "IIT Dhanbad",
        "away_team": "IIT Indore",
        "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITI.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Dhanbad won the match"
      },
      {
        "id": 12,
        "date": "16.12.2023",
        "time": "4:00 PM",
        "ground": "C-1",
        "home_team": "IIT Jodhpur",
        "away_team": "IIT Hyderabad",
        "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
        "logo_away_team": require('./Assests/IITs/IITH.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Jodhpur won the match"
      },
      {
        "id": 13,
        "date": "16.12.2023",
        "time": "4:00 PM",
        "ground": "C-2",
        "home_team": "IIT Kanpur",
        "away_team": "IIT BHU",
        "logo_home_team": require('./Assests/IITs/IITK.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBHU.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Kanpur won the match"
      },
      {
        "id": 14,
        "date": "16.12.2023",
        "time": "5:00 PM",
        "ground": "C-1",
        "home_team": "IIT Gandhinagar",
        "away_team": "IIT Guwahati",
        "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
        "logo_away_team": require('./Assests/IITs/IITG.jpg'),
        home_score:"1",
        away_score:"2",
        statement: "IIT Guwahati won the match"
      },
      {
        "id": 15,
        "date": "17.12.2023",
        "time": "10:00 AM",
        "ground": "C-1",
        "home_team": "IIT Madras",
        "away_team": "IIT Dhanbad",
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITISM.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Madras won the match"
      },
      {
        "id": 16,
        "date": "17.12.2023",
        "time": "10:00 AM",
        "ground": "C-2",
        "home_team": "IIT Bombay",
        "away_team": "IIT Jodhpur",
        "logo_home_team": require('./Assests/IITs/IITB.jpg'),
        "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Bombay won the match"
      },
      {
        "id": 17,
        "date": "17.12.2023",
        "time": "11:00 PM",
        "ground": "C-1",
        "home_team": "IIT Delhi",
        "away_team": "IIT Kanpur",
        "logo_home_team": require('./Assests/IITs/IITD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITK.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Delhi won the match"
      },
      {
        "id": 18,
        "date": "17.12.2023",
        "time": "4:00 PM",
        "ground": "C-2",
        "home_team": "IIT Kharagpur",
        "away_team": "IIT Gandhinagar",
        "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
        "logo_away_team": require('./Assests/IITs/IITGN.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Kharagpur won the match"
      },
      {
        "id": 19,
        "date": "17.12.2023",
        "time": "4:00 PM",
        "ground": "C-1",
        "home_team": "IIT Indore",
        "away_team": "IIT Patna",
        "logo_home_team": require('./Assests/IITs/IITI.jpg'),
        "logo_away_team": require('./Assests/IITs/IITP.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Indore won the match"
      },
      {
        "id": 20,
        "date": "17.12.2023",
        "time": "5:00 PM",
        "ground": "C-2",
        "home_team": "IIT Varanasi",
        "away_team": "IIT Mandi",
        "logo_home_team": require('./Assests/IITs/IITBHU.jpg'),
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Varanasi won the match"
      },
      {
        "id": 21,
        "date": "17.12.2023",
        "time": "5:00 PM",
        "ground": "C-1",
        "home_team": "IIT Hyderabad",
        "away_team": "IIT Roorkee",
        "logo_home_team": require('./Assests/IITs/IITH.jpg'),
        "logo_away_team": require('./Assests/IITs/IITR.jpg'),
        home_score:"0",
        away_score:"3",
        statement: "IIT Roorkee won the match"
      },
      {
        "id": 22,
        "date": "19.12.2023",
        "time": "10:00 AM",
        "stage": "QF-1",
        "ground": "C-1",
        "home_team": "IIT Kharagpur",
        "away_team": "IIT Bombay",
        "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
        "logo_away_team": require('./Assests/IITs/IITB.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Kharagpur won the match" 
      },
      {
        "id": 23,
        "date": "19.12.2023",
        "time": "10:00 AM",
        "stage": "QF-2",
        "ground": "C-2",
        "home_team": "IIT Dhanbad",
        "away_team": "IIT Delhi",
        "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITD.jpg'),
        home_score:"1",
        away_score:"2",
        statement: "IIT Delhi won the match"        
      },
      {
        "id": 24,
        "date": "19.12.2023",
        "time": "12:00 PM",
        "stage": "QF-3",
        "ground": "C-1",
        "home_team": "IIT Guwahati",
        "away_team": "IIT Roorkee",
        "logo_home_team": require('./Assests/IITs/IITG.jpg'),
        "logo_away_team": require('./Assests/IITs/IITR.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Guwahati won the match" 
      },
      {
        "id": 25,
        "date": "19.12.2023",
        "time": "12:00 PM",
        "stage": "QF-4",
        "ground": "C-2",
        "home_team": "IIT Kanpur",
        "away_team": "IIT Madras",
        "logo_home_team": require('./Assests/IITs/IITK.jpg'),
        "logo_away_team": require('./Assests/IITs/IITM.jpg'),
        home_score:"2",
        away_score:"0",
        statement: "IIT Kanpur won the match" 
      },
      {
        "id": 26,
        "date": "20.12.2023",
        "time": "10:00 AM",
        "stage": "SF-1",
        "ground": "C-1",
        "home_team": "QF 1",
        "away_team": "QF 4"
      },
      {
        "id": 27,
        "date": "20.12.2023",
        "time": "12:00 PM",
        "stage": "SF-2",
        "ground": "C-2",
        "home_team": "QF 2",
        "away_team": "QF 3"
      },
      {
        "id": 28,
        "date": "21.12.2023",
        "time": "10:00 AM",
        "stage": "3rd place",
        "ground": "C-1",
        "home_team": "LOSER OF SF1",
        "away_team": "LOSER OF SF2"
      },
      {
        "id": 29,
        "date": "21.12.2023",
        "time": "12:00 PM",
        "stage": "Final",
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
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBHU.jpg'),
        home_score:"1",
        away_score:"2",
        statement:"IIT Varanasi won the match"
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
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        home_score:"2",
        away_score:"1",
        statement:"IIT Roorkeee won the match"
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
        "logo_away_team": require('./Assests/IITs/IITK.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Bombay won the match"
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
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Delhi won the match"
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
        "logo_away_team": require('./Assests/IITs/IITISM.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Gandhinagar won the match"
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
        "logo_away_team": require('./Assests/IITs/IITBHU.jpg'),
        home_score:"2",
        away_score:"1",
        statement:"IIT Gandhinagar won the match"
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
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Jodhpur won the match"
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
        "logo_away_team": require('./Assests/IITs/IITK.jpg'),
        home_score:"0",
        away_score:"3",
        statement: "IIT Kanpur won the match"
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
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Indore won the match"
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
        "logo_away_team": require('./Assests/IITs/IITISM.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Madras won the match"
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
        "logo_away_team": require('./Assests/IITs/IITISM.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Varanasi won the match"
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
        "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
        home_score:"2",
        away_score:"1",
        statement: "IIT Roorkee won the match"
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
        "logo_away_team": require('./Assests/IITs/IITG.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Bombay won the match"
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
        "logo_away_team": require('./Assests/IITs/IITI.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Delhi won the match"
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
        "logo_away_team": require('./Assests/IITs/IITGN.jpg'),
        home_score:"3",
        away_score:"0",
        statement: "IIT Madras won the match"
      },
      {
        "id": 16,
        "date": "19.12.2023",
        "time": "9:00 AM",
        "ground": "C-1",
        "stage": "QF1",
        "home_team": "IIT Roorkee",
        "away_team": "IIT Kharagpur",
        "logo_home_team": require('./Assests/IITs/IITR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
        home_score:"1",
        away_score:"2",
        statement: "IIT Kharagpur won the match"
      },
      {
        "id": 17,
        "date": "19.12.2023",
        "time": "9:00 AM",
        "ground": "C-2",
        "stage": "QF2",
        "home_team": "IIT Bombay",
        "away_team": "IIT Gandhinagar",
        "logo_home_team": require('./Assests/IITs/IITB.jpg'),
        "logo_away_team": require('./Assests/IITs/IITGN.jpg'),
        home_score:"2",
        away_score:"0",
        statement: "IIT Bombay won the match"
      },
      {
        "id": 18,
        "date": "19.12.2023",
        "time": "3:00 PM",
        "ground": "C-1",
        "stage": "QF3",
        "home_team": "IIT Jodhpur",
        "away_team": "IIT Delhi",
        "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
        "logo_away_team": require('./Assests/IITs/IITD.jpg'),
        home_score:"0",
        away_score:"2",
        statement: "IIT Delhi won the match"
      },
      {
        "id": 19,
        "date": "19.12.2023",
        "time": "3:00 PM",
        "ground": "C-2",
        "stage": "QF4",
        "home_team": "IIT Kanpur",
        "away_team": "IIT Madras",
        "logo_home_team": require('./Assests/IITs/IITK.jpg'),
        "logo_away_team": require('./Assests/IITs/IITM.jpg'),
        home_score:"2",
        away_score:"0",
        statement: "IIT Kanpur won the match"        
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
        "logo_home_team": require('./Assests/IITs/IITR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITT.jpg'),
        home_score:"",
        subStatement:"(6-0),(6-2) || (6-0),(6-1)",
        statement: " IIT Roorkee won the match"
      },
      {
        "id": 2,
        "date": "15.12.2023",
        "time": "4:00 PM",
        "pool": "C",
        "ground": "3",
        "home_team": "IIT Delhi",
        "away_team": "IIT Dhanbad",
        "logo_home_team": require('./Assests/IITs/IITD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITISM.jpg'),
        subStatement:"(6-0),(6-1) || (6-7),(5-7),(7-9)|| (6-3), (6-0)",
        statement: "IIT Delhi won the match"
      },
      {
        "id": 3,
        "date": "15.12.2023",
        "time": "5:00 PM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Madras",
        "away_team": "IIT Ropar",
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITRPR.jpg'),
        subStatement:"(6-0),(6-1) || (6-0),(6-0)",
        statement: " IIT Madras won the match"
      },
      {
        "id": 4,
        "date": "15.12.2023",
        "time": "5:00 PM",
        "pool": "A",
        "ground": "4",
        "home_team": "IIT Kharagpur",
        "away_team": "IIT Jodhpur",
        "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
        "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
        subStatement:"(6-0),(6-0) || (6-1),(6-1)",
        statement: " IIT Kharagpur won the match"
      },
      {
        "id": 5,
        "date": "15.12.2023",
        "time": "6:00 PM",
        "pool": "D",
        "ground": "1",
        "home_team": "IIT BHU",
        "away_team": "IIT Goa",
        "logo_home_team": require('./Assests/IITs/IITBHU.jpg'),
        "logo_away_team": require('./Assests/IITs/IITGOA.jpg'),
        subStatement:"(6-1),(6-3) || (6-2),(7-5)",
        statement: " IIT Varanasi won the match"
      },
      {
        "id": 6,
        "date": "15.12.2023",
        "time": "6:00 PM",
        "pool": "C",
        "ground": "3",
        "home_team": "IIT Kanpur",
        "away_team": "IIT Mandi",
        "logo_home_team": require('./Assests/IITs/IITK.jpg'),
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        subStatement:"(6-1),(6-1) || (6-0),(6-0)",
        statement: " IIT Kanpur won the match"
      },
      {
        "id": 7,
        "date": "15.12.2023",
        "time": "7:00 PM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Guwahati",
        "away_team": "IIT Bombay",
        "logo_home_team": require('./Assests/IITs/IITG.jpg'),
        "logo_away_team": require('./Assests/IITs/IITB.jpg'),
        subStatement:"(4-6),(5-7) || (4-6),(0-6),(10-6)",
        statement: " IIT Bombay won the match"
      },
      {
        "id": 8,
        "date": "15.12.2023",
        "time": "7:00 PM",
        "pool": "A",
        "ground": "4",
        "home_team": "IIT Gandhinagar",
        "away_team": "IIT Indore",
        "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
        "logo_away_team": require('./Assests/IITs/IITI.jpg'),
        subStatement:"(6-2),(5-7),(5-4) || (4-6),(6-6) || (3-6),(2-6)",
        statement: " IIT Indore won the match"
      },
      {
        "id": 9,
        "date": "16.12.2023",
        "time": "4:00 PM",
        "pool": "D",
        "ground": "1",
        "home_team": "IIT Roorkee",
        "away_team": "IIT Goa",
        "logo_home_team": require('./Assests/IITs/IITR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITGOA.jpg'),
        subStatement:"(1-6),(2-6)||(6-1),(6-1)||(6-2),(6-0)",
        statement: "IIT Roorkee won the match"
      },
      {
        "id": 10,
        "date": "16.12.2023",
        "time": "4:00 PM",
        "pool": "C",
        "ground": "3",
        "home_team": "IIT Delhi",
        "away_team": "IIT Mandi",
        "logo_home_team": require('./Assests/IITs/IITD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        subStatement:"(6-0), (6-0)||(6-1), (6-0)",
        statement: "IIT Delhi won the match"
      },
      {
        "id": 11,
        "date": "16.12.2023",
        "time": "5:00 PM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Madras",
        "away_team": "IIT Bombay",
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITB.jpg'),
        subStatement:"(1-6),(4-6)||(6-1),(6-1)||(0-6), (1-6)",
        statement: "IIT Bombay won the match"
      },
      {
        "id": 12,
        "date": "16.12.2023",
        "time": "5:00 PM",
        "pool": "A",
        "ground": "4",
        "home_team": "IIT Kharagpur",
        "away_team": "IIT Indore",
        "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
        "logo_away_team": require('./Assests/IITs/IITI.jpg'),
        subStatement:"(6-0),(6-0)||(6-0),(6-0)",
        statement: "IIT Kharagpur won the match"
      },
      {
        "id": 13,
        "date": "16.12.2023",
        "time": "6:00 PM",
        "pool": "D",
        "ground": "1",
        "home_team": "IIT BHU",
        "away_team": "IIT Patna",
        "logo_home_team": require('./Assests/IITs/IITBHU.jpg'),
        "logo_away_team": require('./Assests/IITs/IITP.jpg'),
        subStatement:"(6-1),(6-0)||(6-2),(6-1)",
        statement: "IIT Varanasi won the match"
      },
      {
        "id": 14,
        "date": "16.12.2023",
        "time": "6:00 PM",
        "pool": "C",
        "ground": "3",
        "home_team": "IIT Kanpur",
        "away_team": "IIT Bhubaneswar",
        "logo_home_team": require('./Assests/IITs/IITK.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBBS.jpg'),
        subStatement:"(6-0),(6-0)||(6-0),(6-1)",
        statement: "IIT Kanpur won the match"
      },
      {
        "id": 15,
        "date": "16.12.2023",
        "time": "7:00 PM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Guwahati",
        "away_team": "IIT Dharwad",
        "logo_home_team": require('./Assests/IITs/IITG.jpg'),
        "logo_away_team": require('./Assests/IITs/IITDH.jpg'),
        subStatement:"(6-1),(6-1)||(6-1),(6-2)",
        statement: "IIT Guwahati won the match"
      },
      {
        "id": 16,
        "date": "16.12.2023",
        "time": "7:00 PM",
        "pool": "A",
        "ground": "4",
        "home_team": "IIT Gandhinagar",
        "away_team": "IIT Hyderabad",
        "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
        "logo_away_team": require('./Assests/IITs/IITH.jpg'),
        subStatement:"(6-7),(6-3),(6-7)||(1-6),(2-6)",
        statement: "IIT Hyderabad won the match"
      },
      {
        "id": 17,
        "date": "17.12.2023",
        "time": "4:00 PM",
        "pool": "D",
        "ground": "1",
        "home_team": "IIT BHU",
        "away_team": "IIT Tirupati",
        "logo_home_team": require('./Assests/IITs/IITBHU.jpg'),
        "logo_away_team": require('./Assests/IITs/IITT.jpg'),
        subStatement:"(6-2),(7-5)||(6-2),(7-6)",
        statement: "IIT Vranasi won the match"
      },
      {
        "id": 18,
        "date": "17.12.2023",
        "time": "4:00 PM",
        "pool": "C",
        "ground": "3",
        "home_team": "IIT Kanpur",
        "away_team": "IIT Dhanbad",
        "logo_home_team": require('./Assests/IITs/IITK.jpg'),
        "logo_away_team": require('./Assests/IITs/IITISM.jpg'),
        subStatement:"(6-2),(6-2)||(6-2),(6-7),(10-6)",
        statement: "IIT Kanpur won the match"
      },
      {
        "id": 19,
        "date": "17.12.2023",
        "time": "5:00 PM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Guwahati",
        "away_team": "IIT Ropar",
        "logo_home_team": require('./Assests/IITs/IITG.jpg'),
        "logo_away_team": require('./Assests/IITs/IITRPR.jpg'),
        subStatement:"(7-5),(6-4)||(6-0),(6-0)",
        statement: "IIT Guwahati won the match"
      },
      {
        "id": 20,
        "date": "17.12.2023",
        "time": "5:00 PM",
        "pool": "A",
        "ground": "4",
        "home_team": "IIT Gandhinagar",
        "away_team": "IIT Jodhpur",
        "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
        "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
        subStatement:"(6-2),(7-5)||(3-6),(1-6)||(4-6),(4-6)",
        statement: "IIT Jodhpur won the match"
      },
      {
        "id": 21,
        "date": "17.12.2023",
        "time": "6:00 PM",
        "pool": "D",
        "ground": "1",
        "home_team": "IIT Goa",
        "away_team": "IIT Patna",
        "logo_home_team": require('./Assests/IITs/IITGOA.jpg'),
        "logo_away_team": require('./Assests/IITs/IITP.jpg'),
        subStatement:"(3-6),(1-6)||(7-6),(3-6)||(1-6),(0-6)",
        statement: "IIT Patna won the match"
      },
      {
        "id": 22,
        "date": "17.12.2023",
        "time": "6:00 PM",
        "pool": "C",
        "ground": "3",
        "home_team": "IIT Mandi",
        "away_team": "IIT Bhubaneswar",
        "logo_home_team": require('./Assests/IITs/IITMD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBBS.jpg'),
        subStatement:"(6-1),(6-2)||(6-1),(6-4)",
        statement: "IIT Mandi won the match"
      },
      {
        "id": 23,
        "date": "17.12.2023",
        "time": "7:00 PM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Bombay",
        "away_team": "IIT Dharwad",
        "logo_home_team": require('./Assests/IITs/IITB.jpg'),
        "logo_away_team": require('./Assests/IITs/IITDH.jpg'),
        subStatement:"(6-4),(6-1)||(6-0),(6-0)",
        statement: "IIT Bombay won the match"
      },
      // {
      //   "id": 24,
      //   "date": "17.12.2023",
      //   "time": "7:00 PM",
      //   "pool": "A",
      //   "ground": "4",
      //   "home_team": "IIT Indore",
      //   "away_team": "IIT Hyderabad",
      //   "logo_home_team": require('./Assests/IITs/IITI.jpg'),
      //   "logo_away_team": require('./Assests/IITs/IITH.jpg'),
      //   subStatement:"(6-7),(6-3),(6-7)||(1-6),(2-6)",
      //   statement: "IIT Hyderabad won the match"
      // },
      {
        "id": 25,
        "date": "18.12.2023",
        "time": "4:00 PM",
        "pool": "D",
        "ground": "1",
        "home_team": "IIT Roorkee",
        "away_team": "IIT Patna",
        "logo_home_team": require('./Assests/IITs/IITR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITP.jpg'),
        subStatement:"(3-6),(3-6)||(7-5),(6-4)|| (6-0),(6,3)",
        statement: "IIT Roorkee won the match"
      },
      {
        "id": 26,
        "date": "18.12.2023",
        "time": "4:00 PM",
        "pool": "C",
        "ground": "3",
        "home_team": "IIT Delhi",
        "away_team": "IIT Bhubaneswar",
        "logo_home_team": require('./Assests/IITs/IITD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBBS.jpg'),
        subStatement:"(6-0),(6-1)||(6-0),(6-2)",
        statement: "IIT Delhi won the match"
      },
      {
        "id": 27,
        "date": "18.12.2023",
        "time": "5:00 PM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Madras",
        "away_team": "IIT Dharwad",
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITDH.jpg'),
        subStatement:"(6-0),(6-1)||(6-1),(6-1)",
        statement: "IIT Madras won the match"
      },
      {
        "id": 28,
        "date": "18.12.2023",
        "time": "5:00 PM",
        "pool": "A",
        "ground": "4",
        "home_team": "IIT Kharagpur",
        "away_team": "IIT Hyderabad",
        "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
        "logo_away_team": require('./Assests/IITs/IITH.jpg'),
        subStatement:"(6-1),(6-0)||(6-0),(6-0)",
        statement: "IIT Kharagpur won the match"
      },
      {
        "id": 29,
        "date": "18.12.2023",
        "time": "6:00 PM",
        "pool": "D",
        "ground": "1",
        "home_team": "IIT Tirupati",
        "away_team": "IIT Goa",
        "logo_home_team": require('./Assests/IITs/IITT.jpg'),
        "logo_away_team": require('./Assests/IITs/IITGOA.jpg'),
        subStatement:"(1-6),(1-6)||(1-6),(1-6)",
        statement: "IIT Goa won the match"
      },
      {
        "id": 30,
        "date": "18.12.2023",
        "time": "6:00 PM",
        "pool": "C",
        "ground": "3",
        "home_team": "IIT Dhanbad",
        "away_team": "IIT Mandi",
        "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        subStatement:"(6-1),(6-1)||(6-0),(6-0)",
        statement: "IIT Dhanbad won the match"
      },
      {
        "id": 31,
        "date": "18.12.2023",
        "time": "7:00 PM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Ropar",
        "away_team": "IIT Bombay",
        "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITB.jpg'),
        subStatement:"(0-6),(0-6)||(0-6),(0-6)",
        statement: "IIT Bombay won the match"
      },
      {
        "id": 32,
        "date": "18.12.2023",
        "time": "7:00 PM",
        "pool": "A",
        "ground": "4",
        "home_team": "IIT Jodhpur",
        "away_team": "IIT Indore",
        "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
        "logo_away_team": require('./Assests/IITs/IITI.jpg'),
        subStatement:"(6-4),(6-1),(1-6)||(6-2),(3-6),(8-10)",
        statement: "IIT Indore won the match"
      },
      {
        "id": 33,
        "date": "19.12.2023",
        "time": "4:00 PM",
        "pool": "D",
        "ground": "1",
        "home_team": "IIT Roorkee",
        "away_team": "IIT BHU",
        "logo_home_team": require('./Assests/IITs/IITR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBHU.jpg'),
        subStatement:"(1-6),(0-6)||(6-1),(7-6)||(6-1),(6-4)",
        statement: "IIT Bombay won the match"
      },
      {
        "id": 34,
        "date": "19.12.2023",
        "time": "4:00 PM",
        "pool": "C",
        "ground": "3",
        "home_team": "IIT Delhi",
        "away_team": "IIT Kanpur",
        "logo_home_team": require('./Assests/IITs/IITD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITK.jpg'),
        subStatement:"(6-4),(7-5)||(1-6),(1-6)||(1-6),(6-3),(6-1)",
        statement: "IIT Delhi won the match"
      },
      {
        "id": 35,
        "date": "19.12.2023",
        "time": "5:00 PM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Madras",
        "away_team": "IIT Guwahati",
        "logo_home_team": require('./Assests/IITs/IITM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITG.jpg'),
        subStatement:"(6-1),(6-2)||(6-3),(6-3)",
        statement: "IIT Madras won the match"
      },
      {
        "id": 36,
        "date": "19.12.2023",
        "time": "5:00 PM",
        "pool": "A",
        "ground": "4",
        "home_team": "IIT Kharagpur",
        "away_team": "IIT Gandhinagar",
        "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
        "logo_away_team": require('./Assests/IITs/IITGN.jpg'),
        subStatement:"(6-0),(6-0)||(6-0),(6-0)",
        statement: "IIT Kharagpur won the match"
      },
      {
        "id": 37,
        "date": "19.12.2023",
        "time": "6:00 PM",
        "pool": "D",
        "ground": "1",
        "home_team": "IIT Tirupati",
        "away_team": "IIT Patna",
        "logo_home_team": require('./Assests/IITs/IITT.jpg'),
        "logo_away_team": require('./Assests/IITs/IITP.jpg'),
        subStatement:"(6-1),(6-3)||(6-3),(6-2)",
        statement: "IIT Tirupati won the match"
      },
      {
        "id": 38,
        "date": "19.12.2023",
        "time": "6:00 PM",
        "pool": "C",
        "ground": "3",
        "home_team": "IIT Dhanbad",
        "away_team": "IIT Bhubaneswar",
        "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
        "logo_away_team": require('./Assests/IITs/IITBBS.jpg'),
        subStatement:"(6-1),(4-6),(6-3)||(6-1),(6-1)",
        statement: "IIT Dhanbad won the match"
      },
      {
        "id": 39,
        "date": "19.12.2023",
        "time": "7:00 PM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Ropar",
        "away_team": "IIT Dharwad",
        "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITDH.jpg'),
        subStatement:"(6-1),(6-1)||(6-1),(6-1)",
        statement: "IIT Ropar won the match"
      },
      {
        "id": 40,
        "date": "19.12.2023",
        "time": "7:00 PM",
        "pool": "A",
        "ground": "4",
        "home_team": "IIT Jodhpur",
        "away_team": "IIT Hyderabad",
        "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
        "logo_away_team": require('./Assests/IITs/IITH.jpg'),
        subStatement:"(4-6),(6-3),(6-1)||(6-3),(6-2)",
        statement: "IIT Jodhpur won the match"
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
        "logo_home_team": require('./Assests/IITs/IITR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITK.jpg'),
        subStatement:"(6-1),(6-0) || (6-2),(6-0)",
        statement:"IIT Roorkee won the match"
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
        "logo_away_team": require('./Assests/IITs/IITI.jpg'),
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
        "logo_away_team": require('./Assests/IITs/IITP.jpg'),
        subStatement:"(0-6), (3-6)||(6-2), (7-6),(7-3)|| (6-0), (6-0)        ",
        statement: " IIT Delhi won the match"
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
        "logo_away_team": require('./Assests/IITs/IITG.jpg'),
        subStatement:"(6-0),(6-0) || (6-0),(6-0)",
        statement: " IIT Ropar won the match"
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
        "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
        subStatement:"(0-6),(0-6) || (3-6),(6-4),(3-10)",
        statement: " IIT Jodhpur won the match"
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
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        subStatement:"(6-1),(6-0) || (6-1),(6-0)",
        statement: " IIT Madras won the match",
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
        "logo_away_team": require('./Assests/IITs/IITB.jpg'),
        subStatement:"(1-6),(1-6) || (1-6),(3-6)",
        statement: " IIT Bombay won the match"
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
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
        subStatement:"(4-6),(6-7) (4-7)|| (6-2),(4-6) (4-10)",
        statement: " IIT Kharagpur won the match"
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
        "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
        subStatement:"(0-6),(2-6)||(7-5),(4-6),(10-8)||(6-3),(6-0)",
        statement: "IIT Roorkee won the match"
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
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        subStatement:"(0-6),(0-6)||concede by Dhanbad",
        statement: "IIT Mandi won the match"
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
        "logo_away_team": require('./Assests/IITs/IITB.jpg'),
        subStatement:"(4-6),(1-6)||(6-4),(6-4)||(6-2),(6-3)",
        statement: "IIT Delhi won the match"
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
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
        subStatement:"(6-0),(6-0)||(6-0),(6-2)",
        statement: "IIT Ropar won the match"
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
        "logo_away_team": require('./Assests/IITs/IITK.jpg'),
        subStatement:"(1-6),(6-2),(3-6)||(4-6),(5-7)",
        statement: "IIT Kanpur won the match"
      },
      // {
      //   "id": 14,
      //   "date": "16.12.2023",
      //   "time": "10:00 AM",
      //   "pool": "C",
      //   "ground": "3",
      //   "home_team": "IIT Madras",
      //   "away_team": "IIT Indore",
      //   "logo_home_team": require('./Assests/IITs/IITM.jpg'),
      //   "logo_away_team": require('./Assests/IITs/IITI.jpg'),
      //   statement: "Match is yet to happen"
      // },
      {
        "id": 15,
        "date": "16.12.2023",
        "time": "11:00 AM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Bhu",
        "away_team": "IIT Patna",
        "logo_home_team": require('./Assests/IITs/IITBHU.jpg'),
        "logo_away_team": require('./Assests/IITs/IITP.jpg'),
        subStatement:"(1-6),(3-6)||(6-3),(6-4)||(6-0),(6-1)",
        statement: "IIT Varanasi won the match"
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
        "logo_away_team": require('./Assests/IITs/IITG.jpg'),
        subStatement:"(6-2),(6-3)||(6-3),(7-5)",
        statement: "IIT Gandhinagar won the match"
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
        "logo_away_team": require('./Assests/IITs/IITH.jpg'),
        subStatement:"(6-0),(6-0)||(6-1),(6-1)",
        statement: "IIT Roorkee won the match"
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
        "logo_away_team": require('./Assests/IITs/IITM.jpg'),
        // subStatement:"(6-0),(6-0)||(6-0),(6-2)",
        // statement: "IIT Ropar won the match"
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
        "logo_away_team": require('./Assests/IITs/IITBBS.jpg'),
        subStatement:"(6-4),(6-2)||(6-3),(7-6)",
        statement: "IIT Delhi won the match"
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
        "logo_away_team": require('./Assests/IITs/IITGN.jpg'),
        subStatement:"(6-0),(6-2)||(6-0),(6-1)",
        statement: "IIT Ropar won the match"
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
        "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
        subStatement:"(0-6),(0-6)||(0-6),(6-7)",
        statement: "IIT Jodhpur won the match"
      },
      // {
      //   "id": 22,
      //   "date": "17.12.2023",
      //   "time": "10:00 AM",
      //   "pool": "C",
      //   "ground": "3",
      //   "home_team": "IIT Indore",
      //   "away_team": "IIT Mandi",
      //   "logo_home_team": require('./Assests/IITs/IITI.jpg'),
      //   "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
      //   subStatement:"(6-0),(6-0)||(6-0),(6-2)",
      //   statement: "IIT Ropar won the match"
      // },
      {
        "id": 23,
        "date": "17.12.2023",
        "time": "11:00 AM",
        "pool": "B",
        "ground": "2",
        "home_team": "IIT Patna",
        "away_team": "IIT Bombay",
        "logo_home_team": require('./Assests/IITs/IITP.jpg'),
        "logo_away_team": require('./Assests/IITs/IITB.jpg'),
        subStatement:"(2-6),(2-6)||(2-6),(1-6)",
        statement: "IIT Bombay won the match"
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
        "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
        subStatement:"(0-6),(2-6)||(2-6),(1-6)",
        statement: "IIT Kharagpur won the match"
      },
      {
        "id": 25,
        "date": "19.12.2023",
        "time": "5:30 PM",
        "ground": "1",
        "stage": "SF1",
        "home_team": "IIT Ropar",
        "away_team": "IIT Mandi",
        "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
        "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
        subStatement:"(6-3),(6-2)||(6-0),(6-1)",
        statement: "IIT Ropar won the match"
      },
      {
        "id": 26,
        "date": "19.12.2023",
        "time": "5:30 PM",
        "ground": "3",
        "stage": "SF2",
        "home_team": "IIT Delhi",
        "away_team": "IIT Jodhpur",
        "logo_home_team": require('./Assests/IITs/IITD.jpg'),
        "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
        subStatement:"(6-0),(6-1)||(6-0),(6-2)",
        statement: "IIT Delhi won the match"
      },
      {
        "id": 27,
        "date": "19.12.2023",
        "time": "7:00 PM",
        "ground": "2",
        "stage": "SF3",
        "home_team": "IIT Kharagpur",
        "away_team": "IIT Madras",
        "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
        "logo_away_team": require('./Assests/IITs/IITM.jpg'),
        subStatement:"(6-2),(6-1)||(6-1),(6-3)",
        statement: "IIT Kharagpur won the match"
      },
      {
        "id": 28,
        "date": "19.12.2023",
        "time": "7:00 PM",
        "ground": "4",
        "stage": "SF4",
        "home_team": "IIT Bombay",
        "away_team": "IIT Roorkee",
        "logo_home_team": require('./Assests/IITs/IITB.jpg'),
        "logo_away_team": require('./Assests/IITs/IITR.jpg'),
        subStatement:"(0-6),(2-6)||(3-6),(6-3),(10-3)||(6-2),(6-2)",
        statement: "IIT Roorkee won the match"
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
    ],
  "Chess":
  [
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Gandhinagar",
      "away_team": "IIT Madras",
      "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
      "logo_away_team": require('./Assests/IITs/IITM.jpg'),
      home_score:'0',
      away_score:'4',
      statement:"IIT Madras won the match"
    },
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Kharagpur",
      "away_team": "IIT Palakkad",
      "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITPKD.jpg'),
      home_score:'3.5',
      away_score:'1.5',
      statement:"IIT Kharagpur won the match"
    },
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Vranasi",
      "away_team": "IIT Delhi",
      "logo_home_team": require('./Assests/IITs/IITBHU.jpg'),
      "logo_away_team": require('./Assests/IITs/IITD.jpg'),
      home_score:'3',
      away_score:'1',
      statement:"IIT Varanasi won the match"
    },
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Guwahati",
      "away_team": "IIT Ropar",
      "logo_home_team": require('./Assests/IITs/IITG.jpg'),
      "logo_away_team": require('./Assests/IITs/IITRPR.jpg'),
      home_score:'2.5',
      away_score:'1.5',
      statement:"IIT Guwahati won the match"
    },
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Patna",
      "away_team": "IIT Bombay",
      "logo_home_team": require('./Assests/IITs/IITP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITB.jpg'),
      home_score:'0',
      away_score:'4',
      statement:"IIT Bombay won the match"
    },
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Kharagpur",
      "away_team": "IIT Palakkad",
      "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITPKD.jpg'),
      home_score:'3.5',
      away_score:'1.5',
      statement:"IIT Kharagpur won the match"
    },
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Kanpur",
      "away_team": "IIT Roorkee",
      "logo_home_team": require('./Assests/IITs/IITK.jpg'),
      "logo_away_team": require('./Assests/IITs/IITR.jpg'),
      home_score:'3',
      away_score:'1',
      statement:"IIT Kanpur won the match"
    },
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Bhilai",
      "away_team": "IIT Jodhpur",
      "logo_home_team": require('./Assests/IITs/IITBH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
      home_score:'0',
      away_score:'4',
      statement:"IIT Jodhpur won the match"
    },
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Indore",
      "away_team": "IIT Bhubaneshwar",
      "logo_home_team": require('./Assests/IITs/IITI.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBBS.jpg'),
      home_score:'1.5',
      away_score:'2.5',
      statement:"IIT Bhubaneshwar won the match"
    },
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Mandi",
      "away_team": "IIT Hyderabad",
      "logo_home_team": require('./Assests/IITs/IITMD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITH.jpg'),
      home_score:'1',
      away_score:'3',
      statement:"IIT Hyderabad won the match"
    },
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Dharwad",
      "away_team": "IIT Tirupati",
      "logo_home_team": require('./Assests/IITs/IITDH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITT.jpg'),
      home_score:'3',
      away_score:'1',
      statement:"IIT Dharwad won the match"
    },
    {
      "id": 1,
      "date": "15.12.2023",
      "home_team": "IIT Jammu",
      "away_team": "IIT Dhanbad",
      "logo_home_team": require('./Assests/IITs/IITJMU.jpg'),
      "logo_away_team": require('./Assests/IITs/IITISM.jpg'),
      home_score:'0',
      away_score:'4',
      statement:"IIT Dhanbad won the match"
    },
    {
      "id": 1,
      "date": "16.12.2023",
      "home_team": "IIT Madras",
      "away_team": "IIT Dharwad",
      "logo_home_team": require('./Assests/IITs/IITM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITDH.jpg'),
      home_score:'3',
      away_score:'1',
      statement:"IIT Madras won the match"
    },
    {
      "id": 1,
      "date": "16.12.2023",
      "home_team": "IIT Jodhpur",
      "away_team": "IIT Kharapur",
      "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
      "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
      home_score:'2.5',
      away_score:'1.5',
      statement:"IIT Jodhpur won the match"
    },
    {
      "id": 1,
      "date": "16.12.2023",
      "home_team": "IIT Hyderabad",
      "away_team": "IIT Guwahati",
      "logo_home_team": require('./Assests/IITs/IITH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITG.jpg'),
      home_score:'2',
      away_score:'2',
      statement:"Match Tied"
    },
    {
      "id": 1,
      "date": "16.12.2023",
      "home_team": "IIT Bombay",
      "away_team": "IIT Vranasi",
      "logo_home_team": require('./Assests/IITs/IITB.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBHU.jpg'),
      home_score:'3',
      away_score:'1',
      statement:"IIT Bombay won the match"
    },
    {
      "id": 1,
      "date": "16.12.2023",
      "home_team": "IIT Dhanbad",
      "away_team": "IIT Kanpur",
      "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITK.jpg'),
      home_score:'1.5',
      away_score:'2.5',
      statement:"IIT Kanpur won the match"
    },
    {
      "id": 1,
      "date": "16.12.2023",
      "home_team": "IIT Bhubaneshwar",
      "away_team": "IIT Gandhinagar",
      "logo_home_team": require('./Assests/IITs/IITBBS.jpg'),
      "logo_away_team": require('./Assests/IITs/IITGN.jpg'),
      home_score:'1',
      away_score:'3',
      statement:"IIT Gandhinagar won the match"
    },
    {
      "id": 1,
      "date": "16.12.2023",
      "home_team": "IIT Delhi",
      "away_team": "IIT Bhilai",
      "logo_home_team": require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBH.jpg'),
      home_score:'4',
      away_score:'0',
      statement:"IIT Delhi won the match"
    },
    {
      "id": 1,
      "date": "16.12.2023",
      "home_team": "IIT Roorkee",
      "away_team": "IIT Indore",
      "logo_home_team": require('./Assests/IITs/IITR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITI.jpg'),
      home_score:'3',
      away_score:'1',
      statement:"IIT Roorkee won the match"
    },
    {
      "id": 1,
      "date": "16.12.2023",
      "home_team": "IIT Palakaad",
      "away_team": "IIT Mandi",
      "logo_home_team": require('./Assests/IITs/IITPKD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
      home_score:'3',
      away_score:'1',
      statement:"IIT Palakaad won the match"
    },
    {
      "id": 1,
      "date": "16.12.2023",
      "home_team": "IIT Ropar",
      "away_team": "IIT Jammu",
      "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITJMU.jpg'),
      home_score:'2.5',
      away_score:'1.5',
      statement:"IIT Ropar won the match"
    },
    {
      "id": 1,
      "date": "16.12.2023",
      "home_team": "IIT Tirupati",
      "away_team": "IIT Patna",
      "logo_home_team": require('./Assests/IITs/IITT.jpg'),
      "logo_away_team": require('./Assests/IITs/IITP.jpg'),
      home_score:'3',
      away_score:'1',
      statement:"IIT Tirupati won the match"
    },
    {
      "id": 1,
      "date": "17.12.2023",
      "home_team": "IIT Kanpur",
      "away_team": "IIT Madras",
      "logo_home_team": require('./Assests/IITs/IITK.jpg'),
      "logo_away_team": require('./Assests/IITs/IITM.jpg'),
      home_score:'2',
      away_score:'2',
      statement:"Match Tied"
    },
    {
      "id": 1,
      "date": "17.12.2023",
      "home_team": "IIT Jodhpur",
      "away_team": "IIT Bombay",
      "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
      "logo_away_team": require('./Assests/IITs/IITB.jpg'),
      home_score:'2',
      away_score:'2',
      statement:"Match Tied"
    },
    {
      "id": 1,
      "date": "17.12.2023",
      "home_team": "IIT Kharagpur",
      "away_team": "IIT Hyderabad",
      "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITH.jpg'),
      home_score:'4',
      away_score:'0',
      statement:"IIT Kharagpur won the match"
    },
    {
      "id": 1,
      "date": "17.12.2023",
      "home_team": "IIT Guwahati",
      "away_team": "IIT Delhi",
      "logo_home_team": require('./Assests/IITs/IITG.jpg'),
      "logo_away_team": require('./Assests/IITs/IITD.jpg'),
      home_score:'1.5',
      away_score:'2.5',
      statement:"IIT Delhi won the match"
    },
    {
      "id": 1,
      "date": "17.12.2023",
      "home_team": "IIT Dharwad",
      "away_team": "IIT Ropar",
      "logo_home_team": require('./Assests/IITs/IITMD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITRPR.jpg'),
      home_score:'3.5',
      away_score:'0.5',
      statement:"IIT Dharwad won the match"
    },
    {
      "id": 1,
      "date": "17.12.2023",
      "home_team": "IIT BHU",
      "away_team": "IIT Dhanbad",
      "logo_home_team": require('./Assests/IITs/IITBHU.jpg'),
      "logo_away_team": require('./Assests/IITs/IITISM.jpg'),
      home_score:'2.5',
      away_score:'1.5',
      statement:"IIT BHU won the match"
    },
    {
      "id": 1,
      "date": "17.12.2023",
      "home_team": "IIT Bhubaneshwar",
      "away_team": "IIT Palakkad",
      "logo_home_team": require('./Assests/IITs/IITBBS.jpg'),
      "logo_away_team": require('./Assests/IITs/IITPKD.jpg'),
      home_score:'1',
      away_score:'3',
      statement:"IIT Palakkad won the match"
    },
    {
      "id": 1,
      "date": "17.12.2023",
      "home_team": "IIT Indore",
      "away_team": "IIT Tirupati",
      "logo_home_team": require('./Assests/IITs/IITI.jpg'),
      "logo_away_team": require('./Assests/IITs/IITT.jpg'),
      home_score:'2',
      away_score:'2',
      statement:"Match Tied"
    },
    {
      "id": 1,
      "date": "17.12.2023",
      "home_team": "IIT Patna",
      "away_team": "IIT Mandi",
      "logo_home_team": require('./Assests/IITs/IITP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITMD.jpg'),
      home_score:'2',
      away_score:'2',
      statement:"Match Tied"
    },
    {
      "id": 1,
      "date": "17.12.2023",
      "home_team": "IIT Bhilai",
      "away_team": "IIT Jammu",
      "logo_home_team": require('./Assests/IITs/IITBH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITJMU.jpg'),
      home_score:'0.5',
      away_score:'3.5',
      statement:"IIT Jammu won the match"
    },
    {
      "id": 1,
      "date": "18.12.2023",
      "home_team": "IIT Madras",
      "away_team": "IIT Jodhpur",
      "logo_home_team": require('./Assests/IITs/IITM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITJ.jpg'),
      home_score:'3',
      away_score:'1',
      statement:"IIT Madras won the match"
    },
    {
      "id": 1,
      "date": "18.12.2023",
      "home_team": "IIT Bombay",
      "away_team": "IIT Kanpur",
      "logo_home_team": require('./Assests/IITs/IITB.jpg'),
      "logo_away_team": require('./Assests/IITs/IITK.jpg'),
      home_score:'2.5',
      away_score:'1.5',
      statement:"IIT Bombay won the match"
    },
    {
      "id": 1,
      "date": "18.12.2023",
      "home_team": "IIT Roorkee",
      "away_team": "IIT Kharagpur",
      "logo_home_team": require('./Assests/IITs/IITR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITKGP.jpg'),
      home_score:'0.5',
      away_score:'3.5',
      statement:"IIT Kharagpur won the match"
    },
    {
      "id": 1,
      "date": "18.12.2023",
      "home_team": "IIT Delhi",
      "away_team": "IIT Dharwad",
      "logo_home_team": require('./Assests/IITs/IITD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITDH.jpg'),
      home_score:'4',
      away_score:'0',
      statement:"IIT Delhi won the match"
    },
    {
      "id": 1,
      "date": "18.12.2023",
      "home_team": "IIT Palakkad",
      "away_team": "IIT Varanasi",
      "logo_home_team": require('./Assests/IITs/IITPKD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBHU.jpg'),
      home_score:'0',
      away_score:'4',
      statement:"IIT Varanasi won the match"
    },
    {
      "id": 1,
      "date": "18.12.2023",
      "home_team": "IIT Tirupati",
      "away_team": "IIT Guwahati",
      "logo_home_team": require('./Assests/IITs/IITT.jpg'),
      "logo_away_team": require('./Assests/IITs/IITG.jpg'),
      home_score:'0.5',
      away_score:'3.5',
      statement:"IIT Guwahati won the match"
    },
    {
      "id": 1,
      "date": "18.12.2023",
      "home_team": "IIT Hyderabad",
      "away_team": "IIT Dhanbad",
      "logo_home_team": require('./Assests/IITs/IITH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITISM.jpg'),
      home_score:'2.5',
      away_score:'1.5',
      statement:"IIT Hyderabad won the match"
    },
    {
      "id": 1,
      "date": "18.12.2023",
      "home_team": "IIT Jammu",
      "away_team": "IIT Gandhinagar",
      "logo_home_team": require('./Assests/IITs/IITJMU.jpg'),
      "logo_away_team": require('./Assests/IITs/IITGN.jpg'),
      home_score:'2',
      away_score:'2',
      statement:"Match Tied"
    },
    {
      "id": 1,
      "date": "18.12.2023",
      "home_team": "IIT Ropar",
      "away_team": "IIT Bhubaneshwar",
      "logo_home_team": require('./Assests/IITs/IITRPR.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBBS.jpg'),
      home_score:'2',
      away_score:'2',
      statement:"Match Tied"
    },
    {
      "id": 1,
      "date": "18.12.2023",
      "home_team": "IIT Mandi",
      "away_team": "IIT Indore",
      "logo_home_team": require('./Assests/IITs/IITMD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITI.jpg'),
      home_score:'1.5',
      away_score:'2.5',
      statement:"IIT Indore won the match"
    },
    {
      "id": 1,
      "date": "18.12.2023",
      "home_team": "IIT Bhilai",
      "away_team": "IIT Patna",
      "logo_home_team": require('./Assests/IITs/IITBH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITP.jpg'),
      home_score:'1',
      away_score:'3',
      statement:"IIT Patna won the match"
    },
    {
      "id": 1,
      "date": "19.12.2023",
      "home_team": "IIT Bombay",
      "away_team": "IIT Madras",
      "logo_home_team": require('./Assests/IITs/IITB.jpg'),
      "logo_away_team": require('./Assests/IITs/IITM.jpg'),
      home_score:'3',
      away_score:'1',
      statement:"IIT Bombay won the match"
    },
    {
      "id": 1,
      "date": "19.12.2023",
      "home_team": "IIT Kharagpur",
      "away_team": "IIT Delhi",
      "logo_home_team": require('./Assests/IITs/IITKGP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITD.jpg'),
      home_score:'2.5',
      away_score:'1.5',
      statement:"IIT Kharagpur won the match"
    },
    {
      "id": 1,
      "date": "19.12.2023",
      "home_team": "IIT Varanasi",
      "away_team": "IIT Guwahati",
      "logo_home_team": require('./Assests/IITs/IITBHU.jpg'),
      "logo_away_team": require('./Assests/IITs/IITG.jpg'),
      home_score:'2',
      away_score:'2',
      statement:"Match Tied"
    },
    {
      "id": 1,
      "date": "19.12.2023",
      "home_team": "IIT Kanpur",
      "away_team": "IIT Hyderabad",
      "logo_home_team": require('./Assests/IITs/IITK.jpg'),
      "logo_away_team": require('./Assests/IITs/IITH.jpg'),
      home_score:'2.5',
      away_score:'1.5',
      statement:"IIT Kanpur won the match"
    },
    {
      "id": 1,
      "date": "19.12.2023",
      "home_team": "IIT Jodhpur",
      "away_team": "IIT Palakkad",
      "logo_home_team": require('./Assests/IITs/IITJ.jpg'),
      "logo_away_team": require('./Assests/IITs/IITPKD.jpg'),
      home_score:'2',
      away_score:'2',
      statement:"Match Tied"
    },
    {
      "id": 1,
      "date": "19.12.2023",
      "home_team": "IIT Dharwad",
      "away_team": "IIT Roorkee",
      "logo_home_team": require('./Assests/IITs/IITDH.jpg'),
      "logo_away_team": require('./Assests/IITs/IITR.jpg'),
      home_score:'1.5',
      away_score:'2.5',
      statement:"IIT Roorkee won the match"
    },
    {
      "id": 1,
      "date": "19.12.2023",
      "home_team": "IIT Indore",
      "away_team": "IIT Jammu",
      "logo_home_team": require('./Assests/IITs/IITI.jpg'),
      "logo_away_team": require('./Assests/IITs/IITJMU.jpg'),
      home_score:'2',
      away_score:'2',
      statement:"Match Tied"
    },
    {
      "id": 1,
      "date": "19.12.2023",
      "home_team": "IIT Gandhinagar",
      "away_team": "IIT Tirupati",
      "logo_home_team": require('./Assests/IITs/IITGN.jpg'),
      "logo_away_team": require('./Assests/IITs/IITT.jpg'),
      home_score:'4',
      away_score:'0',
      statement:"IIT Gandhinagar won the match"
    },
    {
      "id": 1,
      "date": "19.12.2023",
      "home_team": "IIT Patna",
      "away_team": "IIT Ropar",
      "logo_home_team": require('./Assests/IITs/IITP.jpg'),
      "logo_away_team": require('./Assests/IITs/IITRPR.jpg'),
      home_score:'1',
      away_score:'3',
      statement:"IIT Ropar won the match"
    },
    {
      "id": 1,
      "date": "19.12.2023",
      "home_team": "IIT Dhanbad",
      "away_team": "IIT Bhubaneshwar",
      "logo_home_team": require('./Assests/IITs/IITISM.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBBS.jpg'),
      home_score:'2',
      away_score:'2',
      statement:"Match Tied"
    },
    {
      "id": 1,
      "date": "19.12.2023",
      "home_team": "IIT Mandi",
      "away_team": "IIT Bhilai",
      "logo_home_team": require('./Assests/IITs/IITMD.jpg'),
      "logo_away_team": require('./Assests/IITs/IITBH.jpg'),
      home_score:'1',
      away_score:'3',
      statement:"IIT Bhilai won the match"
    },
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
      jsonFile:Day1Morning1500mMen
    },
    // {
    //   Session: "Morning",
    //   EventNo: "102",
    //   Event: "400M",
    //   Gender: "Men",
    //   Round: "Heats",
    // },
    // {
    //   Session: "Morning",
    //   EventNo: "103",
    //   Event: "400M",
    //   Gender: "Women",
    //   Round: "Heats",
    // },
    {
      Session: "Morning",
      EventNo: "104",
      Event: "110M Hurdles",
      Gender: "Men",
      Round: "Semi Finals",
      jsonFile:Day1MorningHurdlesMen
    },
    {
      Session: "Morning",
      EventNo: "105",
      Event: "Hammer Throw",
      Gender: "Men",
      Round: "Final",
      jsonFile:Day1MorningHammerMen
    },
    {
      Session: "Evening",
      EventNo: "106",
      Event: "400M",
      Gender: "Men",
      Round: "Semi-Final",
      jsonFile:Day1Evening400mMen
    },
    {
      Session: "Evening",
      EventNo: "107",
      Event: "400M",
      Gender: "Women",
      Round: "Semi-Final",
      jsonFile:Day1Evening400mWomen
    },
    {
      Session: "Evening",
      EventNo: "108",
      Event: "Discus Throw",
      Gender: "Women",
      Round: "Final",
      jsonFile:Day1EveningDiscusWomen
    },
  ],
  "16th Dec": [
    // {
    //   Session: "Morning",
    //   EventNo: "201",
    //   Event: "800M",
    //   Gender: "Women",
    //   Round: "Heats",
    // },
    // {
    //   Session: "Morning",
    //   EventNo: "202",
    //   Event: "800M",
    //   Gender: "Men",
    //   Round: "Heats",
    // },
    // {
    //   Session: "Morning",
    //   EventNo: "203",
    //   Event: "100M",
    //   Gender: "Women",
    //   Round: "Heats",
    // },
    // {
    //   Session: "Morning",
    //   EventNo: "204",
    //   Event: "100M",
    //   Gender: "Men",
    //   Round: "Heats",
    // },
    {
      Session: "Morning",
      EventNo: "205",
      Event: "Pole Vault",
      Gender: "Men",
      Round: "Final",
      jsonFile:Day2MorningPoleMen
    },
    {
      Session: "Morning",
      EventNo: "206",
      Event: "Shot Put",
      Gender: "Women",
      Round: "Final",
      jsonFile:Day2MorningShotWomen
    },
    {
      Session: "Evening",
      EventNo: "207",
      Event: "Triple Jump",
      Gender: "Men",
      Round: "Final",
      jsonFile:Day2EveningTripleJumpMenFinal
      
    },
    {
      Session: "Evening",
      EventNo: "208",
      Event: "100M",
      Gender: "Women",
      Round: "Semi-Final",
      jsonFile:Day2Evening100mWomen
    },
    {
      Session: "Evening",
      EventNo: "209",
      Event: "100M",
      Gender: "Men",
      Round: "Semi-Final",
      jsonFile:Day2Evening100mMen
    },
  ],
  "17th Dec": [
    // {
    //   Session: "Morning",
    //   EventNo: "301",
    //   Event: "200M",
    //   Gender: "Men",
    //   Round: "Heats",
    // },
    // {
    //   Session: "Morning",
    //   EventNo: "302",
    //   Event: "200M",
    //   Gender: "Women",
    //   Round: "Heats",
    // },
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
      jsonFile:Day3MorningHighMen
    },
    {
      Session: "Morning",
      EventNo: "305",
      Event: "Long Jump",
      Gender: "Men",
      Round: "Final",
      jsonFile:Day3MorningLongMen
    },
    {
      Session: "Evening",
      EventNo: "306",
      Event: "110M Hurdles",
      Gender: "Men",
      Round: "Final",
      jsonFile:Day3EveningHurdlesMenfrom
    },
    {
      Session: "Evening",
      EventNo: "307",
      Event: "400M",
      Gender: "Women",
      Round: "Final",
      jsonFile:Day3Evening400WFinal
    },
    {
      Session: "Evening",
      EventNo: "308",
      Event: "400M",
      Gender: "Men",
      Round: "Final",
      jsonFile:Day3Evening400MFinal
    },
  ],
  "18th Dec": [
    {
      Session: "Morning",
      EventNo: "401",
      Event: "800M",
      Gender: "Men",
      Round: "Final",
      jsonFile:Day4Morning800mMen
    },
    {
      Session: "Morning",
      EventNo: "402",
      Event: "800M",
      Gender: "Women",
      Round: "Final",
      jsonFile:Day4Morning800mWomen
    },
    {
      Session: "Morning",
      EventNo: "403",
      Event: "100M",
      Gender: "Men",
      Round: "Final",
      jsonFile:Day4Morning100mMen
    },
    {
      Session: "Morning",
      EventNo: "404",
      Event: "100M",
      Gender: "Women",
      Round: "Final",
      jsonFile:Day4Morning100mWomen
    },
    {
      Session: "Evening",
      EventNo: "405",
      Event: "Discus Throw",
      Gender: "Men",
      Round: "Final",
      jsonFile:Day4EveningDiscusMen
    },
    // {
    //   Session: "Evening",
    //   EventNo: "406",
    //   Event: "4x100M",
    //   Gender: "Men",
    //   Round: "Heats",
    // },
    // {
    //   Session: "Evening",
    //   EventNo: "407",
    //   Event: "4x100M",
    //   Gender: "Women",
    //   Round: "Heats",
    // },
  ],
  "19th Dec": [
    {
      Session: "Morning",
      EventNo: "502",
      Event: "High Jump",
      Gender: "Men",
      Round: "Final",
      jsonFile:Day5MorningHighMen
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
      jsonFile:Day5EveningShotMen 
    },
    {
      Session: "Evening",
      EventNo: "506",
      Event: "200M",
      Gender: "Women",
      Round: "Semi-Final",
      jsonFile:Day5Evening200Women 
    },
    {
      Session: "Evening",
      EventNo: "507",
      Event: "200M",
      Gender: "Men",
      Round: "Semi-Final",
      jsonFile:Day5Evening200Men 
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
export default Results
