const fs = require('fs');

fs.writeFileSync('file3.txt', 'Code will not execute until this line will complete')
console.log('File created successfully');