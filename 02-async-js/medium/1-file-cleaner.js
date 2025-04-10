const fs = require(`fs`);


fs.readFile(`1-file-cleaner.txt`, `utf-8`, (err, data) => {
  if (err) {
    console.log(`Error`);
    console.log(err);
  }
  else {
    console.log("file read.\nData: ");
    console.log(data);
  }

  // cleaning data
  data = data.replace(/\s+/g, ' ');

  // writing data back to the same file
  fs.writeFile(`1-file-cleaner.txt`, data, err => {
    if (err) {
      console.error("Error...");
      console.error(err);
    } else {
      console.log("File updated. ");
    }
  })

})
