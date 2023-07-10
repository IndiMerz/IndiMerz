const fs = require('fs/promises');

fs.writeFile('file2.txt', 'This is second file')
    .then(() => console.log('File Created Successfully'))
    .catch((err) => console.log(err));