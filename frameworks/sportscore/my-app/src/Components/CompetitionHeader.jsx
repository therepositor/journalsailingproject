import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {AppendToday} from '../Utils/AppendDay'
import { Link } from 'react-router-dom'

const CompetitionHeader = ({fixtures}) => {
    const [allLeagues, SetAllLeagues] = React.useState([])
    console.log({fixtures})
    const setIdResponse = new Set()
    for (let i = 0; i < fixtures.length; i++)   {
        const element = fixtures[i].league.id
        console.log(element)
        setIdResponse.add(element)
    }
    console.log(setIdResponse)
    // console.log(setIdResponse.size)

    // const uniqueIds = Array.from(setIdResponse)
    // console.log(uniqueIds);
    // const sortedLeagues = [];
    // for (let i=0; i < uniqueIds.length; i++) {
    //     const id = uniqueIds[i];
    //     const leagueObj = {leagueName:  fixtures[i].league.name,
    //                         leagueFlag: fixtures[i].league.flag,
    //                         leagueRound:    fixtures[i].league.round,
    //                         leagueCountry:  fixtures[i].league.country,
    //                         matches: [fixtures[i].teams]
    //                         }
    //     const arrOfObj = fixtures.filter(fixture => {
    //         if (fixture.fixture.league.id !== id)   return
    //         return fixture.league.matches;
    //     });
    //     leagueObj.matches = arrOfObj
    //     sortedLeagues.push(leagueObj)
        
    // }
    // SetAllLeagues(sortedLeagues)
    
    const Content = () => fixtures?.length && fixtures.map((fixture, index) => {
        // console.log({fixture})
        // const getHour = fixture.fixture.date
        // const getUtcHours = getHour.getUTCHours()
        //     console.log(getHour)
        //     const date = new Date()
        //     console.log(date)
        //     console.log(date.getUTCHours())
        //     console.log(date.getUTCMinutes())
       
        return (
            <div key={index} className='fixtures_container'>
                <div  className='comp_header'>
                    <div className='img_container'>
                        <img 
                         className='competition_logo'
                         src={fixture.league.flag}
                         alt={fixture.league.flag}
                         width='20' height='15'
                        />
                    </div> 
                    <Link  className='competition_name' >{fixture.league.country}</Link>
                    <Link className='league_group'>{fixture.league.name} - {fixture.league.round}</Link>
                    <span className = 'date'>{AppendToday()}</span>
                </div>
                
                    
                <div className='fixtures'>
                    <div className='live_match' style={{backgroundColor: fixture.fixture.status.elapsed 
                                                        && fixture.fixture.status.long !== 'Match Finished' 
                                                        ? 'orange' : 'black'}}></div>
                    <div className='timestamp'>{fixture.fixture.status.long === 'Not Started' ? ''
                                                :fixture.fixture.status.long === 'Time to be defined' ? ''
                                                :fixture.fixture.status.long === 'Match Postponed' ? 'postp'
                                                :fixture.fixture.status.long === 'Match Finished' ? 'FT'
                                                : `${fixture.fixture.status.elapsed}'`}
                    </div>
                    <div className = 'teamOne_teamTwo_scoreSheet'> 
                        <div className = 'teams'>
                            <div className = 'team'>{fixture.teams.home.name}</div>
                            <div className = 'score'>{fixture.fixture.status.long === 'Not Started' ? '?'
                                                      : fixture.fixture.status.long === 'Match Finished' ? fixture.goals.home
                                                      : fixture.fixture.status.elapsed ? fixture.goals.home
                                                      : '?'}
                            </div>
                        </div>
                        <div className = 'teams'>
                            <div className = 'team'>{fixture.teams.away.name}</div>
                            <div className = 'score'>{fixture.fixture.status.long === 'Not Started' ? '?'
                                                      : fixture.fixture.status.long === 'Match Finished' ? fixture.goals.away
                                                      : fixture.fixture.status.elapsed ? fixture.goals.away
                                                      : '?'}
                            </div>
                        </div>
                    </div>
                    <div className = 'star'>
                          <FontAwesomeIcon icon = {faStar} />
                    </div>
                </div>

            </div>
        )
    })
    


    if (!fixtures.length) return <div>No events available right now</div>;
    return <Content />
}

export default CompetitionHeader