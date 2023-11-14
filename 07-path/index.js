const path = require('path');
const result = path.resolve('node', 'index.js');
console.log('result', result);

const filePath = 'C:\\Users\\Anna_Kudriashova\\Desktop\\node\\index.js';
const textFilePath = 'C:\\Users\\Anna_Kudriashova\\Desktop\\file.txt';
const relativePath = '.\\node\\movie.mov';
const directoryPath = '.\\node\\subfolder';
const indexPath =
    'C:\\Users\\Anna_Kudriashova\\Desktop\\node\\07-path\\node\\index.js';

console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute(relativePath));
// '/usr'
// 'D:\\'

console.log(path.basename(filePath)); // (index.js)
console.log(path.basename(directoryPath)); // (subfolder)

console.log(path.dirname(filePath)); // C:\Users\Anna_Kudriashova\Desktop\node
console.log(path.dirname(directoryPath)); // .\node

console.log(path.resolve(relativePath)); // c:\Users\Anna_Kudriashova\Desktop\node\node\movie.mov

console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(relativePath)); // .mov
console.log(path.extname(directoryPath)); // ''

console.log(path.parse(filePath));
const parsedPath = path.parse(filePath);
console.log(filePath);
const newPath = path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`);
console.log(newPath);
