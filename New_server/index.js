const http = require("http");
const fs = require("fs");
const { time } = require("console");

const newServer = http.createServer((req, res) => {
     
    const log = `${Date.now()} : new req aries\n`;

    fs.appendFile("log.txt", log, (err, data) =>{
        res.end(time.now);

    });

   
});

newServer.listen(3737, () => console.log("server is started"));
