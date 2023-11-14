// console.log(arguments.callee.toString());
// console.log(module);
// console.log(__filename); //full path to the current file
// console.log(__dirname); // full path to the folder of the current file
// console.log(exports); // empty object
// console.log(module.exports); // empty object
// console.log(require);
// console.log(require.extensions);

const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const {
    myName: myOtherName,
    myFriendName,
    myGreatHobbies,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-export');
//const greetingFn = require('c:\\Users\\Anna_Kudriashova\\Desktop\\node\\03-commonjs-modules\\single-export.js');

// import from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// mutates array in multiple-exports
myHobbies.push('climbing');

// import from single-export
console.log(greetingFn);
greetingFn(myName);

// import from export-and-import
console.log(myOtherName);
console.log(myFriendName);
console.log(myGreatHobbies);
