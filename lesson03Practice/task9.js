/* Task9. Write a task to check if a number is a palindrome;*/

let number = 112;
let result = "";
let tenThousands = Math.floor(number / 10000) + "";
let thousands = Math.floor((number % 10000) / 1000) + "";
let hundreds = Math.floor((number % 1000) / 100) + "";
let tens = Math.floor((number % 100) / 10) + "";
let ones = Math.floor(number % 10) + "";

let isPalindrome = false;

if (number > 9999) {
  result = ones + tens + hundreds + thousands + tenThousands;
} else if (number > 999) {
  result = ones + tens + hundreds + thousands;
} else if (number > 99) {
  result = ones + tens + hundreds;
} else if (number > 9) {
  result = ones + tens;
}

if (result == number) {
  isPalindrome = true;
}
console.log(`The number is Palindrom : ${isPalindrome}`);
