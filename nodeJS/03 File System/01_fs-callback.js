const fs = require('fs');

fs.writeFile('file1.txt', 'This is First File', (err) => {
    if (err) throw err;
    console.log('File Created Successfully');
})