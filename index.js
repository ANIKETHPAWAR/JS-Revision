const fs = require('fs');
function data1(err, data) {
  
    console.log(data);
  }

fs.readFile("./a.txt", "utf8",data1);

fs.readFile("./b.txt", "utf8",data1);
console.log("End of the file");