
const prompt = require('prompt-sync')();
let a
string=function(a){
 
if(typeof(a)==='string')
return true;
else
return false; 
}
console.log(string('abcd'))
console.log(string(123))

// const a = prompt("Enter a string: ");
// if/ let isPrime = true;
// // check if number is equal to 1
// if (number === 1) {
//     console.log('1 is neither prime nor composite number.')
// }
// // check if number is greater than 1
// else if (number > 1) {
//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(number + ' is a prime number')
//     } else {
//         console.log(number + ' is not a prime number')
//     }
// }
// // check if number is less than 1
// else {
//     console.log('The number is not a prime number.')
// }
