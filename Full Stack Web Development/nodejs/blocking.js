//Synchronous or Blocking:
// -line by line execution

//Asynchronous or Non-Blocking:
// -line by line execution not guranteed 
// -callbacks will fire

const fs = require("fs");
fs.readFile("file.txt", "utf-8", (err, data)=>{
    console.log(err, data)
});
console.log("This is a message");

//nodejs works on non blockingio model. and non blocking is on callbacks