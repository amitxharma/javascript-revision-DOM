let counter = 0;
updateCount();
function increase() {
  counter += 1;
  updateCount();
}

function decrease() {
  counter > 0 ? (counter -= 1) : "";
  updateCount();
}
function reset() {
  counter = 0;
  updateCount();
}
function updateCount() {
  document.querySelector(".count-value").innerHTML = counter;
}
