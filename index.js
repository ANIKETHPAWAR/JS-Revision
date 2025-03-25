const fs = require('fs');
const readData= fs.readFileSync("./a.txt", "utf8");
console.log(readData);
const readData2= fs.readFileSync("./b.txt", "utf8");
console.log(readData2);