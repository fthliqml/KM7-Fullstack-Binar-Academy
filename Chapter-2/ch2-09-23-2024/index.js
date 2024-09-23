/*

// adding event to first button tag
// If function have param, do () => func
document.querySelector("button").addEventListener("click", () => handleClick("Iqmal"));

function handleClick(greet) {
  alert(`hello FSW 2 ${greet}`);
}

document.querySelector("button").addEventListener("click", () => {
  alert("hallo kedua");
});

// get drum d (index array 3)
document.querySelectorAll("button")[3].addEventListener("click", () => {
  alert("hallo kedua");
});

*/
const lengthOfButton = document.querySelectorAll("button").length;

// using array
const audioArray = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3"];

// arrow function doesnt have binding to keyword "this" etc.
for (let i = 0; i < lengthOfButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", () => {
    let audio = new Audio(audioArray[i]);
    audio.play();
  });
}

// way 2
for (let i = 0; i < lengthOfButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    console.log(this); // get button element that currently selected
  });
}
