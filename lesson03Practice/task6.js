/** Task6. Write a program that reads a short positive number and tells how many bits are 1 in it.*/

//convert decimal to binary;
//ccount the 1 in the converted number;

let number = 123412;
let counter = 0;
while (number > 0) {
  if (number % 2 === 1) {
    number--;
    counter++;
  }
  number /= 2;
}
console.log(counter);
