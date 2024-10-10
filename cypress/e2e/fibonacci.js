const prompt = require('prompt-sync')();
const number = prompt("Enter a number: ");

let n1=0,n2=1,n3,i;
console.log('Fibonacci series')
for(i=1;i<=number;i++)
{
    console.log(n1);
    n3=n1+n2;
    n1=n2;
    n2=n3;
}