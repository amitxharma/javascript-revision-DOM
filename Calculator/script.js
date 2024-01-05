function appendToDisplay(value) {
  const displayItem = document.querySelector(".display");
  displayItem.innerHTML += value;
}

function calculate() {
  const displayExpression = document.querySelector(".display");
  let result;
  try {
    result = eval(displayExpression.innerHTML);
  } catch (error) {
    document.querySelector(".display").innerHTML = "Error";
  }

  document.querySelector(".display").innerHTML = result;
}
function clearDisplay() {
  document.querySelector(".display").innerHTML = "";
}
