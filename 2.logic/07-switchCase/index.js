const date = new Date()
const weekDay = date.getDay()
let weekDayText

// Basic Switch 
switch (weekDay){
    case 0:
        weekDayText = 'Sunday';
        break;
    case 1:
        weekDayText = 'Monday';
        break;
    case 2:
        weekDayText = 'Tuesday';
        break;
    case 3:
        weekDayText = 'Wednesday';
        break;
    case 4:
        weekDayText = 'Thursday';
        break;
    case 5:
        weekDayText = 'Friday';
        break;
    case 6:
        weekDayText = 'Saturday';
        break;
    default:
        weekDayText = '';
        break;
}   

// Switch in a Function
function getDayText(weekDay) {
    let weekDayText
    
    switch (weekDay){
        case 0:
            return weekDayText = 'Sunday';
        case 1:
            return weekDayText = 'Monday';
        case 2:
            return weekDayText = 'Tuesday';
        case 3:
            return weekDayText = 'Wednesday';
        case 4:
            return weekDayText = 'Thursday';
        case 5:
            return weekDayText = 'Friday';
        case 6:
            return weekDayText = 'Saturday';
        default:
            return weekDayText = '';
    }
}