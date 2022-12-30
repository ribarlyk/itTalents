let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row = 0; row < matrix.length; row++) {
  let temp = 0;
  for (let column = row + 1; column < matrix[row].length ; column++) {
    temp = matrix[row][column];
    matrix[row][column] = matrix[column][row];
    matrix[column][row] = temp;
  }
}
console.log(matrix);
