const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const button = document.querySelector('#btn');

const emptyError = "This field is required"

button.addEventListener("click", verificationAndCalculation);

verifyEmpty = (elem) => (elem == '') ? true : false

function verificationAndCalculation() {
    let dayValue = day.value;
    let monthValue = month.value;
    let yearValue = year.value;

    emptyErrorManager(dayValue, monthValue, yearValue)
    
    
}

function emptyErrorManager(dayValue, monthValue, yearValue) {

    // Applying and removing error individually

    if (verifyEmpty(dayValue)) {
        addEmptyError(day, emptyError)
    } else if (!verifyEmpty(dayValue)) { 
        removeEmptyError(day)
    }
    if (verifyEmpty(monthValue)) {
        addEmptyError(month, emptyError)
    } else if (!verifyEmpty(monthValue)){ 
        removeEmptyError(month)
    }
    if (verifyEmpty(yearValue)) {
        addEmptyError(year, emptyError)
    } else if (!verifyEmpty(yearValue)){ 
        removeEmptyError(year)
    }

    // Applying and removing error in pair

    if (verifyEmpty(dayValue) && verifyEmpty(monthValue)) {
        addEmptyError(day, emptyError)
        addEmptyError(month, emptyError)
    } else if (!verifyEmpty(dayValue) && !verifyEmpty(monthValue)){ 
        removeEmptyError(day)
        removeEmptyError(month)
    }
    if (verifyEmpty(monthValue) && verifyEmpty(yearValue)) {
        addEmptyError(month, emptyError)
        addEmptyError(year, emptyError)
    } else if (!verifyEmpty(monthValue) && !verifyEmpty(yearValue)){ 
        removeEmptyError(month)
        removeEmptyError(year)
    }
    if (verifyEmpty(yearValue) && verifyEmpty(dayValue)) {
        addEmptyError(year, emptyError)
        addEmptyError(day, emptyError)
    } else if (!verifyEmpty(yearValue) && !verifyEmpty(dayValue)){ 
        removeEmptyError(year)
        removeEmptyError(day)
    }

    // Applying and removing error to all

    if (verifyEmpty(dayValue) && verifyEmpty(monthValue) && verifyEmpty(yearValue)) {
        addEmptyError(day, emptyError)
        addEmptyError(month, emptyError)
        addEmptyError(year, emptyError)
    } else if (!verifyEmpty(dayValue) && !verifyEmpty(monthValue) && !verifyEmpty(yearValue)) {
        removeEmptyError(day)
        removeEmptyError(month)
        removeEmptyError(year)
    }
}

function addEmptyError(elem, error) {
    elem.style.borderColor = "hsl(0, 100%, 67%)";
    elem.previousElementSibling.classList.add('error');
    elem.nextElementSibling.innerText = error;
}
function removeEmptyError(elem) {
    elem.style.borderColor = "hsl(0, 0%, 86%)";
    if(elem.previousElementSibling.classList.contains('error')){
        elem.previousElementSibling.classList.remove('error')
    }
    elem.nextElementSibling.innerText = '';
}
