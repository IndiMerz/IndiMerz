const fs = require('fs/promises');


// Create File
async function createFile(filename, content){
    try {
        await fs.writeFile(filename, content);
        console.log('File Created Successfully');
    } catch (err) {
        console.log(err);
    }
}
createFile('file4.txt', 'This is fourth file');

// Read File
async function readFile(filename){
    try {
        const data = await fs.readFile(filename, 'utf8')
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFile('file1.txt');
readFile('file2.txt');
readFile('file3.txt');
readFile('file4.txt');


// Delete File
async function deleteFile(filename){
    try {
        await fs.unlink(filename)
        console.log(`${filename} deteted`);
    } catch (err) {
        console.log(err);
    }
}

deleteFile('file1.txt')

// Rename File
async function renameFile(oldname, newname){
    try {
        await fs.rename(oldname, newname)
        console.log(`${oldname} renamed to ${newname}`);
    } catch (err) {
        console.log(err);
    }
}

renameFile('file3.txt', 'file3rn.txt');


// create folder
async function createFolder(foldername){
    try {
        await fs.mkdir(foldername)
        console.log(`${foldername} created!`);
    } catch (err) {
        console.log(err);
    }
}

createFolder('demo folder');
