export type A = {
	name: string;
}

export type B = {
	description: string;
}

export type C = A & B;

type Role = 'Admin' | 'Guest';

export default Role;
