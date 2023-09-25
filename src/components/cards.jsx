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
                        <img class="card-img-top" src={require('./Assests/event1.webp')} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title dates">4 - 8 October</h5>
                            <p class="card-text"> <span> aquatics meet</span> </p>
                            <a href="#" class="btn btn-primary">Games information</a>
                        </div>
                    </div>
                </div>

                
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img class="card-img-top" src={require('./Assests/event1.webp')} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title dates">14 - 20 December</h5>
                            <p class="card-text"><span> aquatics meet</span> </p>
                            <a href="#" class="btn btn-primary">Games information</a>
                        </div>
                    </div>
                </div>

                
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img class="card-img-top" src={require('./Assests/event1.webp')} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title dates ">23 - 31 December</h5>
                            <p class="card-text"><span> aquatics meet</span></p>
                            <a href="#" class="btn btn-primary">Games information</a>
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
