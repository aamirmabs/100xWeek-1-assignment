const fs = require("fs");

// fs
fs.readFile(`./text-read.txt`, 'utf-8', (err, data) => {
  if (err) {
    console.error("Error reading file");
    return;
  }

  console.log("--- CONTENTS ---");
  console.log(data);
})

// expensive task
sum = 0;
for (let i = 0; i < 10000000; i++) {
  sum += i;
}
console.log("AFTER: ", sum);
