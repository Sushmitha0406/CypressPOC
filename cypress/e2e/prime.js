// program to print prime numbers between the two numbers
const prompt = require('prompt-sync')();
// take input from the user
const lowerNumber = parseInt(prompt("enter the lowerNumber"));
const higherNumber = parseInt(prompt("enter the higherNumber"));
console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

// for (var n = 0; n <= 10; n++) {

//     var notPrime = false;
//     for (var i = 2; i <= n; i++) {
//         if (n%i===0 && i!==n) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(n);
//     }
// }


// let count=0
// let i,j 
// for(j=2;j<=100;j++)
// {
// for( i=1;i<=j;i++)
// {
//   if(j%i==0)
//   count++
// }

// if(count==2)
// console.log(j)
// count=0
// }