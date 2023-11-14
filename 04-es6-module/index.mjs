import { season, temperature } from './named-exports.mjs';
import { humidity, isRaining } from './inline-exports.mjs';
import getDataFromServer from './default-export.mjs';
import DEFAULT_SERVER, {
    USERNAME as MY_USERNAME,
    PASSWORD as MY_PASSWORD,
} from './mixed-exports.mjs';

console.log(season, temperature);
console.log(humidity, isRaining);

getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

console.log(DEFAULT_SERVER, MY_USERNAME, MY_PASSWORD);
