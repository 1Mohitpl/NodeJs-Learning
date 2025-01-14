const fs = require("fs");


// Non-blocking 
console.log("1");

fs.readFile("test.txt", "utf-8", (err, res) =>{
    console.log(res);
    
});

console.log("3");
console.log("this is a aysncronus operation");
























// const { error } = require("console");
// const fs = require("fs");

// // fs.writeFileSync("./main.txt", "create an file");  // sync... blocking request 

// fs.writeFile("./test.tex", "async function", (err) => {});   // asyn... Non-Blocking request

// const { error } = require("console");
// const fs = require("fs");


// // //sycn...
// // fs.writeFileSync("./test.txt", "hey there")

// //asycn...
// fs.writeFile("./text.text", "hey world is supper",(err) => {});