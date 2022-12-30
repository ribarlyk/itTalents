let matrix = [
  [1, 0, 0],
  [4, 5, 0],
  [7, 8, 9],
];
let isLowerTriangular = true;

for (let row = 0; row < matrix.length - 1; row++) {
  for (let column = row; column < matrix[row].length - 1; column++) {
    if (matrix[row][column + 1]) {
      isLowerTriangular = false;
    }
  }
}

isLowerTriangular
  ? console.log(`Matrix is lower triangular`)
  : console.log(`Matrix is not lower triangular`);
