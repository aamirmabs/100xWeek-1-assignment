console.log("Start");

let count = 0;

const interval = setInterval(() => {
  console.log(count);
  count += 1;

  if (count == 5) {
    clearInterval(interval);
  }
}, 1000);

console.log("End");
