// create, determine, & display the current day

var currentDay = moment().format("dddd, MMMM Do YYYY");

function insertCurrentDay() {
    $("#current").text(currentDay);
};

insertCurrentDay();

console.log(currentDay);



// determine current time & highlight timeblock red



// determine past time & highlight past timeblocks gray



// determine future time & highlight past timeblocks green



// input text and save in each timeblock