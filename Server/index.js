// const fs = require ("fs");
// const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    return res.send("hello from home page");
});

app.get("/about", (req, res) => {
  return res.send(`hello ${req.query.name}`);
});

app.listen(4001, ()=>console.log("server is started..."))



  //                                                    function myHandler(req, res) {
  // const log = `${Date.now()} : ${req.url} New request recived\n `;
  //   const myUrl = url.parse(req.url);
  //   console.log(myUrl);
  //     fs.appendFile("log.txt",log, (err, data)=>{
  //         switch(req.url) {

  //           case '/':   // root path or Home page
  //           res.end("hello from ! whelcome to home page");
  //           break;
  //           case '/carriers' :
  //           res.end("we are hiring technical consultant...");
             
  //          break;
  //          case '/about' :
  //           res.end(" hey, this is hiring manager mohit !...");
  //           break;

  //           default :
  //           res.end("404 not found")
  //         }

  //     });

  //                                                     }

// const myServer = http.createServer(app);

