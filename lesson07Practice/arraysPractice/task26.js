let matrixOne = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matrixTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let areEqual = true;

for (let row = 0; row < matrixOne.length; row++) {
  for (let collumn = 0; collumn < matrixOne[row].length; collumn++) {
    if (matrixOne[row][collumn] !== matrixTwo[row][collumn]) {
      areEqual = false;
      break;
    }
  }
}

areEqual
  ? console.log(`Matrices are equal`)
  : console.log(`Matrices are  not equal`);
