// //* Phase 1:
// console.log('manage my name: Dulon Mahadi Molla');
// console.log('Meta Forces.');

// // javascript history names: moca, ES5, ES6, ...
// // variables declaration: var, let, const

// //* Phase 2:
// var name = 'dulon mahadi';
// console.log(name);

// var name = 'kamal';
// console.log(name);
// // var is re-assignable and re-declarable.

// let city = 'Dhaka';
// console.log(city);

// city = 'cittagong';
// console.log(city);
// // let is re-assignable but not re-declarable.
// // not supported: let city = 'Dhaka'; then let city = 'Chittagong'; // error.

// const country = 'bangladesh';
// console.log(country);
// // const is not re-assignable and not to be re-declarable.
// // const pi = 3.1416 then const pi = 5.1225; then pi = 8.2256; // error.

// // * Phase 3:
// // Scope: Global scope, Function scope, Block scope.
// // Global Scope: full window.
// // Function Scope: behind function.
// // Block Scope: behind block { ...  }. behind cali braces {}.
// var name = 'dulon molla'; //global scope.

// // var: global, function scoped.
// // let, const: global, function, block scoped.

// //* Phase 4:
// // assignable and declarable.
// // initialize:
// var names = 'dulon mahadi';
// // re assign:
// names = 'dulon molla';
// // re declare:
// var names = 'dulon mahadi molla';

// //* Phase 5:
// // Temporal Dead Zone (TDZ):
// console.log(age); // error: cannot access 'age' before initialization.
// let age = 35;
// // this is TDZ. so, always write clean and serialized code.

// // Hoisting:
// // hoisting means, moving declaration to the top and initialization stays in place.
// // suppose you write code,
// var salary = 50000;

// // when execute this code compiler read and write this code like this,
// var salary = undefined; // execute top of declaration
// salary = 50000; // execute in place of initialization
// // so this is called hoisting.

// // only declaration is hoisted, not the initialization.
// // var is hoisted, let and const are not hoisted.

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

// Loose vs Strict Equality:
5 == '5'; // true // comparison only values.
5 === '5'; // false // comparison values and types.

// NaN – Not a Number
NaN === NaN; // false.

// Truthy and Falsy Values:
false, 0, "", null, undefined, NaN // falsy values.
"0", "false", [], {}, function() // everything else is truthy including these values.
