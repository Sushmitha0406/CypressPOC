function isPalindromeNumber(number) {
	// Convert the number to a string
	const numStr = String(number);
  
	// Reverse the string and compare it with the original
	const reversedNumStr = numStr.split('').reverse().join('');
  
	// Check if the reversed string is equal to the original string
	return numStr === reversedNumStr;
  }
  
  // Example usage:
  const exampleNumber = 121;
  if (isPalindromeNumber(exampleNumber)) {
	console.log(`${exampleNumber} is a palindrome number.`);
  } else {
	console.log(`${exampleNumber} is not a palindrome number.`);
  }
  