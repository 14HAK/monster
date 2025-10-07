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
// Temporal Dead Zone (TDZ).
console.log(age); // error: cannot access 'age' before initialization.
let age = 35;
// this is TDZ. so, always write clean and serialized code.

// Hoisting:
// hoisting means, moving declaration to the top and initialization stays in place.
// suppose you write code,
var salary = 50000;

// when execute this code compiler read and write this code like this,
var salary = undefined; // execute top of declaration
salary = 50000; // execute in place of initialization
// so this is called hoisting.

// only declaration is hoisted, not the initialization.
// var is hoisted, let and const are not hoisted.
