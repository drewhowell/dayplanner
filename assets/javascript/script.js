// create, determine, & display the current day
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

function insertCurrentDay() {
    console.log("html", $("#current").html());
    $("#current").text(currentDay);
};

insertCurrentDay();

console.log(currentDay);

console.log("hi");



// determine current time & highlight timeblock red



// determine past time & highlight past timeblocks gray



// determine future time & highlight past timeblocks green



// input text and save in each timeblock