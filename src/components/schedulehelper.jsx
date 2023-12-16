import React from 'react';
import './CSS/waterpolo.css'

const Match = props => {
    const { match, date } = props;

    return (
        <div className="match">
            <div className='match-details'>
                <div>
                    <p className='date' style={{ marginBottom: "0px" }}>Match - {match.id}</p>
                    {match.pool ? <p>Pool - {match.pool}</p> : ""}
                </div>
                <div className="time">
                    Time - {match.time}<br />
                    Ground/Court - {match.ground}
                </div>
            </div>
            <hr />
            <div className="teams">
                <div className="team-1">
                    <div className="team-logo">
                        {
                            match.logo_home_team ? <img src={match.logo_home_team} className="logo-img" alt="LOGO" /> : ""
                        }
                    </div>
                    <div className="team-name-1">{match.home_team}</div>
                </div>
                <span className="vs">VS</span>
                <div className="team-2">
                    <div className="team-name-2">{match.away_team}</div>
                    <div className="team-logo">
                        {
                            match.logo_away_team ? <img src={match.logo_away_team} className="logo-img" alt="LOGO" /> : ""
                        }

                    </div>
                </div>

            </div>
            {
                match.home_score ? (
                    <div>
                        <hr />
                        <div className="teams">
                            <div className="team-1" style={{ width: "30%" }}>
                                <div className="team-name-1 left" >{match.home_score} {match.home_p}</div>
                            </div>
                            {match.statement ? <div className='match-statement'>{match.statement}</div> : ""}
                            <div className="team-2" style={{ width: "30%" }}>
                                <div className="team-name-2 right">{match.away_score} {match.away_p}</div>
                            </div>
                        </div>
                    </div>
                ) :
                <>
                {match.subStatement ? <div className='match-statement' style={{ margin:"auto",textAlign:"center" }}>{match.subStatement}</div> : ""}
                {match.statement ? <div className='match-statement' style={{ margin:"auto",textAlign:"center" }}>{match.statement}</div> : ""}
                </>
            }

        </div>
    );
};

const scheduleHelper = ({ matches, date }) => {
    const convertDateFormat = (date) => {
        let [day, month] = date.split(' ');
        day = day.slice(0, 2)
        return `${day}.12.2023`;
    };
    const convertedDate = convertDateFormat(date);
    const filteredMatches = matches.filter((match) => match.date === convertedDate);
    return (
        <div className="schedule">
            {filteredMatches.length === 0 ? (
                <p className='no-matches-block'>No Matches</p>
            ) : (
                <div>
                    {filteredMatches.map((match) => (
                        <Match match={match} key={match.id} />
                    ))}
                </div>
            )}

        </div>
    );
};

export default scheduleHelper;
