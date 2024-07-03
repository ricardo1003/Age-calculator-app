const presentDay = (new Date()).getDay()
const presentMonth = (new Date()).getMonth()+1
const presentYear = (new Date()).getFullYear()

let calculatedYears
let calculatedMonths
let calculatedDays

function calculateAge(day, month, year){
    let years = presentYear - year
    let months = presentMonth - month
    let days =  presentDay - day

    if(days < 0){
        months--
        days = new Date(presentYear, presentMonth - 1, 0).getDate() + days
    }
    if(months < 0){
        years--
        months = 12 + months 
    }

    calculatedDays = days
    calculatedMonths = months
    calculatedYears = years
}

calculateAge(11,5,2008)

console.log(`${calculatedYears} years, ${calculatedMonths} months, ${calculatedDays} days.`)

