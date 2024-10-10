function isArmstrongNumber(number) {
    // Convert the number to a string to find its length (number of digits)
    const numStr = String(number);
    const numDigits = numStr.length;
  
    // Calculate the sum of each digit raised to the power of the number of digits
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
      sum += Math.pow(parseInt(numStr[i], 10), numDigits);
    }
    // Check if the sum is equal to the original number
    return sum === number;
  }
  
  // Example usage:
  const exampleNumber = 123;
  if (isArmstrongNumber(exampleNumber)) {
    console.log(`${exampleNumber} is an Armstrong number.`);
  } else {
    console.log(`${exampleNumber} is not an Armstrong number.`);
  }
  