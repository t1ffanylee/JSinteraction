
let cuisines = ["Italian food!", "Thai food!", "Japanese food!", "Korean food!", "Mexican food!", "Chinese food!", "Greek food!", "Mediterranean food!", "Indian food!"]

let cuisineButton;
let cuisineInput;
let cuisineOutput;
let outputText;
let restyleButton;

document.addEventListener("DOMContentLoaded", function(){
  cuisineButton = document.getElementById("cuisine-button");
  cuisineInput = document.getElementById("cuisine-input");
  cuisineOutput = document.getElementById("cuisine-output");
  outputText = document.getElementById("output-text");
  restyleButton = document.getElementById("restyle-button");

cuisineButton.addEventListener("click", function(){
  let cuisineOutput = cuisineInput.value;
  cuisine(cuisineOutput);
});

restyleButton.addEventListener("click", restyle);
});

function cuisine(name){
 let todayCuisine = name + ", you should have ";
 todayCuisine += cuisines[Math.floor(Math.random() * cuisines.length)];
 outputText.innerText = todayCuisine;
}

function restyle(){
 let r1 = Math.random() * 340;
 let g1 = Math.random() * 255;
 let b1 = Math.random() * 400;

 let r2 = Math.random() * 200;
 let g2 = Math.random() * 55;
 let b2 = Math.random() * 150;

 let bgColor = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
 let textColor =  "rgb(" + r2 + "," + g2 + "," + b2 + ")";
 cuisineOutput.style.backgroundColor = bgColor;
 cuisineOutput.style.color = textColor;
 let fontWeight = ["bold", "light", "lighter"];
 outputText.style.fontSize = (Math.random() * (8 - 2) + 2) + "vw";
 outputText.style.fontWeight = fontWeight[Math.floor(Math.random() * cuisines.length)];

}
