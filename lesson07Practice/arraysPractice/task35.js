let matrix = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

let isIdentityMatrix = true;

for (let row = 0; row < matrix.length; row++) {
  if (matrix[row][row] !== 1) {
    isIdentityMatrix = false;
    break;
  }
  for (let colum = row + 1; colum < matrix[row].length; colum++) {
    if (matrix[row][colum]) {
      isIdentityMatrix = false;
      break;
    }
  }

  for (let column = row; column > 0; column--) {
    if (matrix[row][column - 1]) {
      isIdentityMatrix = false;
      break;
    }
  }
}

isIdentityMatrix
  ? console.log(`Matrix is identity`)
  : console.log(`Matrix is not identity`);
