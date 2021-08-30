const button = document.querySelectorAll(".btn");
const equal = document.querySelector(".equals-btn");
const display = document.querySelector(".display");
const del = document.querySelector("#del");
const reset = document.querySelector("#reset");
const displayText = document.querySelector(".display");
const light = document.querySelector(".light");
const purple = document.querySelector(".purple");
const dark = document.querySelector(".dark");
const theme = document.querySelector(".theme");

let expression = "";
let ans;

dark.addEventListener("click", function () {
  theme.setAttribute("href", "style-dark.css");
});
light.addEventListener("click", function () {
  theme.setAttribute("href", "style-light.css");
});
purple.addEventListener("click", function () {
  theme.setAttribute("href", "style-purple.css");
});
button.forEach(function (button_ele) {
  button_ele.addEventListener("click", () => {
    if (
      button_ele.id != "del" &&
      button_ele.id != "reset" &&
      button_ele.id != "equals"
    ) {
      expression = expression + button_ele.id;
      display.textContent = expression;
    }
    if (expression.length > 12 && expression.length <= 17) {
      displayText.classList.add("small-font");
    } else if (expression.length > 20 || ans.length > 20) {
      displayText.textContent = "display limit reached delete a number";
    }
  });
});

equal.addEventListener("click", () => {
  try {
    ans = eval(expression);
    if (ans.toString().includes(".")) {
      displayText.classList.remove("small-font");
      ans = eval(expression).toFixed(10);
      ans = Number(ans).toString();
    }
    display.textContent = ans;
  } catch (e) {
    displayText.classList.add("small-font");
    display.textContent = "Error check your input";
  }
  expression = ans;
});

del.addEventListener("click", () => {
  expression = expression.toString().slice(0, -1);
  if (expression) {
    display.textContent = expression;
  } else {
    display.textContent = "0";
  }
  if (expression.length <= 12 && expression.length > 0) {
    displayText.classList.remove("small-font");
  }
});

reset.addEventListener("click", () => {
  expression = "";
  ans = 0;
  display.textContent = "0";
  displayText.classList.remove("small-font");
});
