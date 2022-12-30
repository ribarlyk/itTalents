let matrixOne = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;

for (let row = 0; row < matrixOne.length; row++) {
  sum += matrixOne[row][row];
}

console.log(sum);
