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
console.log(three.dataset.block);


// highlight current time red, past time gray, & future time green
function currentTimeNine() {
  if (currentTimeEl === nine.dataset.block) {
    $("#nine").css("background-color","#F29DA5");
   } else if (currentTimeEl > nine.dataset.block) {
    $("#nine").css("background-color","#70EE63");
   } else if (currentTimeEl < nine.dataset.block) {
    $("#nine").css("background-color","#B8BBB8");
    }
}

currentTimeNine();

function currentTimeTen() {
    if (currentTimeEl === ten.dataset.block) {
      $("#ten").css("background-color","#F29DA5");
     } else if (currentTimeEl < ten.dataset.block) {
      $("#ten").css("background-color","#70EE63");
     } else if (currentTimeEl > ten.dataset.block) {
      $("#ten").css("background-color","#B8BBB8");
      }
}
  
currentTimeTen();

function currentTimeEleven() {
    if (currentTimeEl === eleven.dataset.block) {
      $("#eleven").css("background-color","#F29DA5");
     } else if (currentTimeEl < eleven.dataset.block) {
      $("#eleven").css("background-color","#70EE63");
     } else if (currentTimeEl > eleven.dataset.block) {
      $("#eleven").css("background-color","#B8BBB8");
      }
}
  
currentTimeEleven();

function currentTimeTwelve() {
    if (currentTimeEl === twelve.dataset.block) {
      $("#twelve").css("background-color","#F29DA5");
     } else if (currentTimeEl < twelve.dataset.block) {
      $("#twelve").css("background-color","#70EE63");
     } else if (currentTimeEl > twelve.dataset.block) {
      $("#twelve").css("background-color","#B8BBB8");
      }
}
  
currentTimeTwelve();


function currentTimeOne() {
    if (currentTimeEl + 12 === one.dataset.block) {
      $("#one").css("background-color","#F29DA5");
     } else if (currentTimeEl + 12 < one.dataset.block) {
      $("#one").css("background-color","#70EE63");
     } else if (currentTimeEl + 12 > one.dataset.block) {
      $("#one").css("background-color","#B8BBB8");
      }
}
  
currentTimeOne();

function currentTimeTwo() {
    if (currentTimeEl + 12 === two.dataset.block) {
      $("#two").css("background-color","#F29DA5");
     } else if (currentTimeEl + 12 < two.dataset.block) {
      $("#two").css("background-color","#70EE63");
     } else if (currentTimeEl + 12 > two.dataset.block) {
      $("#two").css("background-color","#B8BBB8");
      }
}
  
currentTimeTwo();

function currentTimeThree() {
    if (currentTimeEl + 12 === three.dataset.block) {
      $("#three").css("background-color","#F29DA5");
     } else if (currentTimeEl + 12 < three.dataset.block) {
      $("#three").css("background-color","#70EE63");
     } else if (currentTimeEl + 12 > three.dataset.block) {
      $("#three").css("background-color","#B8BBB8");
      }
}
  
currentTimeThree();

function currentTimeFour() {
    if (currentTimeEl + 12 === four.dataset.block) {
      $("#four").css("background-color","#F29DA5");
     } else if (currentTimeEl + 12 < four.dataset.block) {
      $("#four").css("background-color","#70EE63");
     } else if (currentTimeEl + 12 > four.dataset.block) {
      $("#four").css("background-color","#B8BBB8");
      }
}
  
currentTimeFour();

function currentTimeFive() {
    if (currentTimeEl + 12 === five.dataset.block) {
      $("#five").css("background-color","#F29DA5");
     } else if (currentTimeEl + 12 < five.dataset.block) {
      $("#five").css("background-color","#70EE63");
     } else if (currentTimeEl + 12 > five.dataset.block) {
      $("#five").css("background-color","#B8BBB8");
      }
}
  
currentTimeFive();

// input text for timeblock and save

function action() {
    window.localStorage['ninetext'] = document.getElementById('ninetext').value;
    document.getElementById('ninetext').value = window.localStorage['ninetext'];
}

console.log(action());
