// Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method to the prototype of Person
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create instances of Person
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Call the method added to the prototype
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
