"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = __importDefault(require("./Circle"));
let a = 5;
a.toExponential();
let b = "Hello World";
b.concat('Hey');
let c = true;
let d = 10;
let tab = [3, 5, 6];
for (const element of tab) {
    element.toFixed();
}
const [key, value] = [3, "Hello"];
console.log(key);
const myObject = {
    firstName: "John",
    age: 26,
    description: "Hey"
};
const { age, firstName } = myObject;
myObject.description = "Hello";
function myFunc(params) {
    return 42;
}
function myFunc2(params) {
}
const user = {
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
if (typeof user.description === 'number') {
}
if (user.address) {
    user.address.box = 5;
}
user.address?.box;
const defaultAge = 35;
const realAge = null;
const userAge = realAge ?? defaultAge;
console.log(userAge);
const speedDefault = 70;
const speed = 0;
const realSpeed = speed || speedDefault;
console.log(realSpeed, "Speed");
console.log(false && "hello");
true ? console.log("hello") : console.log('World');
const userInterface = {
    age: 26,
    name: 'Hello',
    description: 'Hey'
};
const user2 = {
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
const flipCoin = () => {
    return Math.random() > 0.5 ? 'Pile' : 'Face';
};
const resultat = flipCoin();
if (resultat === 'Face') {
    console.log('Face');
}
else {
    console.log('Pile');
}
var UserRoleEnum;
(function (UserRoleEnum) {
    UserRoleEnum["ADMIN"] = "ADMIN";
    UserRoleEnum["MODERATOR"] = "MODERATOR";
    UserRoleEnum["GUEST"] = "GUEST";
})(UserRoleEnum || (UserRoleEnum = {}));
console.log(UserRoleEnum.ADMIN, "Enum");
const adminRole = UserRoleEnum.ADMIN;
console.log(UserRoleEnum.ADMIN === adminRole, "Enum");
function displayRole(userRole) {
    if (UserRoleEnum.ADMIN === userRole) {
        console.log("Je suis un admin");
    }
}
try {
}
catch (error) {
    if (error instanceof Error) {
        error.message;
    }
}
const fusion = {
    id: 5,
    name: "John",
    description: "Ceci est une description"
};
class Shape2 {
    constructor(_name, perimetre) {
        this._name = _name;
        this.perimetre = perimetre;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
const shape = new Shape2('Triangle', 30);
console.log("OO - TS");
console.log(shape.name);
shape.name = "Carré";
console.log(shape.name);
const circle = new Circle_1.default();
console.log(circle.perimetre);
const favoriteElement = (favorite) => {
    if (typeof favorite === 'string') {
        console.log(favorite.toUpperCase());
        return;
    }
    if (typeof favorite === 'number') {
        console.log(favorite);
        return;
    }
};
const favoriteElementGen = (favorite) => {
    if (typeof favorite === 'string') {
        console.log(favorite.toUpperCase());
        return;
    }
    if (typeof favorite === 'number') {
        console.log(favorite);
        return;
    }
};
favoriteElement("Pierre");
favoriteElement(5);
favoriteElementGen(5);
const tabNumb = [5, 6];
let custom = {};
const tabString = ["hello", "world"];
for (const word of tabString) {
    custom[word] = "JS";
}
console.log(custom);
