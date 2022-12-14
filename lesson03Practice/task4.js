/** Task4. Write a program that tells you if a number is prime.//prosto chislo*/

//check if the number is divisible on any other number except itslef and one.

let a = 2;
let number = 6;

let isPrime = true;

for (let i = a; i < number - 1; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(`The number is prime ${isPrime}`);
