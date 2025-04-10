console.log("start");

let counter = 0;

function printCounter() {
  console.log("counter: ", counter);
  counter++;

  if (counter <= 5) {
    setTimeout(printCounter, 1000);
  }
}

setTimeout(printCounter, 1000);

console.log("end");
