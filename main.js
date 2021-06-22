// research: check current day of week
// assign inputs to variables:  current day, username, hrs worked, if tomorrow holiday
// check if current day is particular day of week.  if so, output greeting for that day, if/else if/else
// assign day's greeting to message variable
// let greeting; if day = Monday {"case of mondays", etc.}, else if, etc.
// to Thursday condition, add new condition checking if next day holiday.  If so, add new message
// else if (thurs) {greeting = "Thursday, yo!" if (tomorrow=holiday) {"long wknd, etc."}}
// check for near overtime (sep & later if statement) if hrs > 35 {greeting += `blabla #{overtime} blah`}
// html via document.write()

let thisDate = new Date();
let weekDay = thisDate.getDay();

let options = { weekday: 'long'};
let currentDay = new Intl.DateTimeFormat('en-US', options).format(thisDate);

let userName = prompt("Please enter your username.")
let hrsWrkd = prompt("Give number of hours worked.")
let fridayIsHoliday = false
let otDangerZone = 35

let greeting = `<h1>Greetings, ${userName}!  Happy ${currentDay}!</h1>`
 
if (weekDay === 1) {
    greeting += `<h2>Another thrilling 40 hours of slaving for your Archnemesis begins!</h2>`
}
else if (weekDay === 2) {
    greeting += `<h2>Go easy on those tacos there, Chico!</h2>`
}
else if (weekDay === 3) {
    greeting += `<h2>Less than halfway done!</h2>`
}
else if (weekDay === 4) {
    greeting += `<h2>Remember to keep Thor in Thursday!  Don't get hammered!</h2>`
    if (fridayIsHoliday) {
        greeting += `Tomorrow's a holiday.  Enjoy the long weekend.`
    }
}
else if (weekday === 5) {
    greeting += `<h2>That's all you got done?!  Hope your next week is more productive!</h2>`
}
else {
    greeting += `<h2>It's the weekend!  Go home!</h2>`
} 

document.write(greeting)

if (hrsWrkd > otDangerZone) {
    document.write(`Beware!  You have already worked ${hrsWrkd} hours this week!  You may work no more than 40 hrs.`)
}