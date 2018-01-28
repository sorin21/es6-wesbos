import slug from 'slug'; 
import { url } from './config';
import base64 from 'base-64';

// default because is the main function
export default function User(name, email, website) {
	// old way
	// return {
	// 	name: name, 
	// 	email: email, 
	// 	website: website
	// }

	return {name, email, website}
}

export function createURL(name) {
	return `${url}/users/${slug(name)}`
}

export function gravatar(email) {
	const hash = base64.encode(email);
	const photoURL = `http://www.gravatar.com/avatar/${hash}`
	return photoURL;
}