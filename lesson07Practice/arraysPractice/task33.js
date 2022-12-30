let matrix = [
  [1, 2, 3],
  [0, 5, 6],
  [0, 0, 9],
];
let sum = 0;

for (let row = 0; row < matrix.length; row++) {
  for (let column = row; column < matrix[row].length - 1; column++) {
    sum += matrix[row][column + 1];
  }
}

console.log(sum);
