const form = document.getElementsByTagName("form")[0]
const dayInput = form[0]
const monthInput = form[1]
const yearInput = form[2]
const button = form[3]

const labels = document.getElementsByTagName("label")
const emptyText= document.getElementsByClassName("emptyInputText")
const invalidText = document.getElementsByClassName("invalidInputText")
const invalidDateText = document.getElementsByClassName("invalidDateText")

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
    let valid2 = false
    if(form[0].value > new Date(form[2].value, form[1].value, 0).getDate() || ((presentYear.toString() === form[2].value ? form[1].value.toString() === presentMonth.toString()?form[0].value.toString() > presentDay.toString():false:false))){
        valid2 = false
        labels[0].classList.add("incorrectInput")
        invalidText[0].classList.add("invalidValue")
    }else{
        valid2 = true
        labels[0].classList.remove("incorrectInput")
        invalidText[0].classList.remove("invalidValue")
    }
    let valid3 = false
    if(form[1].value > 12 || ((presentYear.toString() === form[2].value ? form[1].value > presentMonth:false) )){
        valid3 = false
        labels[1].classList.add("incorrectInput")
        invalidText[1].classList.add("invalidValue")
    }else{
        valid3 = true
        labels[1].classList.remove("incorrectInput")
        invalidText[1].classList.remove("invalidValue")
    }
    let valid4 = false
    if(form[2].value > presentYear){
        valid4 = false
        labels[2].classList.add("incorrectInput")
        invalidText[2].classList.add("invalidValue")
    }else{
        valid4 = true
        labels[2].classList.remove("incorrectInput")
        invalidText[2].classList.remove("invalidValue")
    }
    let filled = false
    for(let i=0; i< form.length -1; i++){
        if(form[i].value.trim() === ""){
            filled = false
            labels[i].classList.add("incorrectInput")
            emptyText[i].classList.add("invalidValue")
        }else if (valid2 && valid3 && valid4 && form[i].value.trim() !== ""){
            filled = true
            labels[i].classList.remove("incorrectInput")
            emptyText[i].classList.remove("invalidValue")
        }
    }
    let success = filled && valid2 && valid3 && valid4
    if(success){
        calculateAge(dayInput.value , monthInput.value , yearInput.value)
        yearOutput.innerHTML = calculatedYears
        monthOutput.innerHTML = calculatedMonths
        dayOutput.innerHTML = calculatedDays
        
        console.log(`${calculatedYears} years, ${calculatedMonths} months, ${calculatedDays} days.`)
    }
    console.log(true + true + false)
})

for(let i=0;i<form.length-1;i++){
    form[i].addEventListener("input",()=>{
        form[i].value = Math.abs(form[i].value)
        labels[i].classList.remove("incorrectInput")
        emptyText[i].classList.remove("invalidValue")
    })
}