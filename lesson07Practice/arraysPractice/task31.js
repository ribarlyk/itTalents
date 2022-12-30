let matrix = [
  [1, 2, 3],
  [0, 5, 6],
  [0, 0, 9],
];
let isUpperTriangular = true;
for (let row = 1; row < matrix.length; row++) {
  for (let column = row; column > 0; column--) {
    if (matrix[row][column - 1] !== 0) {
      isUpperTriangular = false;
    }
  }
}

isUpperTriangular
  ? console.log("Matrix is upper triangular")
  : console.log("Matrix is not upper triangular");
