/*console.log("Hello")*/

/*
JS OOP Fundamentals is a course designed to provide students with a good foundation in Object-Oriented Programming (OOP) principles using JavaScript. This course is ideal for beginner to intermediate JavaScript developers who want to enhance their understanding of OOP concepts and learn how to apply them effectively in JavaScript.
*/

/* Creating objects using object literals: Object literals allow you to create and initialize objects in JavaScript. You define properties and their values ​​inside curly braces {} */

// In JavaScript, every object has a prototype object, which allows sharing of properties and methods between objects.

// If a property or method is not found in the current object, JavaScript looks for it in the prototype object and continues up the prototype chain until it finds the property or reaches the end of the chain.

let person = {
	name: 'John',
	age: 25,
	profession: 'Software Engineer'
}

// Accessing object properties and methods:

console.log(person.name);
console.log(person.age);

// Accessing object properties using square brackets
console.log(person['profession']);

// Modifying object properties and methods:
// Object properties and methods can be modified by assigning new values ​​or functions to them.

person.age = 30;
console.log(person.age);

// Modifying objects methods
person.sayHello = function () {
	console.log("Hello, I'm" + this.name + ".Nice to meet you")
}
person.sayHello();

// Understanding object prototypes and the prototype:

// Creating a Prototype Object

let personPrototype = {
	greet: function () {
		console.log('Greetings!')
	}
}

// Creating a new object linked to the prototype object

let john = Object.create(personPrototype);
john.name = "john";
john.age = 25;

// Accessing properties and methods from the prototype object
console.log(john.name);
john.greet();

/*
We create a personPrototype object with a greet() method. 
The john object is created using Object.create() and linked to personPrototype. 
The john object inherits the greet() method from its prototype, allowing us to access and invoke it.
*/

// Array as Objects
myArray = [1, 2, 3];
console.log(typeof myArray);
console.log(myArray.constructor === Array);



/*
In JavaScript, a constructor is a special method used for creating and initializing objects that are created from a class or a constructor function. It is typically defined within a class or a constructor function and is automatically invoked when a new object is instantiated using the new keyword.

const cars = new Array("Saab", "Volvo", "BMW");
*/

// Constructor Example

function Person(name, age) {
	this.name = name;
	this.age = age;
}

const sean = new Person('Sean John', 10);
console.log(sean.name);
console.log(sean.age);

/*
In the code above, we define a constructor function Person that takes name and age as parameters. Within the constructor, we use this keyword to refer to the current object being created. We assign the passed name and age values ​​to the respective properties of the object.

To create a new instance of the Person object, we use the new keyword followed by the constructor function name, passing the required arguments. This invokes the constructor, which initializes the newly created object with the provided values.

In this example, john is an instance of the Person object, and we can access its properties (name and age) to retrieve the assigned values.

Constructors play a crucial role in JavaScript object creation, allowing you to define the initial state and behavior of objects within a class or constructor function.
*/

/*
Arrays in JavaScript have unique properties and methods that distinguish them from regular objects.
*/

const myArray2 = [1, 2, 3]
console.log(myArray.length);

myArray.push(4);
console.log(myArray);
console.log(myArray.length);

/*
The Array.prototype object serves as the prototype for all array instances created in JavaScript.
*/

let numbers = [1,2,3,4,5]

// Accessing the `push()` method through `Array.prototype`

Array.prototype.push.call(numbers, 6)
console.log(numbers);

/* 
In the above code, the push() method is accessed through Array.prototype using the call() method. The call() method allows us to invoke a function (in this case, the push() method) with a specified value and arguments.

While it is possible to access array methods through Array.prototype, it is more commonly used implicitly on array instances:
*/

let numbers2 = [1, 2, 3];

numbers2.push(4);
console.log(numbers2);

/*
Arrays are reference-based data structures.
*/

const originalArray = [1,2,3];
const newArray = originalArray;

newArray.push(4)
console.log(originalArray);
console.log(newArray);

/* 

___Blk4__
| 1,2	|	
| 3,4	|
|_______|

originalArray - stored in this location Blk4
newArray -> Blk4

*/

/* 
This reference-based behavior can be advantageous as it allows for efficient memory usage, especially when dealing with large arrays. However, it's important to be aware of this behavior when working with arrays in JavaScript. If you need to create a separate copy of an array, you can use methods like slice(), concat(), or the spread syntax ... to create a new array with the same values.
*/

/* 
The Math object in JavaScript is a built-in object that provides a range of mathematical functions and constants. It is designed to be accessed directly, without the need for instantiation or modification. 
*/

console.log(Math.PI);

const randomNumber = Math.random();
console.log(randomNumber);

/* 
Unlike the array object, the Math object in JS has NO constructor. All of its properties and methods can be used WITHOUT instantiating a Math object beforehand. Because of this, the Math object is said to be static.

const sampleArray = [1,2,3]
sampleArray.push(4)

Math.(method)
*/

// methods for rounding a number to an integer 
Math.round(3.14) //3 - rounds to nearest integer 
Math.ceil(3.14) //4 - rounds UP to nearest integer 
Math.floor(3.14) //3 - rounds DOWN to nearest integer 
Math.trunc(3.14) //3 - returns only the integer part (NEW in ES6) 
// method for returning the square root of a number 
Math.sqrt(3.14) //1.77 // method for finding the lowest value in a list of arguments
 ath.min(-4, -3, -2, -1, 0, 1, 2, 3, 4) //-4 // method for finding the highest value in a list
// method for finding the highest value in a list of arguments 
Math.max(-4, -3, -2, -1, 0, 1, 2, 3, 4) //4 // method for returning a random number between 0 (inclusive) and 1 (exclusive) Math.random()