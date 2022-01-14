// Global Variables
let currentDateTime = $('#currentDay');
let nineBtn = $('#nineBtn');

let nineTime = $('#nine');
let tenTime = $('#ten');
let elevenTime = $('#eleven');
let twelveTime = $('#twelve');
let oneTime = $('#one');
let twoTime = $('#two');
let threeTime = $('#three');
let fourTime = $('#four');
let fiveTime = $('#five');
let sixTime = $('#six');

let currentHour = moment().format("HH");
const times = ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

// Setting the current date
function displayTime() {
    let liveDate = moment().format('dddd, MMMM Do');
    currentDateTime.text(liveDate);
}

function colorChange() {
    for (let i = 0; i < times.length; i++) {
        if (currentHour === times[i]) {
            nineTime.addClass('present');
        } else {
            
        }
    }
}

colorChange();

// Checks the time every second to keep it up to date
setInterval(displayTime, 1000);

// Buttons to save the data entered into the planner
nineBtn.on("click", function() {
    
})
tenBtn.on("click", function() {
    
})
elevenBtn.on("click", function() {
    
})
twelveBtn.on("click", function() {
    
})
oneBtn.on("click", function() {
    
})
twoBtn.on("click", function() {
    
})
threeBtn.on("click", function() {
    
})
fourBtn.on("click", function() {
    
})
five.on("click", function() {
    
})
sixBtn.on("click", function() {
    
})


