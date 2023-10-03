import React from 'react'
import './CSS/cards.css'
const Cards = () => {
  return (
    <section className='cards'>
      <div class="container cardsX">
        <section class="mt-5">
            <h2 class="left-aligned-header mb-4">Inter IIT featured Events</h2>
            <div class="row">
                
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img class="card-img-top" src={require('./Assests/Cards/aquatics.jpg')} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title dates">37th Inter IIT Aquatics meet</h5>
                            <p class="card-text-date"> <span>4 - 8 October</span> </p>
                            {/* <a href="#" class="btn btn-primary">Games information</a> */}
                        </div>
                    </div>
                </div>

                
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img class="card-img-top" src={require('./Assests/Cards/sports-meet.jpg')} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title dates">56th Inter IIT Sports Meet</h5>
                            <p class="card-text-date"><span>14 - 22 December</span> </p>
                        </div>
                    </div>
                </div>

                
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img class="card-img-top" src={require('./Assests/Cards/staff.jpg')} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title dates ">28th Inter IIT Staff Meet</h5>
                            <p class="card-text-date"><span>23 - 31 December</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </section>
  )
}

export default Cards
