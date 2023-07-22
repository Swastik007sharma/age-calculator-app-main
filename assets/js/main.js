const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const button = document.querySelector('#btn');
const resultYear = document.querySelectorAll('.result')[0];
const resultMonth = document.querySelectorAll('.result')[1];
const resultDay = document.querySelectorAll('.result')[2];

const emptyError = "This field is required"
const invalidYearError = "Must be in the past"
const invalidMonthError = "Must be a valid month"
const invalidDayError = "Must be a valid day"

button.addEventListener("click", verificationAndCalculation);

verifyEmpty = (elem) => (elem == '') ? true : false

function verificationAndCalculation() {
    let dayValue = Number(day.value);
    let monthValue = Number(month.value);
    let yearValue = Number(year.value);

     // Create a Date object and check if it represents a valid date
    let date = new Date(yearValue, monthValue - 1, dayValue);
    
    ErrorManager(dayValue, monthValue, yearValue, date)
    calculation(dayValue, monthValue, yearValue, date)
    
    
}

function ErrorManager(dayValue, monthValue, yearValue, date) {

    // Applying and removing error individually

    if (verifyEmpty(dayValue)) {
        addError(day, emptyError)
    } else if (!verifyEmpty(dayValue)) { 
        removeError(day)
        validateDay(dayValue, date)
    }
    if (verifyEmpty(monthValue)) {
        addError(month, emptyError)
    } else if (!verifyEmpty(monthValue)){ 
        removeError(month)
        validateMonth(monthValue)
    }
    if (verifyEmpty(yearValue)) {
        addError(year, emptyError)
    } else if (!verifyEmpty(yearValue)){ 
        removeError(year)
        validateYear(yearValue);
    } 

    // Applying and removing error in pair

    if (verifyEmpty(dayValue) && verifyEmpty(monthValue)) {
        addError(day, emptyError)
        addError(month, emptyError)
    } else if (!verifyEmpty(dayValue) && !verifyEmpty(monthValue)){ 
        removeError(day)
        removeError(month)
        validateDay(dayValue, date)
        validateMonth(monthValue);
    }
    if (verifyEmpty(monthValue) && verifyEmpty(yearValue)) {
        addError(month, emptyError)
        addError(year, emptyError)
    } else if (!verifyEmpty(monthValue) && !verifyEmpty(yearValue)){ 
        removeError(month)
        removeError(year)
        validateMonth(monthValue);
        validateYear(yearValue);
    }
    if (verifyEmpty(yearValue) && verifyEmpty(dayValue)) {
        addError(year, emptyError)
        addError(day, emptyError)
    } else if (!verifyEmpty(yearValue) && !verifyEmpty(dayValue)){ 
        removeError(year)
        removeError(day)
        validateYear(yearValue);
        validateDay(dayValue, date);
    }

    // Applying and removing error to all

    if (verifyEmpty(dayValue) && verifyEmpty(monthValue) && verifyEmpty(yearValue)) {
        addError(day, emptyError)
        addError(month, emptyError)
        addError(year, emptyError)
    } else if (!verifyEmpty(dayValue) && !verifyEmpty(monthValue) && !verifyEmpty(yearValue)) {
        removeError(day)
        removeError(month)
        removeError(year)
        validateDay(dayValue, date)
        validateMonth(monthValue);
        validateYear(yearValue);
    }
}

function addError(elem, error) {
    elem.style.borderColor = "hsl(0, 100%, 67%)";
    elem.previousElementSibling.classList.add('error');
    elem.nextElementSibling.innerText = error;
}
function removeError(elem) {
    elem.style.borderColor = "hsl(0, 0%, 86%)";
    if(elem.previousElementSibling.classList.contains('error')){
        elem.previousElementSibling.classList.remove('error')
    }
    elem.nextElementSibling.innerText = '';
}
function validateYear(elm){
    let d = new Date()
    let currYear = d.getFullYear()

    if (elm > currYear || elm < 1000){
        addError(year, invalidYearError)
    } else if (!elm > currYear || !elm < 1000){
        removeError(year)
    }
}
function validateMonth(elm){
    if (elm > 12 || elm < 1){
        addError(month, invalidMonthError)
    } else if (!elm > 12 || !elm < 1){
        removeError(month)
    }
}
function validateDay(elm, date){
    if (!date.getDate() == elm){
        addError(day, invalidDayError)
    } else if (date.getDate() == elm){
        removeError(day)
    }
}
function calculation(dayValue, monthValue, yearValue, date){
    
    if (date.getFullYear() === yearValue &&
    date.getMonth() === monthValue - 1 &&
    date.getDate() === dayValue){
        let givenDateInMillisec = date.getTime()
        let currDateInMillisec = Date.now()
        
        let millisec = currDateInMillisec - givenDateInMillisec;
        
        let yearsToShow = parseInt(millisec/31536000000)
        let remainingMillisec = (millisec%31536000000)
        let monthsToShow = parseInt(remainingMillisec/2628000000)
        remainingMillisec = remainingMillisec%2628000000
        let daysToShow = parseInt(remainingMillisec/(1000 * 60 * 60 * 24))

        resultYear.innerText = yearsToShow;
        resultMonth.innerText = monthsToShow;
        resultDay.innerText = daysToShow;
    }
}


