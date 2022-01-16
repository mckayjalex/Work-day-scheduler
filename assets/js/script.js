// Global Variables
let currentDateTime = $('#currentDay');
let buttonNine = $('#button9');
let buttonTen = $('#button10');
let buttonEleven = $('#button11');
let buttonTwelve = $('#button12');
let buttonOne = $('#button1');
let buttonTwo = $('#button2');
let buttonThree = $('#button3');
let buttonFour = $('#button4');
let buttonFive = $('#button5');
let buttonSix = $('#button6');
let clearBtn = $('#clearBtn');

// Load all data and time on page load
function init() {
    displayTime();
    colorChange();
    getData("textNine", 9);
    getData("textTen", 10);
    getData("textEleven", 11);
    getData("textTwelve", 12);
    getData("textOne", 13);
    getData("textTwo", 14);
    getData("textThree", 15);
    getData("textFour", 16);
    getData("textFive", 17);
    getData("textSix", 18);

}

// Function to display the current day and time 
function displayTime() {
    let liveDate = moment().format('dddd, MMMM Do');
    currentDateTime.text(liveDate);
}
// Function to change the colors of the text area based on the time of day
function colorChange() {
    let currentHour = moment().format("H");
    for (let i = 9; i < 19; i++) {
        if (i == currentHour) {
            $('#textarea' + i).addClass('present');
        } else if (i > currentHour) {
            $('#textarea' + i).addClass('future');
        } else {
            $('#textarea' + i).addClass('past');
        }
    }
    if (currentHour == 23) {
        clearData();
    }
}
// Save date in text areas to the local storage
function setData(text, num) {
    let data = $('#textarea' + num).val();
    localStorage.setItem(text, data)
}
// Retrieve data from local storage and display it on screen
function getData(textArea, num) {
    $('#textarea' + num).text(localStorage.getItem(textArea));
}

function clearData() {
    localStorage.clear();
    for(let i =9; i < 19; i++) {
        $('#textarea' + i).text("");
    }
}

// Buttons to save and clear the data entered into the planner
clearBtn.on("click", clearData);

buttonNine.on("click", function () {
    setData("textNine", 9); 
})
buttonTen.on("click", function () {
    setData("textTen", 10);
})
buttonEleven.on("click", function () {
    setData("textEleven", 11);
})
buttonTwelve.on("click", function () {
    setData("textTwelve", 12);
})
buttonOne.on("click", function () {
    setData("textOne", 13);
})
buttonTwo.on("click", function () {
    setData("textTwo", 14);
})
buttonThree.on("click", function () {
    setData("textThree", 15);
})
buttonFour.on("click", function () {
    setData("textFour", 16);
})
buttonFive.on("click", function () {
    setData("textFive", 17);
})
buttonSix.on("click", function () {
    setData("textSix", 18);  
})
// Runs on load of page
init();
// Checks time every second to keep planner colors correct
setInterval(colorChange, 1000);

// Checks the time every second to keep it up to date
setInterval(displayTime, 1000);


