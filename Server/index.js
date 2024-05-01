const http = require ("http");
const fs = require ("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} New request recived\n `;
      fs.appendFile("log.txt",log, (err, data)=>{
          switch(req.url) {

            case '/':   // root path or Home page
            res.end("hello from ! whelcome to home page");
            break;
            case '/carriers' :
            res.end("we are hiring technical consultant...");
             
           break;
           case '/about' :
            res.end(" hey, this is hiring manager mohit !...");
            break;

            default :
            res.end("404 not found")
          }

      });


 
});

myServer.listen(4001, () => {

    console.log("server is running...")
})
