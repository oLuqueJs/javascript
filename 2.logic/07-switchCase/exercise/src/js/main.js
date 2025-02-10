const h1 = document.querySelector('.container h1');
const nowDate = new Date
let weekDayText
let monthNameText

function getWeekDay(weekDay) {
    switch(weekDay) {
        case 0:
            weekDayText = "Sunday"
            return weekDayText
        case 1:
            weekDayText = "Monday"
            return weekDayText
        case 2:
            weekDayText = "Tuessday"
            return weekDayText
        case 3:
            weekDayText = "Wednesday"
            return weekDayText
        case 4:
            weekDayText = "Thursday"
            return weekDayText
        case 5:
            weekDayText = "Friday"
            return weekDayText
        case 6:
            weekDayText = "Saturday"
            return weekDayText
        default:
            weekDayText = "Not Defined!"
            return weekDayText
    }
}

function getMonthName(monthName) {
    switch(monthName) {
        case 0:
            monthNameText = "January"
            return monthNameText
        case 1:
            weekDayText = "February"
            return weekDayText
        case 2:
            monthNameText = "March"
            return monthNameText
        case 3:
            monthNameText = "April"
            return monthNameText
        case 4:
            monthNameText = "May"
            return monthNameText
        case 5:
            monthNameText = "June"
            return monthNameText
        case 6:
            monthNameText = "July"
            return monthNameText
        case 7:
            monthNameText = "August"
            return monthNameText
        case 8:
            monthNameText = "September"
            return monthNameText
        case 9:
            monthNameText = "October"
            return monthNameText
        case 10:
            monthNameText = "November"
            return monthNameText
        case 11:
            monthNameText = "December"
            return monthNameText
        default:
            monthNameText = "Not Defined!"
            return monthNameText
    }
}

function createDateText(nowDate) {
    const weekDayText = nowDate.getDay()
    const monthNumber = nowDate.getMonth()

    const weekDay = getWeekDay(weekDayText);
    const month = getMonthName(monthNumber);

    return (`${weekDay}, ${nowDate.getDate()}, ${month}, ${nowDate.get}`)
}

h1.innerHTML = createDateText(Date)