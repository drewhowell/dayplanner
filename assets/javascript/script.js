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
  if (currentTimeEl === nine.dataset.block) {
    $("#nine").css("background-color","red");
   } else if (currentTimeEl === ten.dataset.block) {
    $("#ten").css("background-color","red");
   } else if (currentTimeEl === eleven.dataset.block) {
    $("#eleven").css("background-color","red");
   } else if (currentTimeEl === twelve.dataset.block) {
    $("#twelve").css("background-color","red");
   } else if (currentTimeEl + 12 === one.dataset.block) {
    $("#one").css("background-color","red");
   } else if (currentTimeEl + 12 === two.dataset.block) {
    $("#two").css("background-color","red");
   } else if (currentTimeEl + 12 === three.dataset.block) {
    $("#three").css("background-color","red");
   } else if (currentTimeEl + 12 === four.dataset.block) {
    $("#four").css("background-color","red");
   } else if (currentTimeEl + 12 === five.dataset.block) {
    $("#five").css("background-color","red");
   }
}

currentTime();







// determine past time & highlight past timeblocks gray


// determine future time & highlight past timeblocks green



// input text and save in each timeblock