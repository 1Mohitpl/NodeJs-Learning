const http = require("http");
const fs = require("fs");
const url = require("url");

const newServer = http.createServer((req, res) => {
     
    const log = `${Date.now()} :${req.url} New request recived\n`;
    const carUrl = url.parse(req.url);   // used to return the object of the path 
    console.log(carUrl);

    fs.appendFile("log.txt", log, (err, data) =>{
        switch (carUrl.pathname){
            case '/food':
                res.end("here your order....")
            break;
            case '/price':
                res.end("price of the food is....")
                break;
            case '/about' :
                res.end('the food is vegtable')
            break;

            default :
            res.end("404 not found");

        }



    });

   
});

newServer.listen(8000, () => console.log("server is started"));
