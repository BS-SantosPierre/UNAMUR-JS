// import Role ,{ A, C } from "./types";
import * as Role from "./types";

export class Shape {
	private name: string = "Triangle";
	perimetre: number;

	constructor(name: string) {
		this.name = name;
		this.perimetre = 50;
	}
}

const shape = new Shape('hey');

const role: Role.default = 'Admin';
