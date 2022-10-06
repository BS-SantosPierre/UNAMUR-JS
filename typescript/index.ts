import CircleTest from "./Circle";

// Section Typages
let a: number = 5;
a.toExponential();
let b: string = "Hello World";
b.concat('Hey');
let c: boolean = true;
let d: any = 10;

// Tableau
let tab: number[] = [3, 5, 6];
// let tab2: Array<number> = [3, 5, 6];

for (const element of tab) {
	element.toFixed();
}

// Tuples
const [key, value] : [number, string]= [3, "Hello"];

console.log(key);

const myObject = {
	firstName: "John",
	age: 26,
	description: "Hey"
}
const { age, firstName } = myObject;

myObject.description = "Hello";

// Function
function myFunc(params: { option: string; id: number }): number {
	return 42;
}

// @ts-ignore
function myFunc2(params) {

}

// Type
type User = {
	id: number;
	name: string;
	age: number;
	description?: string | null;
	address?: Address
}

type Address = {
	street: string;
	box: number;
	zip: number;
}

const user: User = {
	id: 5,
	name: "John",
	age: 26,
	description: null,
	address: {
		street: "Rue du coucou",
		zip: 1000,
		box: 5
	}
};

// Falsy undefined, 0, null, '', false
if (typeof user.description === 'number') {

}

if (user.address) {
	user.address.box = 5
}
// Optional chaining
user.address?.box;

// Coalesce operator
const defaultAge = 35;
const realAge = null;

const userAge = realAge ?? defaultAge;

console.log(userAge);

// Conditional operator
const speedDefault = 70;
const speed = 0;

const realSpeed = speed || speedDefault; // Interpreter l'opérande de gauche comme un booléen

console.log(realSpeed, "Speed");

// React &&
console.log(false && "hello");

// Ternaire
true ? console.log("hello") : console.log('World');

// Type vs Interface
interface IUser {
	name: string;
	age: number;
}

interface IUser {
	description: string
}

const userInterface: IUser = {
	age: 26,
	name: 'Hello',
	description: 'Hey'
}

const user2: User = {
	id: 5,
	name: "John",
	age: 26,
	description: null,
	address: {
		street: "Rue du coucou",
		zip: 1000,
		box: 5
	}
};

// Litterals and Enums
const flipCoin = (): 'Pile'|'Face' => {
	return Math.random() > 0.5 ? 'Pile' : 'Face';
};

const resultat = flipCoin();

if (resultat === 'Face') {
	console.log('Face');
}else {
	console.log('Pile');
}

// type UserRole = {
// 	name: 'admin' | 'guest' | 'moderator'
// }

// const userRoleName:UserRole = {name: ''}

enum UserRoleEnum {
	ADMIN = "ADMIN",
	MODERATOR = "MODERATOR",
	GUEST = "GUEST"
}

type UserRole = 'GUEST'| 'MODERATOR' | 'ADMIN';

console.log(UserRoleEnum.ADMIN, "Enum");

const adminRole = UserRoleEnum.ADMIN
console.log(UserRoleEnum.ADMIN === adminRole, "Enum");

function displayRole(userRole: UserRoleEnum) {
	if (UserRoleEnum.ADMIN === userRole) {
		console.log("Je suis un admin");
	}
}


// Unknown
try {

} catch (error) {
	if (error instanceof Error) {
		error.message;
	}
}

// Intersection Types
type A = {
	id: number;
	name: string;
}

type B = {
	description: string;
}

type C = A & B;

const fusion: C = {
	id: 5,
	name: "John",
	description: "Ceci est une description"
}

// Classe

class Shape2 {
	constructor(private _name: string, private readonly perimetre: number) {
	}

	public get name() : string {
		return this._name;
	}

	public set name(value : string) {
		this._name = value;
	}
}

const shape = new Shape2('Triangle', 30);
console.log("OO - TS");
console.log(shape.name);

shape.name = "Carré";

console.log(shape.name);


const circle = new CircleTest();

console.log(circle.perimetre);

// Generics
const favoriteElement = (favorite: string | number) => {
	if (typeof favorite === 'string') {
		console.log(favorite.toUpperCase());
		return;
	}

	if (typeof favorite === 'number') {
		console.log(favorite);
		return;
	}
}

const favoriteElementGen = <T>(favorite: T) => {
	if (typeof favorite === 'string') {
		console.log(favorite.toUpperCase());
		return;
	}

	if (typeof favorite === 'number') {
		console.log(favorite);
		return;
	}
}

favoriteElement("Pierre");
favoriteElement(5);

favoriteElementGen<number>(5);

const tabNumb: Array<number> = [5, 6];

// Object Custom
type CustomObject = {
	[key: string] : string;
}

let custom: CustomObject = {};

const tabString = ["hello", "world"];

for (const word of tabString) {
	custom[word] = "JS";
}

console.log(custom);
