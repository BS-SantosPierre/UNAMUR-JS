console.info("Ceci est un message d'info");

// console.log = () => { };

// alert('Ceci est une alerte');
// let nameUser = prompt('Quel est votre nom ?');
// let confirm = window.confirm('Etes vous sur ?');

// console.log(monTitre);

// Mot clés var - let - const
let name = "John Doe";
name = "Jane Doe";

let firstName = "John";
console.log(name);

const PI = 3.14;
// PI = 5;

var myVar = "Hello";

// console.log(window);


const myVar2 = undefined;
let myVar3 = NaN;

console.log(isNaN({}));

console.log(Number.isNaN('3'));

// new String("Coucou")

// String
'Ceci est un string  \' ';
"Ceci est un string ' ";
`Ceci est une chaîne de caractère

sur plusieurs lignes

`; // String templating - String Interpolation

// const nomComplet = firstName + ' ' + "Doe";
let nomComplet = `${firstName} Doe`;
console.log(typeof nomComplet);
nomComplet = 5;
console.log(typeof nomComplet);
let tab = [];
console.log(typeof tab);


class Person {

}
const person = new Person();

console.log(person instanceof Person);

// Tableau
const myTab = [1, 2, 3, 4, 80];

// console.log(myTab[65]);

// Find
myTab.find((element) => {
	return element === 3;
});

// Find Index
const indexElement = myTab.findIndex((element) => {
	return element === 3;
});

// Map
const myNewTab = myTab.map((element, index, copyTab) => {
	return element * index;
});

console.log(myTab);
console.log(myNewTab);

// Filter
const filteredTab = myTab.filter((element) => {
	return element <= 3;
});

// Sort
const sortTab = myTab.map((e) => e).sort((a, b) => {
	// Si inférieur 0
	if (a < b) {
		return 1;
	}

	if (a > b) {
		return -1;
	}

	return 0;
});

// Reduce
const total = myTab.reduce((acc, element) => acc + element, 0);

console.log("Total =>", total);

console.log(myTab);

console.log(sortTab, "Sort Tab");

// myTab.length = 0; // Supprimer le contenu de mon tableau

myTab.splice(indexElement, 2, 42, 45);

console.log(myTab, "FINAL");

// console.log(Array(5).fill());


// Object
const person1 = {
	name: "John Doe",
	age: 25,
	"is-busy": false,
	sayHi: function () {
		console.log(this);
		console.log("COUCOU");
	}
}

console.log(person1["is-busy"]);

person1.description = "Je suis John";

console.log(person1.sayHi());


class Address {
	constructor(street, box) {
		this.street = street;
		this.box = box;
		// this.display = this.display.bind(this);
	}

	display = () => {
		console.log(`${this.street} n°${this.box}`);
	}

	showAddress() {
		setTimeout(this.display, 1000);
	}
}


const address = new Address("Rue du coucou", 15);

address.showAddress();

// Primitive => Number, String, Boolean, Undefined, Null
// Reference => Array, Object, Function, Date, ...

let john = { age: 16 };

function incrementAge(person) {
	let copy = { ...person };
	copy.age++;
}

incrementAge(john);

console.log(john.age);

// Spread Operator
let john2 = { ...john, name: "John" };
console.log(john2);

const newTab = [10, ...myTab, 5, ...myTab];

console.log(newTab);

const newUser = {
	...john,
	name: "Jane"
}

newTab.push(55);

sayHello("John", 25, "Hello");

sayHello(undefined, 25);

function sayHello(name = "John", age) {
	console.log(arguments[0]);
	console.log(name);
	console.log(age);
	console.log("Hi");
}

const sayHelloArrow = () => {
	console.log('Hello Arrow');
}


const persons = [
	{
		name: "John",
		age: 26,
		description: "Je suis une description"
	},
	{
		name: "Jane",
		age: 30,
		description: "Je suis une description 2"
	}
]

persons.forEach((element, index) => {
	console.log(element + ' : ' + index);
});

for (const person of persons) {
	const { name, ...rest } = person;
	console.log(person.name);
	console.log(name);
	console.log(person.age++);
}

for (const key in persons[0]) {
	console.log(persons[0][key]);
}

// DOM
const monTitre = document.getElementById('monTitre');
const paragraphs = document.getElementsByTagName('p');
const monTitre2 = document.querySelector('#monTitre');
console.log(monTitre);
console.log(paragraphs);
// Contenu de l'élément
// innerHTML vs innerText
monTitre.innerHTML = "<i>Hello Tout Le Monde</i>";
// monTitre.innerText = "<i>Hello Tout Le Monde</i>";

// Changer la couleur des paragraphes
for (let i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.color = 'blue';
}

// Séléctionner mon bouton
const btn = document.getElementById('btn');
const section = document.getElementById('section');

btn.addEventListener('click', () => {
	const h2 = document.createElement('h2');
	h2.innerHTML = 'Salut !';
	section.appendChild(h2);
});

btn.addEventListener('click', () => {
	monTitre.classList.toggle('red');
});
