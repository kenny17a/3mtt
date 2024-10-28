//variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "Make hay while the sun shines",
    person: "John Smith",
  },
  {
    quote: "Living well",
    person: "Matt Watt",
  },
  {
    quote: "Education is the best legacy",
    person: "Anonymous",
  },
  {
    quote:
      "IF you don't believe it or don't get it, I don't have the time to convince you",
    person: "Sir Tochi",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
