import React from 'react';
import './CSS/waterpolo.css';

const Match = ({ match }) => {
  // Determine the winning team
  const homeScore = parseInt(match.home_score);
  const awayScore = parseInt(match.away_score);

  // Define inline styles for font color based on home_score and away_score
  let homeFontColor = homeScore > awayScore ? { color: 'green' } : { color: 'red' };
  let awayFontColor = awayScore > homeScore ? { color: 'green' } : { color: 'red' };

  // Check if home_score and away_score are equal
  if (homeScore === awayScore) {
    // Modify font colors based on home_p and away_p
    homeFontColor = match.home_p > match.away_p ? { color: 'green' } : { color: 'red' };
    awayFontColor = match.away_p > match.home_p ? { color: 'green' } : { color: 'red' };
  }

  return (
    <div className="match">
      <div className="date">
        Match - {match.id} | {match.date}
      </div>
      <div>{match.pool}</div>
      <div className="time">{match.time}</div>
      <hr />
      <div className="teams">
        <div className="team-1">
          <div className="team-logo">
            <img src={match.logo_home_team} className="w-100" alt="LOGO" />
          </div>
          <div className="team-name-1" style={homeFontColor}>{match.home_team}</div>
        </div>
        <span className="vs">VS</span>
        <div className="team-2">
          <div className="team-name-2" style={awayFontColor}>{match.away_team}</div>
          <div className="team-logo">
            <img src={match.logo_away_team} className="w-100" alt="LOGO" />
          </div>
        </div>
      </div>
      <hr />
      <div className="teams">
        <div className="team-1">
          <div className="team-name-1 left">{match.home_score} {match.home_p}</div>
        </div>
        <div className="team-2">
          <div className="team-name-2 right">{match.away_score} {match.away_p}</div>
        </div>
      </div>
    </div>
  );
};

const Water_Polo_Result = ({ matches }) => {


  return (
    <div className="schedule">
      {matches.map((match) => (
        <Match match={match} key={match.id} />
      ))}
    </div>
  );
};

export default Water_Polo_Result;
