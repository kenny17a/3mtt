// Getting Elements From The DOM
const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");
// console.log(btns);

// Iterating over all buttons
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    colour = btn.value;
    changeBackground(colour);
  });
});

function changeBackground(colour) {
  // console.log(colour);
  body.className = "";

  switch (colour) {
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    default:
      break;
  }
}
