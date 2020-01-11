// create, determine, & display the current day

var currentDay = moment().format("dddd, MMMM Do YYYY " + " @ h:mm A");

function insertCurrentDay() {
    $("#current").text(currentDay);
};

insertCurrentDay();

console.log(currentDay);


// determine current time
var currentTimeEl = moment().format("h");

console.log(currentTimeEl);
console.log(nine.dataset.block);


// highlight current time red, past time gray, & future time green
function currentTimeNine() {
  if (currentTimeEl === nine.dataset.block) {
    $("#nine").css("background-color","red");
   } else if (currentTimeEl > nine.dataset.block) {
    $("#nine").css("background-color","green");
   } else if (currentTimeEl < nine.dataset.block) {
    $("#nine").css("background-color","gray");
    }
}

currentTimeNine();

function currentTimeTen() {
    if (currentTimeEl === ten.dataset.block) {
      $("#ten").css("background-color","red");
     } else if (currentTimeEl < ten.dataset.block) {
      $("#ten").css("background-color","green");
     } else if (currentTimeEl > ten.dataset.block) {
      $("#ten").css("background-color","gray");
      }
  }
  
  currentTimeTen();

  function currentTimeEleven() {
    if (currentTimeEl === eleven.dataset.block) {
      $("#eleven").css("background-color","red");
     } else if (currentTimeEl < eleven.dataset.block) {
      $("#eleven").css("background-color","green");
     } else if (currentTimeEl > eleven.dataset.block) {
      $("#eleven").css("background-color","gray");
      }
  }
  
  currentTimeEleven();

  function currentTimeTwelve() {
    if (currentTimeEl === twelve.dataset.block) {
      $("#twelve").css("background-color","red");
     } else if (currentTimeEl < twelve.dataset.block) {
      $("#twelve").css("background-color","green");
     } else if (currentTimeEl > twelve.dataset.block) {
      $("#twelve").css("background-color","gray");
      }
  }
  
  currentTimeTwelve();


  function currentTimeOne() {
    if (currentTimeEl + 12 === one.dataset.block) {
      $("#one").css("background-color","red");
     } else if (currentTimeEl + 12 < one.dataset.block) {
      $("#one").css("background-color","green");
     } else if (currentTimeEl + 12 > one.dataset.block) {
      $("#one").css("background-color","gray");
      }
  }
  
  currentTimeOne();

  function currentTimeTwo() {
    if (currentTimeEl + 12 === two.dataset.block) {
      $("#two").css("background-color","red");
     } else if (currentTimeEl + 12 < two.dataset.block) {
      $("#two").css("background-color","green");
     } else if (currentTimeEl + 12 > two.dataset.block) {
      $("#two").css("background-color","gray");
      }
  }
  
  currentTimeTwo();

  function currentTimeThree() {
    if (currentTimeEl + 12 === three.dataset.block) {
      $("#three").css("background-color","red");
     } else if (currentTimeEl + 12 < three.dataset.block) {
      $("#three").css("background-color","green");
     } else if (currentTimeEl + 12 > three.dataset.block) {
      $("#three").css("background-color","gray");
      }
  }
  
  currentTimeThree();

  function currentTimeFour() {
    if (currentTimeEl + 12 === four.dataset.block) {
      $("#four").css("background-color","red");
     } else if (currentTimeEl + 12 < four.dataset.block) {
      $("#four").css("background-color","green");
     } else if (currentTimeEl + 12 > four.dataset.block) {
      $("#four").css("background-color","gray");
      }
  }
  
  currentTimeFour();

  function currentTimeFive() {
    if (currentTimeEl + 12 === five.dataset.block) {
      $("#five").css("background-color","red");
     } else if (currentTimeEl + 12 < five.dataset.block) {
      $("#five").css("background-color","green");
     } else if (currentTimeEl + 12 > five.dataset.block) {
      $("#five").css("background-color","gray");
      }
  }
  
  currentTimeFive();

// input text for timeblock and save
