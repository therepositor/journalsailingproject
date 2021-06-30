import React from 'react'
import Schedule from './Schedule'
import CompetitionHeader from './CompetitionHeader'
import { fixturesByDate } from '../Utils/AppendDay'



const Home = () => {
    const [fixtures, setFixtures] = React.useState([])

    
    React.useEffect(() => {

        const fetchFixturesByDate = async () => {
            const resp = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${fixturesByDate}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "417fbcfbbfmsh1a4fc29dfadaa6dp16235bjsn290cb241d7cc",
                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
                }
            })
            // .catch(err => {
            //     console.error(err);
            // });
            const data = await resp.json()
           data?.response && setFixtures(data.response)
            // console.log(data.response)
        }
        fetchFixturesByDate()
            
          
    }, [])

    return (
            <div className = 'container'>
                <Schedule fixtures={fixtures} />
                <CompetitionHeader fixtures={fixtures} />
                
             
            </div>
    )
}

export default Home