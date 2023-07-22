// Basic Types
const id: number = 10;
const profession: string = 'developer';
const isActive: boolean = true;

// any can be converted to any type later
let random: any = 'hello';
random = false;

// Arrays
const arr: number[] = [1, 2, 3, 4, 5];
const arr2: string[] = ['car', 'bike', 'truck'];
const arr3: any[] = [3, 5, 'car', false, 'motor'];

// Tuple (it should be in same order)
const bio: [string, number, boolean] = ['Travis', 25, true];

// Tuple Array
let employee: [number, string][];

employee = [
	[1, 'mike'],
	[2, 'clark'],
	[3, 'ben'],
	[4, 'adam'],
	[5, 'jason'],
];

// Union
let productID: number | string;

productID = 12;
productID = 'new';

// Enum
enum Dir1 {
	Up,
	Down,
	Left,
	Right,
}

console.log(Dir1.Up); // 0
console.log(Dir1.Down); // 1
console.log(Dir1.Left); // 2
console.log(Dir1.Right); // 3

enum Dir2 {
	Up = 1,
	Down,
	Left,
	Right,
}

console.log(Dir2.Up); // 1
console.log(Dir2.Down); // 2
console.log(Dir2.Left); // 3
console.log(Dir2.Right); // 4

// we can also set string in enum
enum Dir3 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}

console.log(Dir3.Up); // Up
console.log(Dir3.Down); // Down
console.log(Dir3.Left); // Left
console.log(Dir3.Right); // Right

// Object
type Person = {
	name: string;
	age: number;
	profession: string;
	active: boolean;
};

const person: Person = {
	name: 'Henry',
	age: 36,
	profession: 'Database Engineer',
	active: false,
};

// Type Assertion
let cid: any = 21;

let customerID = cid as number;

// Function
function addNum(x: number, y: number): number {
	return x + y;
}

console.log(addNum(12, 43)); // 55

// Void
function log(message: string | number): void {
	console.log(message);
}
// we can passed string as well as number in void
log('hello');
log(34);

// Interface
interface InterfacePerson {
	readonly name: string; // readonly will not let us change value
	profession: string;
	age?: number; // adding ? make it optional
	active?: boolean;
}

const interfacePerson: InterfacePerson = {
	name: 'Henry',
	profession: 'Database Engineer',
	active: false,
};

// interface with function
interface mathFunc {
	(x: number, y: number): number;
}

const add: mathFunc = (x: number, y: number): number => x + y;
const sub: mathFunc = (x: number, y: number): number => x - y;
const mul: mathFunc = (x: number, y: number): number => x * y;
const div: mathFunc = (x: number, y: number): number => x / y;

console.log(add(12, 3));
console.log(sub(12, 3));
console.log(mul(12, 3));
console.log(div(12, 3));

// Classes
class Animal implements AnimalInterface {
	id: number;
	name: string;
	type: string;

	constructor(id: number, name: string, type: string) {
		this.id = id;
		this.name = name;
		this.type = type;
	}

    description () {
        return `${this.name} is a ${this.type} animal`
    }
}

const animal1 = new Animal(1, 'Lion',  'Wild');
const animal2 = new Animal(2, 'Dog',  'Domestic');
const animal3 = new Animal(3, 'Horse',  'Domestic');

console.log(animal1);

console.log(animal1.name);

console.log(animal1.description()); // Lion is a Wild animal


// adding interface to classes
interface AnimalInterface {
    id: number;
	name: string;
	type: string;
    description(): string;
}

// SubClasses
class Pets extends Animal {
    home: string;

    constructor(id: number, name: string, type: string, home: string){
        super(id, name, type)
        this.home = home
    }
}

const pet1 = new Pets(1, 'Cow', 'Domestic', 'cowshed');
console.log(pet1);

// we can still access description() even it is not present in subclass
console.log(pet1.description());


// Generics
function getArr<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArr = getArr<number>([1,2,3,4,5])
let strArr = getArr<string>(['ben', 'kyle', 'john'])

numArr.push(6,7,8)
strArr.push('carlos')

console.log(numArr);
console.log(strArr);