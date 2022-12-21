let arr = [
  [false, false, true],
  [false, false, false],
  [false, false, false],
];

let hasTrue = false;
let counter = arr[0].length - 1;

for (let row = 0; row < arr.length - 1; row++) {
  for (let column = 0; column < counter; column++) {
    if (arr[row][column] === true) {
      hasTrue = true;
      break;
    }
  }
  counter--;
}
console.log(`The matrix has true: ${hasTrue}`);
