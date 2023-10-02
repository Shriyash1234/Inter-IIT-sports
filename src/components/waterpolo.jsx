import React, { useState } from 'react';
import './CSS/waterpolo.css'

const Match = ({ match }) => {
    return (
        <div className="match">
            <div className="date">
                Match - {match.id} | {match.date}
            </div>
            <div>
                Pool - {match.pool}
            </div>
            <div className="time">
                {match.time}
            </div>
            <hr />
            <div className="teams">
                <div className="team-1">
                    <div className="team-logo">
                        <img src={match.logo_home_team} className="w-100" alt="LOGO" />
                    </div>
                    <div className="team-name-1">{match.home_team}</div>
                </div>
                <span className="vs">VS</span>
                <div className="team-2">
                    <div className="team-name-2">{match.away_team}</div>
                    <div className="team-logo">
                        <img src={match.logo_away_team} className="w-100" alt="LOGO" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Water_Polo = () => {
    const [matches] = useState([
        {
            id: 1,
            date: 'Oct 4 2023',
            time: 'Morning',
            pool: 'C',
            home_team: 'IIT BOMBAY',
            away_team: 'IIT KANPUR',
            logo_home_team: require('./Assests/IITs/IITB.jpg'),
            logo_away_team: require('./Assests/IITs/IITK.jpg'),
        },
        {
            id: 2,
            date: 'Oct 4 2023',
            time: 'Morning',
            pool: 'D',
            home_team: 'IIT MADRAS',
            away_team: 'IIT GANDHINAGAR',
            logo_home_team: require('./Assests/IITs/IITM.jpg'),
            logo_away_team: require('./Assests/IITs/IITGN.jpg'),
        },
        {
            id: 3,
            date: 'Oct 4 2023',
            time: 'Evening',
            pool: 'A',
            home_team: 'IIT KHARAGPUR',
            away_team: 'IIT DHANBAD',
            logo_home_team: require('./Assests/IITs/IITKGP.jpg'),
            logo_away_team: require('./Assests/IITs/IITDH.jpg'),
        },
        {
            id: 4,
            date: 'Oct 4 2023',
            time: 'Evening',
            pool: 'B',
            home_team: 'IIT DELHI',
            away_team: 'IIT GUWAHATI',
            logo_home_team: require('./Assests/IITs/IITD.jpg'),
            logo_away_team: require('./Assests/IITs/IITG.jpg'),
        },
        {
            id: 5,
            date: 'Oct 5 2023',
            time: 'Morning',
            pool: 'C',
            home_team: 'IIT BOMBAY',
            away_team: 'IIT ROORKEE',
            logo_home_team: require('./Assests/IITs/IITB.jpg'),
            logo_away_team: require('./Assests/IITs/IITR.jpg'),
        },
        {
            id: 6,
            date: 'Oct 5 2023',
            time: 'Morning',
            pool: 'B',
            home_team: 'IIT DELHI',
            away_team: 'IIT BHU',
            logo_home_team: require('./Assests/IITs/IITD.jpg'),
            logo_away_team: require('./Assests/IITs/IITBHU.jpg'),
        },
        {
            id: 7,
            date: 'Oct 5 2023',
            time: 'Evening',
            pool: 'C',
            home_team: 'IIT ROORKEE',
            away_team: 'IIT KANPUR',
            logo_home_team: require('./Assests/IITs/IITR.jpg'),
            logo_away_team: require('./Assests/IITs/IITK.jpg'),
        },
        {
            id: 8,
            date: 'Oct 5 2023',
            time: 'Evening',
            pool: 'B',
            home_team: 'IIT BHU',
            away_team: 'IIT GUWAHATI',
            logo_home_team: require('./Assests/IITs/IITBHU.jpg'),
            logo_away_team: require('./Assests/IITs/IITG.jpg'),
        },
        {
            id: 9,
            date: 'Oct 6 2023',
            time: 'Morning',
            pool: 'Quarter Final',
            home_team: 'Winner of Pool A',
            away_team: 'Runner of Pool C',
            logo_home_team: '',
            logo_away_team: '',
        },
        {
            id: 10,
            date: 'Oct 6 2023',
            time: 'Morning',
            pool: 'Quarter Final',
            home_team: 'Winner of Pool B',
            away_team: 'Runner of Pool D',
            logo_home_team: '',
            logo_away_team: '',
        },
        {
            id: 11,
            date: 'Oct 6 2023',
            time: 'Evening',
            pool: 'Semi Final',
            home_team: 'Runner of Pool A',
            away_team: 'Winner of Pool C',
            logo_home_team: '',
            logo_away_team: '',
        },
        {
            id: 12,
            date: 'Oct 6 2023',
            time: 'Evening',
            pool: 'Semi Final',
            home_team: 'Runner of Pool B',
            away_team: 'Winner of Pool D',
            logo_home_team: '',
            logo_away_team: '',
        },
        {
            id: 13,
            date: 'Oct 7 2023',
            time: 'Morning',
            pool: 'Final',
            home_team: 'SF 1',
            away_team: 'SF 4',
            logo_home_team: '',
            logo_away_team: '',
        },
        {
            id: 14,
            date: 'Oct 7 2023',
            time: 'Evening',
            pool: 'Final',
            home_team: 'SF 2',
            away_team: 'SF 3',
            logo_home_team: '',
            logo_away_team: '',
        },
        {
            id: 15,
            date: 'Oct 8 2023',
            time: 'Evening',
            pool: '3rd Place',
            home_team: 'Loser of F1',
            away_team: 'Loser of F2',
            logo_home_team: '',
            logo_away_team: '',
        },
        {
            id: 16,
            date: 'Oct 8 2023',
            time: 'Evening',
            pool: 'Final',
            home_team: 'Winner of F1',
            away_team: 'Winner of F2',
            logo_home_team: '',
            logo_away_team: '',
        },
    ]);

    return (
        <div className="schedule">
            {matches.map((match) => (
                <Match match={match} key={match.id} />
            ))}
        </div>
    );
};

export default Water_Polo;
