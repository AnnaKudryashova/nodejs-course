const fs = require('fs/promises');

fs.writeFile('./file.txt', 'First file text')
    .then(console.log('file was written'))
    .then(() => fs.appendFile('./first.txt', '\nOne more line'))
    .then(console.log('Appended text to the first.txt file'))
    .then(() => fs.rename('./first.txt', './renamed-first.txt'))
    .then(console.log('File was renamed'))
    .catch((err) => console.error(err));
