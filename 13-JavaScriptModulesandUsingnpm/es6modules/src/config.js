// named export
// in app.js must have same name
export const apiKey = 'abc123';

// default export
// to be available in app.js
// in app.js can have a diff name
// export default apiKey;

export const url = 'http://wesbos.com';

export function sayHi(name) {
	console.log(`Hello there ${name}`);
}