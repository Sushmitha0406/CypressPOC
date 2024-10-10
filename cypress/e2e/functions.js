// const prompt = require('prompt-sync')();
// function showMessage(from, text) {

// from = '*' + from + '*'; // make "from" look nicer

// prompt( from + ': ' + text );
// }

// let from = "John";

// showMessage(from, "Hello"); // *Ann*: Hello

// // the value of "from" is the same, the function modified a local copy
// prompt( from ); // Ann

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = toCelsius(80);
  console.log(value)