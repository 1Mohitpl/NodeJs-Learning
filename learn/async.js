const fs = require('fs');

const crypto = require("crypto");

console.log("sync function start");


// Synchronous (Blocking) - it is block the main thread
// sha512, it is basically an Hash Algorithm 512-bit. It produces a 512-bit (64-byte) fixed-length hash value (digest), regardless of the size of the input.

const derivedKey = crypto.pbkdf2Sync("password", "key", 400000, 40, "sha512");
console.log("First password:", derivedKey.toString("hex"));


// async  non-blocking 
crypto.pbkdf2("password", "key", 4000000, 40, "sha512", (err, derivedKey) => {
    if (err) throw err;
    console.log("First password:", derivedKey.toString("hex"));
  });



console.log("sync function end");

// Asynchronous (Non-Blocking)

console.log("async function start");


const calculate = (a, b) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(a * b); // Resolve the result
      }, 3000);
    });
  };
  
  calculate(4, 5).then((ans) => {
    console.log("Result with Promise:", ans);
  });
