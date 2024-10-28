document.getElementById("btn").addEventListener("click", () => {
  // Getting Elements From The DOM
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector(".result");
  let operator = document.getElementById("selectOp").value;

  switch (operator) {
    case "addition":
      result.innerHTML = +num1 + +num2;
      break;
    case "subtraction":
      result.innerHTML = num1 - num2;
      break;
    case "division":
      result.innerHTML = num1 / num2;
      break;
    case "multiplication":
      result.innerHTML = num1 * num2;
  }
  // });
  // if (operator === "addition") {
  //   result.innerHTML = +num1 + num2;
  // } else if (operator === "subtraction") {
  //   result.innerHTML = num1 - num2;
  // } else if (operator === "division") {
  //   result.innerHTML = num1 / num2;
  // } else if (operator === "multiplication") {
  //   result.innerHTML = num1 * num2;
  // } else {
  //   result.innerHTML = NaN;
  // }
});
