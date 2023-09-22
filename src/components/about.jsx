import React, { useState } from 'react';
import './CSS/about.css';

const About = () => {
  const [showAllParagraphs, setShowAllParagraphs] = useState(false);

  const paragraphs = [
    "Paris 2024 will see a new vision of Olympism in action, delivered in a unique spirit of international celebration.",
    "We will offer one of the world's most inspirational cities as a memorable stage for the athletes  and a truly global platform to promote them, and their incredible stories.",
    "And we will partner with the entire Olympic family to demonstrate that, more than ever after an extremely challenging period, sport has a unique power to help create a better world.",
    "Our plan features 95 percent existing or temporary venues, and every single one has a clear, defined legacy aligned with the city;s long-term development plans.",
    "The sporting celebration will flow along the Seine, from the new Olympic Village, just 15 minutes from Paris city centre, to such city centre landmarks as the Eiffel Tower and the Grand Palais.",
    "Paris has welcomed people from all over the world including the founding fathers of the Olympic Movement  for hundreds of years, to collaborate and inspire each other; to shape ideas and forge the future.",
    "In 2024, we will stage magnificent and meaningful Games that will set a new milestone in sporting history, in the city where Pierre de Coubertin first imagined the potential of a world united by sport."
  ];

  return (
    <div className="about-container">
      <div className="left-section">
        {/* <h1>About the Games</h1> */}
        <h1 className='about-the-games'>ABOUT THE <br className='hide-br'/>GAMES</h1>
        <img src={require('./Assests/Inter-IIT-logo.jpg')} className='inter-iit-logo'/>
      </div>
      <div className="right-section">
        {/* <h3>The Vision of 56th Inter IIT Sports Meet IIT Bombay, IIT Gandhinagar</h3> */}
        {/* <h3>The Vision of 56th Inter IIT Sports Meet IIT Bombay,&nbsp;IIT Gandhinagar</h3> */}
        <h3 className='sub-heading'>The Vision of 56th Inter IIT Sports Meet <span className="iit-names">IIT Bombay, IIT Gandhinagar</span></h3>


        {paragraphs.slice(0, 5).map((paragraph, index) => (
          <p className="about-paragraph" key={index}>{paragraph}</p>
        ))}
        {!showAllParagraphs && paragraphs.length > 5 && (
          <button className="button-plus" onClick={() => setShowAllParagraphs(true)}>+</button>
        )}
        {showAllParagraphs &&
          paragraphs.slice(5).map((paragraph, index) => (
            <p className="about-paragraph" key={index + 5}>{paragraph}</p>
          ))}
      </div>
    </div>
  );
};

export default About;