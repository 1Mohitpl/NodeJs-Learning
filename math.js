function addNumber (a,b) {
 
    return a+b; 
}


function  subNumber (c,d) {

    return c-d;
}

module.exports = addNumber;   // here declare the funtion that indicate the function 
module.exports = subNumber;   // here now occure function over-right, therefore we can use javascript object to return multiple values 


module.exports =  {

     addFun:addNumber,
     subFun : subNumber,
};


exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;        // we can exports funtion in this way just using arrow funtions

