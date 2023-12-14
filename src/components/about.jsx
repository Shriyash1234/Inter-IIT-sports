import React, { useState } from 'react';
import './CSS/about.css';

const About = () => {
  const [showAllParagraphs, setShowAllParagraphs] = useState(false);

  const paragraphs = [
    "Started in 1961, the Inter IIT Sports Meet has an illustrious legacy as the longest-running inter-collegiate sports event, showcasing the prowess of India's top engineering institutions. With unwavering dedication and a commitment to excellence, this event brings together over 4,000 talented athletes from all 23 IITs, competing in 13 diverse sports, all vying for the coveted General Championship Trophy.",

    "The Inter IIT Sports Meet is an eagerly anticipated annual sports tournament of the Indian Institutes of Technology. Typically organized in December, the Aquatics events are held separately in October, making it a highlight on the academic calendar. The event's rich history dates back to 1961, making it the longest-running inter-collegiate meet where all IITs actively participate.",

    // "In the year 2023, the prestigious event is jointly hosted by IIT Bombay and IIT Gandhinagar. Notably, IIT Gandhinagar has earned the distinction of being the first new-generation IIT to host this monumental event. The collaboration between these esteemed institutions adds a new dimension to the legacy of the Inter IIT Sports Meet.",

    // "IIT Gandhinagar and IIT Bombay unite to present the 56th Inter IIT Sports Meet, a grand event planned between 01-15 December 2023 at IIT Bombay and 15-30 December at IIT Gandhinagar. This year marks a significant milestone, with IIT Gandhinagar being the first 2nd-generation IIT to host this prestigious event, underscoring its growth and prominence.",

    // "The Inter IIT Sports Meet serves as a stage to celebrate excellence in sportsmanship and camaraderie. The event gathers students from various IITs, providing a platform to showcase their athletic abilities and teamwork. Beyond the spirit of competition, it embodies the essence of collaboration, determination, and passion for sports.",

    // "As the excitement builds, we invite you to stay tuned for updates and immerse yourself in the magic of sportsmanship and camaraderie at the Inter IIT Sports Meet. Be part of this grand celebration where talent, dedication, and the love for sports converge to create unforgettable moments.",

    // "In conclusion, the Inter IIT Sports Meet stands as a testament to the spirit of sports and the unity among IITs. With each passing year, it continues to evolve, leaving an indelible mark on the sports landscape, fostering friendships, and inspiring a new generation of athletes to push their boundaries in the pursuit of excellence."
  ];


  return (
    <div className="about-container">
      <div className="left-section">
        {/* <h1>About the Games</h1> */}
        <h1 className='about-the-games'>ABOUT THE <br className='hide-br' />GAMES</h1>
        <img src={require('./Assests/Inter-IIT-logo-old.jpg')} className='inter-iit-logo' />
      </div>
      <div className="right-section">
        {/* <h3>The Vision of 56th Inter IIT Sports Meet IIT Bombay, IIT Gandhinagar</h3> */}
        {/* <h3>The Vision of 56th Inter IIT Sports Meet IIT Bombay,&nbsp;IIT Gandhinagar</h3> */}
        <h3 className='sub-heading'>The Vision of 56th Inter IIT Sports Meet <span className="iit-names">IIT Bombay, IIT Gandhinagar</span></h3>


        {paragraphs.slice(0, 4).map((paragraph, index) => (
          <p className="about-paragraph" key={index}>{paragraph}</p>
        ))}
        {/* {!showAllParagraphs && paragraphs.length > 4 && (
          <button className="button-plus" onClick={() => setShowAllParagraphs(true)}>+</button>
        )}
        {showAllParagraphs &&
          paragraphs.slice(4).map((paragraph, index) => (
            <p className="about-paragraph" key={index + 4}>{paragraph}</p>
          ))} */}
      </div>
    </div>
  );
};

export default About;