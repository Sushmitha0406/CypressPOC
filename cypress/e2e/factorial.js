function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Example usage:
  const number2 = 5;
  const resultIterative = factorialIterative(number2);
  console.log(`Factorial of ${number2} (iterative): ${resultIterative}`);
  