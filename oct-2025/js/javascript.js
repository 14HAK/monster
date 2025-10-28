//* creates objects in javaScript:
// Object literal:
const person = {
	name: 'Sumiya Islam Mithila',
	age: 16,
};

// console.log(person);

// Object Constructor:
const student = new Object();
const student1 = Object(); // no need to new keyword

student['name'] = 'Jannatul Ferdawos';
student.age = 35;

// console.log(student, student1);

// Object Prototype Create:
const employee = Object.create(null);
employee['name'] = 'Dulon Mahadi Molla';
console.log(employee);

let vehicle = {
	wheels: 4,
	fuelType: 'Gasoline',
	color: 'Green',
};
let carProps = {
	type: {
		value: 'Volkswagen',
	},
	model: {
		value: 'Golf',
	},
};

var car = Object.create(vehicle, carProps);
console.log(car);
console.log(car.fuelType);
console.log(car.model);

// Function Constructor:
function Person(name, age) {
	this.name = name;
	this.age = age;
}

const studentOne = new Person('dulon mahadi', 28);
const student2 = new Person('sumaiya islam mithila', 15);

console.log(studentOne, student2);

// Objects Assign or Cloning Object:
const orgObject = { company: 'XYZ Corp' };
const carObject = { brand: 'Toyota' };
const staff = Object.assign({}, orgObject, carObject);

console.log(staff);

// ES6 Class Syntax:
class Person12 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

let obj = new Person12('Abdur Razzak', 56);
console.log(obj);
