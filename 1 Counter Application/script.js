let count = 0;
let display = document.getElementById("output");

function countUp() {
  count = count + 1;
  display.innerHTML = count;
}

function countDown() {
  count = count - 1;
  display.innerHTML = count;
}

let count1 = 0;
let display1 = document.getElementById("output1");
function changeCount(value) {
  if (value === 1) {
    count1--;
  } else {
    count1 += 100000;
  }
  display1.innerHTML = count1;
}
