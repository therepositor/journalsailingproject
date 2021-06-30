import { Link } from "react-router-dom"
import React from 'react';
import { DateTime } from 'luxon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { AppendTwoDaysAgo,
            AppendToday,
            AppendYesterday,
            AppendNextTomorrow, 
            AppendTomorrow } from '../Utils/AppendDay.jsx'


const Schedule = () => {
    const [dayPicker, setDayPicker] = React.useState(false)

    const handleDisplayDayPicker = () => {
        setDayPicker(!dayPicker)
    }

    
    const day = DateTime.now().weekday
    const yesterday = DateTime.now().minus({days: 1}).weekday
    const twodaysAgo = DateTime.now().minus({days: 2}).weekday
    

    return (

        <div className = 'schedule'>
            <nav>
                <ul>
                    <li>
                        <Link to = '/'>
                            <span style = {{ background: 'grey', padding: '0.2rem', color: 'black', borderRadius: '4px'}}>LIVE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = '/'>
                            <span>{AppendTwoDaysAgo()}</span>
                            <span>{`${DateTime.now().minus({days: 2}).c.day}/${DateTime.now().c.month}`} </span>
                        </Link>
                    </li>
                    <li>
                        <Link to = '/'>
                            <span>{AppendYesterday()}</span>
                            <span>{`${DateTime.now().minus({days: 1}).c.day}/${DateTime.now().c.month}`}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = '/'>
                            <span>{AppendToday()}</span>
                            <span>{`${DateTime.now().c.day}/${DateTime.now().c.month}`}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = '/'>
                            <span>{AppendTomorrow()}</span>
                            <span>{`${DateTime.now().plus({days: 1}).c.day}/${DateTime.now().c.month}`}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = '/'>
                            <span>{AppendNextTomorrow()}</span>
                            <span>{`${DateTime.now().plus({days: 2}).c.day}/${DateTime.now().c.month}`}</span>
                        </Link>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon onClick = {handleDisplayDayPicker} icon = {faCalendarAlt} />
                        </span>
                    </li>
                </ul>
                {dayPicker ? <DayPicker /> : '' }
            </nav>
        </div>
    )
}

export default Schedule