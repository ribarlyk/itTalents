let matrixOne = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matrixTwo = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];
let differenceOfMatrices = [];

for (let i = 0; i < matrixOne.length; i++) {
  differenceOfMatrices.push(new Array(matrixOne[i].length));
}

for (let row = 0; row < matrixOne.length; row++) {
  for (let collumn = 0; collumn < matrixOne[row].length; collumn++) {
    differenceOfMatrices[row][collumn] =
      matrixOne[row][collumn] - matrixTwo[row][collumn];
  }
}

console.log(differenceOfMatrices);
