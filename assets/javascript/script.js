// create, determine, & display the current day

var currentDay = moment().format("dddd, MMMM Do YYYY " + " @ h:mm A");

function insertCurrentDay() {
    $("#current").text(currentDay);
};

insertCurrentDay();

console.log(currentDay);

console.log("hi");



// determine current time & highlight timeblock red
var time = [9,10,11,12,13,14,15,16,17]
var currentTimeEl = moment().format("h");

console.log(currentTime);

function currentTime() {
    if (currentTimeEl <= time) {
        $(".block").css("background-color", "red");
    }
}

currentTime();



// determine past time & highlight past timeblocks gray



// determine future time & highlight past timeblocks green



// input text and save in each timeblock