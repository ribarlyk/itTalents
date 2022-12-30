let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let index = matrix[0].length - 1;
for (let row = 0; row < matrix.length; row++) {
  let temp = 0;

  for (let column = 0; column < matrix[row].length; column++) {
    temp = matrix[row][row];
    matrix[row][row] = matrix[row][index];
    matrix[row][index] = temp;
    break;
  }
  index--;
}
console.log(matrix);
