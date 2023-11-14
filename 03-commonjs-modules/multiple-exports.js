const myName = 'William';
const myHobbies = ['swimming', 'boxing', 'cycling'];
const myFavoriteNumber = 3;
console.log('Text from multiple exports');

module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;

console.log('Text from multiple exports');
