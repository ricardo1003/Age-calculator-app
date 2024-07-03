const form = document.getElementsByTagName("form")[0]
const dayInput = form[0]
const monthInput = form[1]
const yearInput = form[2]
const button = form[3]

const yearOutput = document.getElementsByClassName("result")[0]
const monthOutput = document.getElementsByClassName("result")[1]
const dayOutput = document.getElementsByClassName("result")[2]


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

button.addEventListener("click", ()=>{
    let success = false
    for(let i=0; i< form.length -1; i++){
        if(form[i].value.trim() !== ""){
            success = true
        }else{
            console.log("oye >:(")
            success = false
        }
    }
    if(success){
        calculateAge(dayInput.value , monthInput.value , yearInput.value)
        yearOutput.innerHTML = calculatedYears
        monthOutput.innerHTML = calculatedMonths
        dayOutput.innerHTML = calculatedDays

        console.log(`${calculatedYears} years, ${calculatedMonths} months, ${calculatedDays} days.`)
    }
    
})

