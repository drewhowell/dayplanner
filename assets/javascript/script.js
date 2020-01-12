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

// input text for timeblocks and save

var nine_input_textarea = document.querySelector('.nine-content-input');
var nine_output_div = document.querySelector('.nine-content-input');
var nine_save_button = document.querySelector('.nine-save-button');

nine_save_button.addEventListener('click', saveNineText);

nine_output_div.textContent = localStorage.getItem('ninecontent');
nine_input_textarea.value = localStorage.getItem('ninecontent');

function saveNineText() {
	localStorage.setItem('ninecontent', nine_input_textarea.value);
	
	nine_output_div.textContent = nine_input_textarea.value;
}

var ten_input_textarea = document.querySelector('.ten-content-input');
var ten_output_div = document.querySelector('.ten-content-input');
var ten_save_button = document.querySelector('.ten-save-button');

ten_save_button.addEventListener('click', saveTenText);

ten_output_div.textContent = localStorage.getItem('tencontent');
ten_input_textarea.value = localStorage.getItem('tencontent');

function saveTenText() {
	localStorage.setItem('tencontent', ten_input_textarea.value);
	
	ten_output_div.textContent = ten_input_textarea.value;
}

var eleven_input_textarea = document.querySelector('.eleven-content-input');
var eleven_output_div = document.querySelector('.eleven-content-input');
var eleven_save_button = document.querySelector('.eleven-save-button');

eleven_save_button.addEventListener('click', saveElevenText);

eleven_output_div.textContent = localStorage.getItem('elevencontent');
eleven_input_textarea.value = localStorage.getItem('elevencontent');

function saveElevenText() {
	localStorage.setItem('elevencontent', eleven_input_textarea.value);
	
	eleven_output_div.textContent = eleven_input_textarea.value;
}

var twelve_input_textarea = document.querySelector('.twelve-content-input');
var twelve_output_div = document.querySelector('.twelve-content-input');
var twelve_save_button = document.querySelector('.twelve-save-button');

twelve_save_button.addEventListener('click', saveTwelveText);

twelve_output_div.textContent = localStorage.getItem('twelvecontent');
twelve_input_textarea.value = localStorage.getItem('twelvecontent');

function saveTwelveText() {
	localStorage.setItem('twelvecontent', twelve_input_textarea.value);
	
	twelve_output_div.textContent = twelve_input_textarea.value;
}

var one_input_textarea = document.querySelector('.one-content-input');
var one_output_div = document.querySelector('.one-content-input');
var one_save_button = document.querySelector('.one-save-button');

one_save_button.addEventListener('click', saveOneText);

one_output_div.textContent = localStorage.getItem('onecontent');
one_input_textarea.value = localStorage.getItem('onecontent');

function saveOneText() {
	localStorage.setItem('onecontent', one_input_textarea.value);
	
	one_output_div.textContent = one_input_textarea.value;
}

var two_input_textarea = document.querySelector('.two-content-input');
var two_output_div = document.querySelector('.two-content-input');
var two_save_button = document.querySelector('.two-save-button');

two_save_button.addEventListener('click', saveTwoText);

two_output_div.textContent = localStorage.getItem('twocontent');
two_input_textarea.value = localStorage.getItem('twocontent');

function saveTwoText() {
	localStorage.setItem('twocontent', two_input_textarea.value);
	
	two_output_div.textContent = two_input_textarea.value;
}

var three_input_textarea = document.querySelector('.three-content-input');
var three_output_div = document.querySelector('.three-content-input');
var three_save_button = document.querySelector('.three-save-button');

three_save_button.addEventListener('click', saveThreeText);

three_output_div.textContent = localStorage.getItem('threecontent');
three_input_textarea.value = localStorage.getItem('threecontent');

function saveThreeText() {
	localStorage.setItem('threecontent', three_input_textarea.value);
	
	three_output_div.textContent = three_input_textarea.value;
}

var four_input_textarea = document.querySelector('.four-content-input');
var four_output_div = document.querySelector('.four-content-input');
var four_save_button = document.querySelector('.four-save-button');

four_save_button.addEventListener('click', saveFourText);

four_output_div.textContent = localStorage.getItem('fourcontent');
four_input_textarea.value = localStorage.getItem('fourcontent');

function saveFourText() {
	localStorage.setItem('fourcontent', four_input_textarea.value);
	
	four_output_div.textContent = four_input_textarea.value;
}

var five_input_textarea = document.querySelector('.five-content-input');
var five_output_div = document.querySelector('.five-content-input');
var five_save_button = document.querySelector('.five-save-button');

five_save_button.addEventListener('click', saveFiveText);

five_output_div.textContent = localStorage.getItem('fivecontent');
five_input_textarea.value = localStorage.getItem('fivecontent');

function saveFiveText() {
	localStorage.setItem('fivecontent', five_input_textarea.value);
	
	five_output_div.textContent = five_input_textarea.value;
}
