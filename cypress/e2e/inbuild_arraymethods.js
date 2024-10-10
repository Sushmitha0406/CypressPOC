var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); 
//text concat
var firstname="sushmitha";
var lastname="thoutam";
//var fullname= firstname+" "+lastname;
var fullname=firstname.concat(" ",lastname);
console.log(fullname)

var join= numeric.join(" ")
console.log(join)
   
var index = [12, 5, 8, 130, 44].indexOf(8);
console.log(index)

const push = [1, 2, 3];
push.push(4);
console.log(push)

const pop = [1, 2, 3];
const removedElement = pop.pop();
console.log(removedElement)
console.log(pop)

const shift = [1, 2, 3];
const shiftedElement = shift.shift();
console.log(shiftedElement)
console.log(shift)

const unshift = [2, 3];
unshift.unshift(5);
console.log(unshift)

const splice = [1, 2, 3, 4, 5];
splice.splice(2, 1); // Removes 1 element at index 2
// arr is now [1, 2, 4, 5]
splice.splice(2, 0, 'a', 'b'); // Adds 'a' and 'b' starting from index 2
// arr is now [1, 2, 'a', 'b', 4, 5]
console.log(splice)

const slice = [1, 2, 3, 4, 5];
const newArr = slice.slice(1, 4); // Gets elements from index 1 to 2 (not inclusive of index 3)
// newArr is [2, 3]
console.log(newArr)

const reverse = [1, 2, 3, 4, 5];
const reversenumbers = reverse.reverse()
console.log(reversenumbers)

const arr = [1, 2, 3];
const doubled = arr.map(element => element * 2);
console.log(doubled)
// doubled is [2, 4, 6]

const numbers = [4, 2, 7, 1, 9, 3, 5];
// Finding the minimum value
const min = numbers.reduce((minValue, currentValue) => {
    return (currentValue < minValue) ? currentValue : minValue;
}, numbers[0]);
console.log("Minimum value:", min); // Output: 1
// Finding the maximum value
const max = numbers.reduce((maxValue, currentValue) => {
    return (currentValue > maxValue) ? currentValue : maxValue;
}, numbers[0]);
console.log("Maximum value:", max); // Output: 9

var sortednumbers=numbers.sort()
console.log(sortednumbers)

var fruits = new Array("orange", "mango", "banana", "sugar");         
var sorted = fruits.sort();
console.log(sorted)

var string = fruits.toString()
console.log(string)

var length = fruits.unshift("water");
console.log(fruits)
console.log(length)

var array = new Array( 10, 20, 30 );
console.log(array.length)
console.log(array.indexOf(10))

