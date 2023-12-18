import React from 'react'
import afton from "./Assests/Sponsers/afton.svg"
import EMT from "./Assests/Sponsers/EMT.svg"
const Sponsers = () => {
  return (
    <section className='Sponsers'>
      <p className='Latest-stories'>Our Partners</p>
      <div className='Sponsers-div laptop-view'>
        <div className='Sponser'>
            <img src={require("./Assests/Sponsers/GT.png")} className='sponsers-img'></img>
            <p className='Partner-type'>TOURISM PARTNER</p>
        </div>
        <div className='Sponser'>
            <img src={require("./Assests/Sponsers/Hyperice.png")} className='sponsers-img'></img>
            <p className='Partner-type'>RECOVERY PARTNER</p>
        </div>
        <div className='Sponser'>
            <img src={require("./Assests/Sponsers/MIRAE.png")} className='sponsers-img'></img>
            <p className='Partner-type'>WEALTH MANAGEMENT PARTNER</p>
        </div>
      </div>
      <div className='Sponsers-div laptop-view'>
        <div className='Sponser'>
            <img src={EMT} className='sponsers-img'></img>
            <p className='Partner-type'>TRAVEL PARTNER</p>
        </div>
        <div className='Sponser'>
            <img src={require("./Assests/Sponsers/Hitbullseye.png")} className='sponsers-img'></img>
            <p className='Partner-type'>E-LEARNING PARTNER</p>
        </div>
        <div className='Sponser'>
            <img src={afton} className='sponsers-img'></img>
            <p className='Partner-type'>FITNESS PARTNER</p>
        </div>
      </div>

      <div className='Sponsers-div mobile-view'>
      <div className='Sponser'>
            <img src={require("./Assests/Sponsers/GT.png")} className='sponsers-img'></img>
            <p className='Partner-type'>TOURISM PARTNER</p>
        </div>
        <div className='Sponser'>
            <img src={require("./Assests/Sponsers/Hyperice.png")} className='sponsers-img'></img>
            <p className='Partner-type'>RECOVERY PARTNER</p>
        </div>
        <div className='Sponser'>
            <img src={require("./Assests/Sponsers/MIRAE.png")} className='sponsers-img'></img>
            <p className='Partner-type' style={{textAlign:"center"}}>WEALTH MANAGEMENT<br/> PARTNER</p>
        </div>
        <div className='Sponser'>
            <img src={EMT} className='sponsers-img'></img>
            <p className='Partner-type'>TRAVEL PARTNER</p>
        </div>
        <div className='Sponser'>
            <img src={require("./Assests/Sponsers/Hitbullseye.png")} className='sponsers-img'></img>
            <p className='Partner-type'>E-LEARNING PARTNER</p>
        </div>
        <div className='Sponser'>
            <img src={afton} className='sponsers-img'></img>
            <p className='Partner-type'>FITNESS PARTNER</p>
        </div>
      </div>
    </section>
  )
}

export default Sponsers
