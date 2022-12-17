let number = 123;
let binaryNumber = [];

while (number > 0) {
  if (number % 2 === 1) {
    binaryNumber.unshift(1);
    number--;
  } else {
    binaryNumber.unshift(0);
  }
  number /= 2;
}
console.log(binaryNumber);
