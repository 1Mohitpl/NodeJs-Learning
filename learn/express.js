const express = require("express");

const app = express();

const PORT = 4000;


app.get('./home', (req, res)=>{
    res.send("hello from home server")
    
})

app.listen(PORT, ()=>{
    console.log(`server is connnected port : ${PORT}` );
    
})