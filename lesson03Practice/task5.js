/*ask5. Write a program that reads a positive number and writes its binary representation.*/

//divide the number by 2 ;
//repeat ;

let number = 1234;
let result = "";
while (number > 0) {
  if (number % 2 === 1) {
    result = 1 + result;
    number--;
  } else {
    result = 0 + result;
  }
  number /= 2;
}
console.log(result);
