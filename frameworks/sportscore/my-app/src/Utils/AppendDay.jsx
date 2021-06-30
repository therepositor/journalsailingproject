
import { DateTime } from 'luxon'


const today = DateTime.now().weekday
const yesterday = DateTime.now().minus({days: 1}).weekday
const twoDaysAgo = DateTime.now().minus({days: 2}).weekday
const tomorrow = DateTime.now().plus({days: 1}).weekday
const dayAfterTomorrow = DateTime.now().plus({days: 2}).weekday

const month = DateTime.now().c.month
const formatMonth = month.toString().length < 2 ? '0'+month : month;

const day = DateTime.now().c.day
const formatDay = day.toString().length < 2 ? '0'+day : day;
console.log({month, formatMonth, day, formatDay})
const fixturesByDate =  `${DateTime.now().c.year}-${formatMonth}-${formatDay}`
    console.log(fixturesByDate)

const AppendToday = () => {

    switch (today) {
        case 7:
            return 'SUN'
        case 1:
            return 'MON'
        case 2:
            return 'TUE'
        case 3:
            return 'WED'
        case 4:
            return 'THUR'
        case 5:
            return 'FRI'
        case 6:
            return 'SAT'
    
        default:
            break;
    }

}
  

const AppendTomorrow = ()  => {
    switch (tomorrow) {
        case 7:
            return 'SUN'
        case 1:
            return 'MON'
        case 2:
            return 'TUE'
        case 3:
            return 'WED'
        case 4:
            return 'THUR'
        case 5:
            return 'FRI'
        case 6:
            return 'SAT'
    
        default:
            break;
    }
} 

const AppendNextTomorrow = ()  => {
    switch (dayAfterTomorrow) {
        case 7:
            return 'SUN'
        case 1:
            return 'MON'
        case 2:
            return 'TUE'
        case 3:
            return 'WED'
        case 4:
            return 'THUR'
        case 5:
            return 'FRI'
        case 6:
            return 'SAT'
    
        default:
            break;
    }
} 

const AppendYesterday = () =>  {
    switch (yesterday) {
        case 7:
            return 'SUN'
        case 1:
            return 'MON'
        case 2:
            return 'TUE'
        case 3:
            return 'WED'
        case 4:
            return 'THUR'
        case 5:
            return 'FRI'
        case 6:
            return 'SAT'
    
        default:
            break;
    }
}   

const AppendTwoDaysAgo = ()  => {
    switch (twoDaysAgo) {
        case 7:
            return 'SUN'
        case 1:
            return 'MON'
        case 2:
            return 'TUE'
        case 3:
            return 'WED'
        case 4:
            return 'THUR'
        case 5:
            return 'FRI'
        case 6:
            return 'SAT'
    
        default:
            break;
    }
}
export { AppendTwoDaysAgo, AppendToday, AppendYesterday, AppendNextTomorrow, AppendTomorrow, fixturesByDate  }  