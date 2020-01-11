// create, determine, & display the current day

var currentDay = moment().format("dddd, MMMM Do YYYY " + " @ h:mm A");

function insertCurrentDay() {
    $("#current").text(currentDay);
};

insertCurrentDay();

console.log(currentDay);


// determine current time & highlight timeblock red
var currentTimeEl = moment().format("h");

console.log(currentTimeEl);


function currentTime() {
  if (currentTimeEl === "9") {
    $("#nine").css("background-color","teal");
   } else if (currentTimeEl === "10") {
    $("#ten").css("background-color","red");
   } else if (currentTimeEl === "11") {
    $("#eleven").css("background-color","red");
   } else if (currentTimeEl === "12") {
    $("#twelve").css("background-color","red");
   } else if (currentTimeEl === "1") {
    $("#one").css("background-color","red");
   } else if (currentTimeEl === "2") {
    $("#two").css("background-color","red");
   } else if (currentTimeEl === "3") {
    $("#three").css("background-color","red");
   } else if (currentTimeEl === "4") {
    $("#four").css("background-color","red");
   } else if (currentTimeEl === "5") {
    $("#five").css("background-color","red");
   }
}

currentTime();







// determine past time & highlight past timeblocks gray



// determine future time & highlight past timeblocks green



// input text and save in each timeblock