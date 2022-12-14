let number = 17571;
let isPalindrome = false;
let result = "";
let tenThousands = Math.floor(number / 10000) + "";
let thousands = Math.floor((number % 10000) / 1000) + "";ф
let hundreds = Math.floor((number % 1000) / 100) + "";
let tens = Math.floor((number % 100) / 10) + "";
let ones = Math.floor(number % 10) + "";

do {
  if (number > 9999) {
    result += ones + tens + hundreds + thousands + tenThousands;
  } else if (number > 999) {
    result += ones + tens + hundreds + thousands;
  } else if (number > 99) {
    result += ones + tens + hundreds;
  } else if (number > 10) {
    result += ones + tens;
  }

  if (number + "" === result) {
    console.log(`${number} is Palindrome.`);
    isPalindrome = true;
    break;
  }
} while (isPalindrome);
