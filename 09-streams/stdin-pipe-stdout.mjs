import stream from 'stream';
import fs from 'fs';

const upperCaseStream = new stream.Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase();
        cb(null, upperCased);
    },
});

// const reverseStream = new stream.Transform({
//     transform: function (chunk, encoding, cb) {
//         const reversedString = chunk.toString().split('').reverse().join('');
//         cb(null, reversedString);
//     },
// });

const reverseStream = new stream.Transform({
    transform: function (chunk, encoding, cb) {
        const reversedRecurString = reverseString(chunk.toString());
        cb(null, reversedRecurString);
    },
});

function reverseString(str) {
    const arrayOfChars = str.split('');
    const lastChar = arrayOfChars.pop();
    return arrayOfChars.reverse().concat(lastChar).join('');
}

// function reverseStringRecursively(str) {
//     if (str === '') return '';
//     else return reverseString(str.substr(1)) + str.charAt(0);
// }

//process.stdin.pipe(upperCaseStream).pipe(process.stdout);
process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);

// // pipe to file
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// //pipe to stdout
// process.stdin.pipe(process.stdout);
