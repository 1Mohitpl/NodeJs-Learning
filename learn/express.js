const express = require("express");

const app = express();

const PORT = 4000;

const logger  = (req, res, next) =>{
    console.log("login from middleware1");
    next();
}

const logger2 = (req, res, next) =>{
    consolel.log("login from middleware2");
    next();
}

app.get('./home', (req, res)=>{
    res.send("hello from home server")
    
});

app.post('./home', (req, res) => {
    res.json({
        massage : "post req done"
    })
})

app.listen(PORT, ()=>{
    console.log(`server is connnected port : ${PORT}` );
    
})