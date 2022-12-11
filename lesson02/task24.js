let number = 2;
let isPalindrome = false;
let result = "";
let tenThousands;
let thousands;
let hundreds;
let tens;
let ones;

do {
  if (number > 9999) {
    tenThousands = Math.floor(number / 10000) + "";
    thousands = Math.floor((number % 10000) / 1000) + "";
    hundreds = Math.floor((number % 1000) / 100) + "";
    tens = Math.floor((number % 100) / 10) + "";
    ones = Math.floor(number % 10) + "";
    result += ones + tens + hundreds + thousands + tenThousands;
  } else if (number > 999) {
    thousands = Math.floor((number % 10000) / 1000) + "";
    hundreds = Math.floor((number % 1000) / 100) + "";
    tens = Math.floor((number % 100) / 10) + "";
    ones = Math.floor(number % 10) + "";
    result += ones + tens + hundreds + thousands;
  } else if (number > 99) {
    hundreds = Math.floor((number % 1000) / 100) + "";
    tens = Math.floor((number % 100) / 10) + "";
    ones = Math.floor(number % 10) + "";
    result += ones + tens + hundreds;
  } else if (number > 10) {
    tens = Math.floor((number % 100) / 10) + "";
    ones = Math.floor(number % 10) + "";
    result += ones + tens;
  }

  if (number + "" === result) {
    console.log(`${number} is Palindrome.`);
    isPalindrome = true;
    break;
  }
} while (isPalindrome);
