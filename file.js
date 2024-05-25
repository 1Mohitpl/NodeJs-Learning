const { error } = require("console");
const fs = require("fs");

// fs.writeFileSync("./main.txt", "create an file");  // sync  create file 

// fs.writeFile("./test.tex", "async function", (err) => {});   // asyn function 


 fs.readFile("./contacts,txt", "utf-8", (err, result) => {
 
    if(err){                                                    // async function never return any value, it alwayes ask call back function;
                                                                // here read the text file
        console.log("Error", err)
    }else{
        console.log(result)
    }
});
