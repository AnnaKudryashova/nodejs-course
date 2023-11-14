// Imports entire module including default export
// import * as dotenv from 'dotenv';
// dotenv.config();

import { config } from 'dotenv';

console.log(config);
config(); // must be called

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_URL);
