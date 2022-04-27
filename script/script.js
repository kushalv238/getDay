var monthName = ["Janaury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayName = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var date_ = new Date();

function textFill() {
    document.getElementById("date").value = `${date_.getDate()}`
    document.getElementById("mo").textContent = `${monthName[date_.getMonth()]}`
    document.getElementById("year").value = `${date_.getFullYear()}`
}

function getDay() {
    date_.setDate(parseInt((document.getElementById("date") || {}).value || "0"));
    date_.setMonth(getMonthNumber((document.getElementById("month") || {}).value || "0"));
    date_.setFullYear(parseInt((document.getElementById("year") || {}).value || "0"));
    
    console.log(date_);

    var day = getDayName(date_.getDay());
    console.log(day);

    document.getElementById("enterDay").textContent = `${day}`
}
        
function getMonthNumber(Month) {
    for(var i = 0; i < 12; i++) {
        if(monthName[i] == Month) {
            return i;
        }
    }
}

function getDayName(dayNo) {
    return dayName[dayNo];
}