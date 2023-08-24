/* Assignment 1:
 Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.*/

function printNumberType(n) {
  return n === 0 ? "ZERO" : n > 0 ? "POSITIVE" : "NEGATIVE";
}

console.log("-20 Number Type is :", printNumberType(-20));
console.log("240 Number Type is :", printNumberType(240));
console.log("30 Number Type is :", printNumberType(30));
console.log("0 Number Type is :", printNumberType(0));

/*Assignment 2:
Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.*/

function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result = result * i;
  }
  return result;
}

console.log("5 Factorial is :", factorial(5));

/*Assignment 3:
Write a JavaScript function that takes two numbers as parameters and returns the larger one.*/

function largerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(
  "Find Largest Number from the  both -10, -20",
  largerNumber(-10, -20)
);

/*Assignment 4:
Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).*/

function palindrome(value) {
  let valueLength = value.length;
  let isPalindrome;
  for (let i = 0; i < valueLength; i++) {
    if ((isPalindrome = value[i] === value[valueLength - i - 1])) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      return isPalindrome;
    }
  }
  return isPalindrome;
}

console.log("121232121 is it palindrome ", palindrome("121232121"));
console.log("malayalam  is it palindrome", palindrome("malayalam"));
console.log("rabbit  is it palindrome", palindrome("rabbit"));

/*Assignment 5:
Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.*/

function primeNumbers(n) {
  let primeNumbers = [];
  if (n === 1) {
    return 1;
  }
  for (let i = 2; i <= n; i++) {
    n % i === 0 ? primeNumbers.push(i) : "";
  }
  return primeNumbers;
}

console.log("Print PrimeNumbers till 30 :", primeNumbers(30));

/*Assignment 6:
Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.*/

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return +(num1 + num2);
    case "-":
      return +(num1 - num2);
    case "*":
      return +(num1 * num2);
    case "/":
      return Math.round(num1 / num2);
    default:
      break;
  }
}

console.log("Sum of two Numbers 3+5", calculator(3, 5, "+"));
console.log("Product of two Numbers 3*5", calculator(3, 5, "*"));
console.log("Subtract of two Numbers 3-5", calculator(3, 5, "-"));
console.log("Division of two Numbers 3/5", calculator(3, 5, "/"));

/*Assignment 7:
    Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.*/

function vowelsCount(value) {
  let vowelsString = value.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;
  for (let i = 0; i < vowelsString.length; i++) {
    if (vowels.includes(vowelsString[i])) {
      count++;
    }
  }

  return count;
}

console.log(
  'Number of vowels in a String "ILOVEJAVASCRIPT" :',
  vowelsCount("ILOVEJAVASCRIPT")
);

/*Assignment 8:
Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.*/

const isperfectNumber = (num) => {
  let result = 0;
  if (result > num) {
    return;
  }

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      result += i;
    }
  }
  return result === num ? true : false;
};

console.log("4 is a Perfect Number :", isperfectNumber(4));
console.log("6 is a Perfect Number :", isperfectNumber(6));
console.log("28 is a Perfect Number :", isperfectNumber(28));
console.log("496 is a Perfect Number :", isperfectNumber(496));
console.log("546 is a Perfect Number :", isperfectNumber(546));

/*Assignment 9:
Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.*/

const FibonacciSeries = (num) => {
  let sum = 0;
  let firstVal = 0;
  let secondVal = 1;
  if (num === 0) {
    return (sum = 0);
  } else if (num === 1) {
    return (sum = 1);
  }

  for (i = 2; i <= num; i++) {
    sum = firstVal + secondVal;
    firstVal = secondVal;
    secondVal = sum;
  }
  return sum;
};

console.log("FibonacciSeries of 9", FibonacciSeries(9));
console.log("FibonacciSeries of 5", FibonacciSeries(5));
console.log("FibonacciSeries of 1", FibonacciSeries(1));
console.log("FibonacciSeries of 0", FibonacciSeries(0));
console.log("FibonacciSeries of 4", FibonacciSeries(4));
console.log("FibonacciSeries of 10", FibonacciSeries(10));
console.log("FibonacciSeries of 20", FibonacciSeries(20));

/*Assignment 10:
Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.*/

const multiplicationTable = (num) => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

console.log(multiplicationTable(5));
