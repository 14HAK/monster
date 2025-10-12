//* Phase 1:
console.log('manage my name: Dulon Mahadi Molla');
console.log('Meta Forces.');

// javascript history names: moca, ES5, ES6, ...
// variables declaration: var, let, const

//* Phase 2:
var name = 'dulon mahadi';
console.log(name);

var name = 'kamal';
console.log(name);
// var is re-assignable and re-declarable.

let city = 'Dhaka';
console.log(city);

city = 'cittagong';
console.log(city);
// let is re-assignable but not re-declarable.
// not supported: let city = 'Dhaka'; then let city = 'Chittagong'; // error.

const country = 'bangladesh';
console.log(country);
// const is not re-assignable and not to be re-declarable.
// const pi = 3.1416 then const pi = 5.1225; then pi = 8.2256; // error.

// * Phase 3:
// Scope: Global scope, Function scope, Block scope.
// Global Scope: full window.
// Function Scope: behind function.
// Block Scope: behind block { ...  }. behind cali braces {}.
var name = 'dulon molla'; //global scope.

// var: global, function scoped.
// let, const: global, function, block scoped.

//* Phase 4:
// assignable and declarable.
// initialize:
var names = 'dulon mahadi';
// re assign:
names = 'dulon molla';
// re declare:
var names = 'dulon mahadi molla';

//* Phase 5:
// Temporal Dead Zone (TDZ):
console.log(age); // error: cannot access 'age' before initialization.
let age = 35;
// this is TDZ. so, always write clean and serialized code.

// Hoisting:
// hoisting means, moving declaration to the top and initialization stays in place.
// suppose you write code,
// var is hoisted and set to undefined.
// let and const are hoisted but not initialized — so accessing them early gives.

var salary = 50000;

// when execute this code compiler read and write this code like this,
var salary = undefined; // execute top of declaration
salary = 50000; // execute in place of initialization
// so this is called hoisting.

// only declaration is hoisted, not the initialization.
// var is hoisted, let and const are not hoisted.

//* Phase 6:
// Data Type:
// Primitive data types.
// string, number, boolean, Symbol, BigInt, null, undefined
let name = 'dulon mahadi'; //string
let age = 35.25; //number
let isMarrid = false; //boolean
let id = Symbol('12345'); //Symbol
let bigNumber = 1234567890123456789012345678901234567890n;

// Reference data types.
// object > {}, array > [], function > ()
let person = { name: 'dulon', age: 35 }; //object
let colors = ['red', 'green', 'blue']; //array
function add(num1, num2) {
	return num1 + num2;
} //function
console.log(add(25, 35));

// DataTypes Identifier:
const pi = 3.1415;
console.log(typeof pi); //number)

// Type Coercion (Auto-Conversion):
'5' + 1; // "51" → number converted to string
'5' - 1; // 4 → string converted to number
true + 1; // 2
null + 1; // 1
undefined + 1; // NaN
typeof null is "object" // — this is a bug.

// Type checking:
let a = [];
console.log(a instanceof Array); // true
console.log(a instanceof Object); // true
console.log(typeof a); // object

// Loose vs Strict Equality:
5 == '5'; // true // comparison only values.
5 === '5'; // false // comparison values and types.

// NaN – Not a Number
NAN === "number"; // true
NaN === NaN; // false.

// Truthy and Falsy Values:
false, 0, "", null, undefined, NaN // falsy values.
"0", "false", [], {}, function() // everything else is truthy including these values.

//* Phase 8:
// Practice:
const name = 'Dulon Mahadi Molla';
const city = 'Dhaka';
let age = 30;

let x = 5;
let x = 10;
console.log(x);

console.log(count);
var count = 42;

console.log(cars);
let cars = 42;

//* Phase 9:
// Operators:
// arithmetic operators: +, -, *, /, %, ++, --
// assignment operators: =, +=, -=, *=, /=, %=
// comparison operators: ==, ===, !=, !==, >, <, >=, <=
// logical operators: &&, ||, !
// string operators: +, +=
// conditional (ternary) operator: ? :
let a = 10;
let b = 5;
let c = 20;

// arithmetic operators:
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a++); // 10
console.log(++a); // 12
console.log(b--); // 5
console.log(--b); // 3

// assignment operators:
a += 5; // a = a + 5
console.log(a); // 15
a -= 5; // a = a - 5
console.log(a); // 10
a *= 2; // a = a * 2
console.log(a); // 20
a /= 2; // a = a / 2
console.log(a); // 10
a %= 3; // a = a % 3
console.log(a); // 1 (remainder of 10/3)

// comparison operators:
console.log(a == b); // false
console.log(a === b); // false
console.log(a != b); // true
console.log(a !== b); // true
console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false

// logical operators:
console.log(a > b && a < c); // true
console.log(a > b || a > c); // true
console.log(!(a > b)); // false // not operator

// string operators:
let firstName = 'Dulon';
let lastName = 'Molla';
let fullName = firstName + ' ' + lastName;  // concatenation
console.log(fullName); // Dulon Molla
firstName += ' Mahadi'; // firstName = firstName + ' Mahadi'
console.log(firstName); // Dulon Mahadi

// conditional (ternary) operator:
let age = 20;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote); // Yes
// if age is 18 or more, canVote is 'Yes', otherwise 'No'.

//* Phase 10:
// Control Flow:
// if, else if, else.
if (10 > 12) {
	console.log('condition proves true!');
} else if (10 === 10) {
	console.log('condition proves false!');
} else {
	console.log('both are gone wrong!');
}

// switch case:
let marks = 78;
switch (marks) {
	case marks >= 60:
		console.log('You got A+');
		break;
	case marks >= 50:
		console.log('You got A');
		break;
	default:
		console.log('You are fail!');
}

//* Phase 11:
// Loops:
// for loops.
for (let i = 10; i > 1; i--) {
	console.log(i);
}

// while loops.
let i = 10;
while (i >= 1) {
	console.log(i);
	i--;
}

// do-while loops.
let i = 10;
do {
	console.log(i);
	i--;
} while (i >= 1);

// break and continue.
for (let i = 1; i <= 10; i++) {
	if (i === 5) continue; // continue skips 5
	console.log(i);
}

// for-of.
for (let char of 'dulon') {
	console.log(char);
}

// forEach.
let nums = [10, 20, 30, 'Dulon Mahadi Molla'];
nums.forEach((num) => {
	console.log(num);
});

// for-in // Objects (and arrays if needed)
let person = { name: 'Dulon', age: 35, city: 'Dhaka' };
for (let i in person) {
	console.log(i + ': ' + person[i]);
}

//* Phase 12:
// Functions:
// function declarations.
function sum(a, b) {
	// a,b is a parameter.
	return a + b;
}
console.log(sum(5, 10)); // 5,10 is an argument.

// function expressions.
const sum = function (a, b) {
	return a + b;
};
console.log(sum(5, 10));

// arrow functions.
const sum = (a, b) => a + b;
console.log(sum(5, 10));

rest+spread.
function sum(...nums) { //functions with rest parameter.
	return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sum(5, 10, 10));

function sum(...nums) {
	return nums.reduce((acc, val) => acc + val, 0);
}
let qualities = [5, 10, 10];
console.log(sum(...qualities)); //functions with spread operator.

// first-class functions.
function shout(msg) {
	return msg.toUpperCase();
}

function processMessage(fn) {
	console.log(fn('hello world'));
}
processMessage(shout);

// higher-order functions.
function createMultiplier(x) {
	return function (y) {
		return x * y;
	};
}
let double = createMultiplier(2);
console.log(double(5)); // 10

Closures & Lexical Scope.
function outer() {
	let count = 0; // private variable
	return function inner() {
		count++;
		return count;
	};
}
let counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// IIFE (Immediately Invoked Function Expression).
(function () {
	console.log('Runs immediately');
})();

Hoisting: Declarations vs Expressions.
hello(); // Declarations are hoisted.
function hello() {
	console.log('Hi');
}

greet(); // Expressions are not hoisted.
const greet = function () {
	console.log('Hi');
};

//* Phase 13:
// Arrays:
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); // 3- length check

let marks = [85, 90, 78];
console.log(marks[1]); //90- check position 1

marks[2] = 88; // change position 2

let arr = ['dulon', '25', true, 20, 100, 200];
arr.push('newItem'); // add item to the end
arr.pop(); // remove item from the end
arr.unshift('firstItem'); // add item to the beginning
arr.shift(); // remove item from the beginning
console.log(arr.indexOf(20)); // find index of 20
console.log(arr.includes(100)); // check if 100 exists
console.log(arr.slice(1, 4)); // get a sub-array from index 1 to 3
arr.splice(2, 1, 'replacedItem'); // remove 1 item at index 2 and add 'replacedItem'
arr.reverse(); // reverse the array
arr.sort(); // sort the array (alphabetically for strings, numerically for numbers)
arr.sort((a, b) => a - b); // Correct numeric sort

let newArr = arr.slice(1,3); // Copy from index 1 to 2
arr.sort(); // Lexical sort by default

// Iteration Methods.
let prices = [100, 200, 300];
prices.forEach((price) => console.log(price)); // forEach

let doubled = prices.map((price) => price * 2); // map

let expensive = prices.filter((price) => price > 150); // filter
let total = prices.reduce((acc, price) => acc + price, 0); // reduce

prices.find((price) => price > 150); // find
prices.findIndex((price) => price > 150); // findIndex
prices.some((price) => price > 250); // some
prices.every((price) => price > 50); // every

// Multidimensional Arrays.
let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(matrix[1][2]); // Accessing element 6

// Destructuring & Spread.
let [first, second, ...rest] = prices; // Destructuring
let newPrices = [...prices, 400, 500]; // Spread operator

//* Phase 14:
// Objects:
let student = {
	name: 'Dulon Mahadi Molla',
	age: 35,
	city: 'Dhaka',
	isMarrid: false,
	address: {
		street: '123 Main St',
		zip: '10001',
	},
};

// Key-Value Structure.
console.log(student['name']); // Accessing value by key
console.log(student.age); // Accessing value by key
console.log(UserActivation.address.street); // Accessing nested object value

// Adding/Modifying Properties.
student.phone = '123-456-7890'; // Adding new property
student.age = 36; // Modifying existing property

// object destructuring.
let { name, age } = student; // Destructuring
let { address: { street } } = student; // Destructuring
console.log(name, age);
console.log(street)

// for...in loop.
for (let key in student) {
	console.log(key + ': ' + student[key]);
} // Iterating over object properties

// Object Methods.
console.log(Object.keys(student)); // Getting all keys
console.log(Object.values(student)); // Getting all values
console.log(Object.entries(student)); // Getting key-value pairs
let copiedStudent = Object.assign({}, student); // Shallow copy
let deepCopiedStudent = JSON.parse(JSON.stringify(student)); // Deep copy

// this keyword.
let person = {
	name: 'Dulon',
	greet: function () {
		console.log('Hello, ' + this.name);
	},
};
person.greet(); // Using 'this' in method
// 'this' refers to the object calling the method.
let greet = person.greet;
greet(); // 'this' is undefined in this context
// 'this' refers to the global object (or undefined in strict mode).

// ❓ Optional Chaining.
console.log(student?.address?.street); // Safe access to nested properties

// delete obj.key; // Deleting a property
delete person.greet; // Deleting a method
console.log(person.greet); // undefined

//* Practice Zoon:
