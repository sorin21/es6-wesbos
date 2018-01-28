import { addTax } from './checkout';
// this is the way without npm installed
import { sum, kebabCase } from 'npm:lodash';

console.log(kebabCase('Sorin how is your day?'));

console.log(addTax(100, 0.20));
