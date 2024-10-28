// DOM Manipulation

//GetElementById()
// const title = document.getElementById("head");
// console.log(title);

//GetElementByClassName()

// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

//GetElementByTagName()

// const tag = document.getElementsByTagName("p");
// console.log(tag);

//querySelector()

// const c = document.querySelector("div");
// console.log(c);

//querySelectorAll()

//STYLING ELEMENTS

// const title = document.querySelector("#head");
// title.style.color = "red";

// const listItem = document.querySelectorAll(".list-items");
// for (let i = 0; i < listItem.length; i++) {
//   listItem[i].style.fontSize = "5rem";
// }

//CREATE ELEMENT
// const ul = document.querySelector("ul");
// const li = document.createElement("li");
//Adding Elements
// ul.append(li);

//Modifying the text
// li.innerText = "The Merry Men";
//Remove Elements
// li.remove();

//Modifying Attributes and Classes
// li.setAttribute("id", "main-header");
// li.removeAttribute("id");

// const title = document.querySelector("#head");
// console.log(title.getAttribute("id"));
// li.classList.add("main-header");
// li.classList.remove("list-items");
// console.log(li.classList.contains("list-items"));

//Traverse the DOM
//Parent Node Traversal
// let ul = document.querySelector("ul");
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement);

//Child Node Traversal
// let ul = document.querySelector("ul");
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue";
// console.log(ul.children);

//Sibling Node Traversal
// let ul = document.querySelector("ul");
// console.log(ul.childNodes);
// let div = document.querySelector("div");
// console.log(div.childNodes);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

//Event Listeners
// element.addEventListener("click", function)
// const buttonTwo = document.querySelector(".btn-2");
// function alertBtn() {
//   alert("I love Javascript Programming Language!");
// }
// buttonTwo.addEventListener("click", alertBtn);

// // MouseOver;
// const newBackgroundColor = document.querySelector(".btn-3");
// function changeColor() {
//   newBackgroundColor.style.backgroundColor = "red";
// }
// newBackgroundColor.addEventListener("mouseover", changeColor);

// Reveal Events.
// const revealBtn = document.querySelector(".reveal-btn");
// const hiddenContent = document.querySelector(".hidden-content");
// function revealContent() {
//   if (hiddenContent.classList.contains("reveal-btn")) {
//     hiddenContent.classList.remove("reveal-btn");
//   } else {
//     hiddenContent.classList.add("reveal-btn");
//   }
// }
// revealBtn.addEventListener("click", revealContent);

// document.querySelector("button").addEventListener(
//   "click",
//   function (e) {
//     console.log((e.target.innerText = "Clicked!"));
//   },
//   true
// );

//Event Delegation

// document.querySelector("#football").addEventListener("click", function (e) {
//   console.log("football is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgreen";
//   }
// });

// document.querySelector("#basketball").addEventListener("click", function (e) {
//   console.log("basketball is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "yellow";
//   }
// });

// document.querySelector("#boxing").addEventListener("click", function (e) {
//   console.log("boxing is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "red";
//   }
// });

// document.querySelector("#tennis").addEventListener("click", function (e) {
//   console.log("tennis is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "blue";
//   }
// });

// const colour = document.querySelector("#golf");
// function c() {
//   colour.style.backgroundColor = "brown";
// }
// colour.addEventListener("click", c);

//Event delegation allow appending single event listener to a parent element that add it to all descendant
// document.querySelector("#sports").addEventListener("click", function (e) {
//   console.log(e.target.getAttribute("id") + " is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "blue";
//   }
// });

// //Future List inherting from the Existing parent
// const sports = document.querySelector("#sports");
// const newSport = document.createElement("li");
// newSport.innerText = "Ruby";
// newSport.setAttribute("id", "Ruby");
// sports.appendChild(newSport);

let ball = document
  .getElementById("football")
  .addEventListener("click", function (e) {
    const target = e.target;
    if (target.matches("li")) {
      target.style.backgroundColor = "red";
    }
  });

const colour = document.getElementById("golf");
function c() {
  colour.style.color = "brown";
}
colour.addEventListener("click", c);

//const colour1 = document.getElementsByClassName(".boxing");

// const oldSport = document.querySelector("#sports");
// const sportNew = document.createElement("li");
// sportNew.innerText = "Cricket";
// sportNew.setAttribute("id", "Cricket");
// oldSport.appendChild(sportNew);
