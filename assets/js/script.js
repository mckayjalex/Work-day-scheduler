
let currentDateTime = $("#currentDay");


function displayTime() {
    let liveDate = moment().format('dddd, MMMM Do');
    currentDateTime.text(liveDate);
}

setInterval(displayTime, 1000);



