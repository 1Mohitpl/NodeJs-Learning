// practice this code to understand the working flow of libuv

const { isUtf8 } = require("buffer");
const fs = require("fs");
setImmediate (() => console.log("set-immediate"));

setTimeout(() => console.log("timer function"));

Promise.resolve("promise").then(console.log);

fs.readFile("./example.txt", "utf-8", () => {
      setTimeout( () => console.log("another timer"), 0);
      process.nextTick( () => console.log("another nextflick"));
      setImmediate( () => console.log("another setimmediate function"));
      console.log("read the fs file");
});

process.nextTick( () => console.log("nextflick function"));

console.log("read the last line of the code");
