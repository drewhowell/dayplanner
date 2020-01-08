// create, determine, & display the current day
var m = moment();

var currentDay = Date.now();

m = moment(currentDay);

function insertCurrentDay() {
    $("#current span").text(m);
};

insertCurrentDay();



// determine current time & highlight timeblock red



// determine past time & highlight past timeblocks gray



// determine future time & highlight past timeblocks green



// input text and save in each timeblock