const { error } = require("console");
const fs = require("fs");

// fs.writeFileSync("./main.txt", "create an file");  // sync  create file 

fs.writeFile("./test.tex", "async function", (err) => {});   // asyn function 