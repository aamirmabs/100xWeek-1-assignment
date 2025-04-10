const fs = require(`fs`);

const content = "Lorem ipsum..."

console.log("Before write...");

fs.writeFile("text-write.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("Success");
});

console.log("After write..");
