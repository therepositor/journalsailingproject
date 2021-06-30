import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faBars, faStar, faDiceSix, faEllipsisH, faFutbol } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'


const Header = () => {


    return  (
        <header>
            <nav>
                <ul>
                    <li style = {{ background: 'orange'}}>
                        <Link to = '/'>
                            <span style = {{  background: 'orange', color: 'black', fontSize: '2rem', fontFamily: "'Noto Sans JP', sans-serif"}}>LS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = '/scores'>
                            <FontAwesomeIcon icon = {faFutbol} style = {{fontSize: '2rem',}} />
                            <span>Score</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = '/favourites'>
                            <FontAwesomeIcon icon = {faStar} style = {{fontSize: '2rem'}} />
                            <span>Favourites</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to = '/news'>
                            <FontAwesomeIcon icon = {faNewspaper} style = {{fontSize: '2rem'}} />
                            <span>News</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = '/ls_bet'>
                            <FontAwesomeIcon icon = {faDiceSix} style = {{fontSize: '2rem'}} />
                            <span>LS Bet</span> 
                        </Link>
                    </li>
                    <li>
                        <Link to = '/menu'>
                            <FontAwesomeIcon icon = {faBars} style = {{fontSize: '2rem'}} />
                            <span>Menu</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = '/more'>
                            <FontAwesomeIcon icon = {faEllipsisH} style = {{fontSize: '2rem'}} />
                            <span>More</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header