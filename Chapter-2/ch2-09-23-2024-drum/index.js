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

/*
// example of "this"
for (let i = 0; i < lengthOfButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    console.log(this); // get button element that currently selected
  });
}
*/

const lengthOfButton = document.querySelectorAll("button").length;

// using object
const audioObject = { w: "sounds/tom-1.mp3", a: "sounds/tom-2.mp3", s: "sounds/tom-3.mp3", d: "sounds/tom-4.mp3", j: "sounds/crash.mp3", k: "sounds/kick-bass.mp3", l: "sounds/snare.mp3" };

// sound effect when pressing a keyword
window.addEventListener("keydown", (e) => {
  // check if e.key(keyboard key) is exist in object
  if (e.key in audioObject) {
    let audio = new Audio(audioObject[e.key]);
    audio.play();

    // get button that currently selected
    const currBtn = document.querySelector("." + e.key);
    // adding stlye class
    currBtn.classList.add("pressed", "red");

    // adding timeout, delete class when timeout is done
    pressedTimeout = setTimeout(() => {
      currBtn.classList.remove("pressed", "red");
    }, 300);
  }
});

// arrow function doesnt have binding to keyword "this" etc. not like -> function() {}.
for (let i = 0; i < lengthOfButton; i++) {
  const btnArray = document.querySelectorAll("button")[i];
  btnArray.addEventListener("click", (e) => {
    let audio = new Audio(Object.values(audioObject)[i]);
    audio.play();

    // e.target is a same as "this" at basic function, it means element that currently selected
    e.target.classList.add("pressed", "red");

    // adding timeout, delete class when timeout is done
    pressedTimeout = setTimeout(() => {
      e.target.classList.remove("pressed", "red");
    }, 300);
  });
}
