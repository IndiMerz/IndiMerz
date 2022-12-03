const fs = require("fs");
let text = fs.readFileSync("file.txt", "utf-8");
text = text.replace("javascript", "typescript");

console.log("the contant of the file is")
console.log(text);

console.log("creating a new file...")
fs.writeFileSync("typescript.txt", text);