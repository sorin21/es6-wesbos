// import node modules
import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

// import local file
// deafault export
// import apiKey from './src/config';

// named export
import { apiKey, url, sayHi } from './src/config';


console.log(apiKey);
console.log(url);
sayHi('Sorin');

console.log('Hello World!');
const ages = [1, 1, 4, 52, 12, 4, 23];
console.log(uniq(ages));


import User, { createURL, gravatar } from './src/user';
const sorin = new User('Sorin Dragomir', 'dragonsorin@gmail.com', 'www.aproapetot.ro');
//console.log(sorin);

const profile = createURL(sorin.name);
console.log(profile);

const image = gravatar(sorin.email);
console.log('image', image);