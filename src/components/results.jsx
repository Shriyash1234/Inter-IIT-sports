import React, { useEffect, useState } from 'react'
import Header from './header'
import {ChevronDown } from 'lucide-react'
import JsonToTable from './jsontotable'
import tableData from './Assests/Data/Inter-IIT-table.json'
import data from './Assests/Data/Results/400m.json'

import './CSS/results.css'
const Results = () => {
  const [isVisible, setIsVisible] = useState(Array(10).fill(false));
  
  useEffect(() => {
    const elementHeight = document.getElementById('result-table').offsetHeight;
    document.getElementsByClassName('result-divs')[0].style.marginTop = elementHeight * 1.1 + 'px';
    console.log(elementHeight);
  }, []);

  // function tableOffset(){
    
  // }
  // tableOffset();
  // useEffect(()=>{
  //   tableOffset();
  // },[])
  const toggleVisibility = (index) => {
    const newVisibility = isVisible.map((value, i) => (i === index ? !value : false));
    setIsVisible(newVisibility);
    const eventDivs = document.getElementsByClassName("results-event-div");
    const targetDiv = eventDivs[index];

    const element = document.getElementById("normal-table");
    const elementHeight = element.offsetHeight;

    console.log('height',elementHeight)
    if (newVisibility[index]) {
      for (let i = index; i < eventDivs.length; i++) {
        eventDivs[i].style.transform = `translateY(${ elementHeight*1.1}px)`;
      }
      targetDiv.style.transform = "translateY(0)";
    } else {
      for (let i = index; i < eventDivs.length; i++) {
        eventDivs[i].style.transform = "translateY(0)";
      }
    }
  };
  
  return (
    <section className='Results'>
      <Header color="black"/>
      <div className='Results-div'>
        <p className='results-heading'>Overall Results</p>
        <JsonToTable jsonData={tableData} table="resultTable"/>

        <div className='event-divs result-divs'>
        <p className='results-heading'>Results</p>
            <div className='event-div results-event-div' id = "0" onClick={() => toggleVisibility(0)}> 
              <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
              <p className='event-timing'>Men</p>
              <p className='event-timing'>400M Freestyle</p>
              <ChevronDown className='dropdown'/>
              <JsonToTable jsonData={data} visiblity={isVisible[0]? "visible":"not-visible"} />
            </div>
            <div className='event-div results-event-div' id="1" onClick={() => toggleVisibility(1)}>
              <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
              <p className='event-timing'>Men</p>
              <p className='event-timing'>400M Freestyle</p>
              <ChevronDown className='dropdown'/>
              <JsonToTable jsonData={data} visiblity={isVisible[1]? "visible":"not-visible"} />
            </div>
            <div className='event-div results-event-div' id="2" onClick={() => toggleVisibility(2)}>
              <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
              <p className='event-timing'>Men</p>
              <p className='event-timing'>400M Freestyle</p>
              <ChevronDown className='dropdown'/>
              <JsonToTable jsonData={data} visiblity={isVisible[2]? "visible":"not-visible"} />
            </div>
            <div className='event-div results-event-div' id="3" onClick={() => toggleVisibility(3)}>
              <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
              <p className='event-timing'>Men</p>
              <p className='event-timing'>400M Freestyle</p>
              <ChevronDown className='dropdown'/>
              <JsonToTable jsonData={data} visiblity={isVisible[3]? "visible":"not-visible"} />
            </div>
            <div className='event-div results-event-div' id="4" onClick={() => toggleVisibility(4)}>
              <img src={require('./Assests/icons/freesyle.png')} className='event-icon'></img>
              <p className='event-timing'>Men</p>
              <p className='event-timing'>Water Polo</p>
              <p className='event-timing league-matches'>
                <img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" />(C1) BOMBAY vs&nbsp;&nbsp;
                <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />(C2) KANPUR
              </p>
              <ChevronDown className='dropdown'/>
              <div className='event-div versus-div'>
                BOMBAY&nbsp;&nbsp;<img src={require('./Assests/IITs/IITB.jpg')} className="IIT-icon" /><p className='scores'>5 : 13</p>  &nbsp;&nbsp;
                <img src={require('./Assests/IITs/IITK.jpg')} className="IIT-icon" />KANPUR
              </div>
            </div>
          {/* <div className='event-div results-event-div'>

          </div>
          <div className='event-div results-event-div'>

          </div>
          <div className='event-div results-event-div'>

          </div>
          <div className='event-div results-event-div'>

          </div> */}
        </div>      
      </div>
    </section>
  )
}

export default Results
