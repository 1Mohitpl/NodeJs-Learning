const express = require('express')
const app = express()
const port = 3000
app.use(middleware2);   // global middleware
app.use(middleware1);


function middleware1 (req, res, next) {
  console.log("i am middleware1")
  next();
}


function middleware2 (req, res, next) {
  console.log("i am middleware2")
  next();
}

function middleware3 (req, res, next) {
  console.log("i am middleware3")
  next();
}



app.get('/', middleware3, (req, res, nextMiddleware) =>{

      console.log("i am standardExpress");
      res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 



const http = require("http");
const PORT = 3000;

// using the createserver funtion we are actually create our basic http server using htto module
// this fucntion return a server objects, and takes a callback as an argument
// this function created a sever objects but did'nt start the server

const server = http.createServer( function  listener (req, res) {
      // this callback is an  kind of listener function that is going to collect 
      // every http request that we will send as an argument  
      console.log("details of req ", req);
      
      console.log("hello from server");
      
})

server.listen(PORT, function run(){
    console.log(`server is running port : ${PORT}`);
    
})