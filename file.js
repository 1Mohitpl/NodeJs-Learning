// const { error } = require("console");
// const fs = require("fs");

// // fs.writeFileSync("./main.txt", "create an file");  // sync... blocking request 

// fs.writeFile("./test.tex", "async function", (err) => {});   // asyn... Non-Blocking request

const { error } = require("console");
const fs = require("fs");


// //sycn...
// fs.writeFileSync("./test.txt", "hey there")

//asycn...
fs.writeFile("./text.text", "hey world is supper",(err) => {});